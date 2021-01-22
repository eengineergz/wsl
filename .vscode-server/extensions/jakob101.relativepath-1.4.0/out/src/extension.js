"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode_1 = require("vscode");
const path = require("path");
let Glob = require("glob");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let relativePath = new RelativePath();
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode_1.commands.registerCommand("extension.relativePath", () => {
        // The code you place here will be executed every time your command is executed
        relativePath.findRelativePath();
    });
    context.subscriptions.push(relativePath);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
class RelativePath {
    constructor() {
        this._items = null;
        this._pausedSearch = null;
        this._myGlob = null;
        this._workspacePath = this.getWorkspaceFolder();
        this._configuration = vscode_1.workspace.getConfiguration("relativePath");
        this.initializeWatcher();
        this.searchWorkspace();
        this.initializeConfigWatcher();
    }
    // When a file is added or deleted, we need to update cache
    initializeWatcher() {
        // Watch for file system changes - as we're caching the searched files
        this._watcher = vscode_1.workspace.createFileSystemWatcher("**/*.*", false, true, false);
        // Add a file on creation
        this._watcher.onDidCreate((e) => {
            this._items.push(e.fsPath.replace(/\\/g, "/"));
        });
        // on change active text editor refresh the cache
        // if the workspace folder has changed
        vscode_1.window.onDidChangeActiveTextEditor((e) => {
            const currentWorkspacePath = this.getWorkspaceFolder();
            if (this._workspacePath !== currentWorkspacePath) {
                this._workspacePath = currentWorkspacePath;
                if (this._workspacePath) {
                    this.updateFiles(true);
                }
            }
        });
        // Remove a file on deletion
        this._watcher.onDidDelete((e) => {
            let item = e.fsPath.replace(/\\/g, "/");
            let index = this._items.indexOf(item);
            if (index > -1) {
                this._items.splice(index, 1);
            }
        });
    }
    getWorkspaceFolder() {
        const editor = vscode_1.window.activeTextEditor;
        if (editor) {
            const res = editor.document.uri;
            const folder = vscode_1.workspace.getWorkspaceFolder(res);
            return folder.uri.fsPath.replace(/\\/g, "/");
        }
    }
    // Purely updates the files
    updateFiles(skipOpen = false) {
        // Search for files
        if (this._pausedSearch) {
            this._pausedSearch = false;
            if (this._myGlob) {
                this._myGlob.resume();
            }
        }
        else {
            this._myGlob = new Glob(this._workspacePath + "/**/*.*", { ignore: this._configuration.get("ignore") }, (err, files) => {
                if (err) {
                    return;
                }
                this._items = files;
                if (!skipOpen) {
                    this.findRelativePath();
                }
            });
            this._myGlob.on("end", () => {
                this._pausedSearch = false;
            });
        }
    }
    // Go through workspace to cache files
    searchWorkspace(skipOpen = false) {
        let emptyItem = { label: "", description: "No files found" };
        // Show loading info box
        let info = vscode_1.window.showQuickPick([emptyItem], { matchOnDescription: false, placeHolder: "Finding files... Please wait. (Press escape to cancel)" });
        info.then((value) => {
            if (this._myGlob) {
                this._myGlob.pause();
            }
            if (this._pausedSearch === null) {
                this._pausedSearch = true;
            }
        }, (rejected) => {
            if (this._myGlob) {
                this._myGlob.pause();
            }
            if (this._pausedSearch === null) {
                this._pausedSearch = true;
            }
        });
        this.updateFiles(skipOpen);
    }
    // Compares the ignore property of _configuration to lastConfig
    ignoreWasUpdated(currentIgnore, lastIgnore) {
        if (currentIgnore.length !== lastIgnore.length) {
            return true;
        }
        else if (currentIgnore.some(glob => lastIgnore.indexOf(glob) < 0)) {
            return true;
        }
        return false;
    }
    // Listen for changes in the config files and update the config object
    initializeConfigWatcher() {
        vscode_1.workspace.onDidChangeConfiguration((e) => {
            const lastConfig = this._configuration;
            this._configuration = vscode_1.workspace.getConfiguration("relativePath");
            // Handle updates to the ignored property if there's one
            if (this.ignoreWasUpdated(this._configuration.ignore, lastConfig.ignore)) {
                this.updateFiles(true);
            }
        }, this);
    }
    // Show dropdown editor
    showQuickPick(items, editor) {
        if (items) {
            let paths = items.map((val) => {
                let item = { description: val.replace(this._workspacePath, ""), label: val.split("/").pop() };
                return item;
            });
            let pickResult;
            pickResult = vscode_1.window.showQuickPick(paths, { matchOnDescription: true, placeHolder: `Type to filter ${items.length} files` });
            pickResult.then((item) => this.returnRelativeLink(item, editor));
        }
        else {
            vscode_1.window.showInformationMessage("No files to show.");
        }
    }
    // Check if the current extension should be excluded
    excludeExtensionsFor(relativeUrl) {
        const currentExtension = path.extname(relativeUrl);
        if (currentExtension === '') {
            return false;
        }
        return this._configuration.excludedExtensions.some((ext) => {
            return (ext.startsWith('.') ? ext : `.${ext}`).toLowerCase() === currentExtension.toLowerCase();
        });
    }
    // Get the picked item
    returnRelativeLink(item, editor) {
        if (item) {
            const targetPath = item.description;
            const currentItemPath = editor.document.fileName.replace(/\\/g, "/").replace(this._workspacePath, "");
            let relativeUrl = path.relative(currentItemPath, targetPath).replace(".", "").replace(/\\/g, "/");
            if (this._configuration.removeExtension || this.excludeExtensionsFor(relativeUrl)) {
                relativeUrl = relativeUrl.substring(0, relativeUrl.lastIndexOf("."));
            }
            if (this._configuration.removeLeadingDot && relativeUrl.startsWith("./../")) {
                relativeUrl = relativeUrl.substring(2, relativeUrl.length);
            }
            vscode_1.window.activeTextEditor.edit((editBuilder) => {
                let position = vscode_1.window.activeTextEditor.selection.end;
                editBuilder.insert(position, relativeUrl);
            });
        }
    }
    findRelativePath() {
        // If there's no file opened
        let editor = vscode_1.window.activeTextEditor;
        if (this._workspacePath == null || !editor) {
            vscode_1.window.showInformationMessage("You need to have a file opened.");
            return; // No open text editor
        }
        // If we canceled the file search
        if (this._pausedSearch) {
            this.searchWorkspace();
            return;
        }
        // If there are no items found
        if (!this._items) {
            return;
        }
        let extendedLimit = this._configuration.extendedLimit, disableQuickFilter = true;
        if (extendedLimit && this._items.length <= extendedLimit) {
            disableQuickFilter = false;
        }
        else if (this._items.length <= 1000) {
            disableQuickFilter = false;
        }
        // Don't filter on too many files. Show the input search box instead
        if (disableQuickFilter) {
            const placeHolder = `Found ${this._items.length} files. Enter the filter query. Consider adding more 'relativePath.ignore' settings.`;
            const input = vscode_1.window.showInputBox({ placeHolder });
            input.then(val => {
                if (val === undefined) {
                    // User pressed 'Escape' 
                    return;
                }
                if (val === "") {
                    // User just pressed 'Enter'
                    this.showQuickPick(this._items, editor);
                    return;
                }
                this.showQuickPick(this._items.filter(item => item.toLowerCase().indexOf(val.toLowerCase()) > -1), editor);
            }, reason => {
                return;
            });
        }
        else {
            this.showQuickPick(this._items, editor);
        }
    }
    dispose() {
        this._items = null;
    }
}
//# sourceMappingURL=extension.js.map