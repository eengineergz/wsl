"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';
var init = false;
var hasCpp = false;
// let fs = require("fs");
const vscode_1 = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    if (!init) {
        init = true;
        vscode_1.commands.getCommands().then(function (value) {
            let result = value.indexOf("C_Cpp.SwitchHeaderSource");
            if (result >= 0) {
                hasCpp = true;
            }
        });
    }
    console.log("extension is now active!");
    // Step: If simple commands then add to this array
    let commandArray = [
        //=> ["name in package.json" , "name of command to execute"]
        ["ShortcutMenuBar.save", "workbench.action.files.save"],
        [
            "ShortcutMenuBar.toggleTerminal",
            "workbench.action.terminal.toggleTerminal",
        ],
        [
            "ShortcutMenuBar.toggleActivityBar",
            "workbench.action.toggleActivityBarVisibility",
        ],
        ["ShortcutMenuBar.navigateBack", "workbench.action.navigateBack"],
        ["ShortcutMenuBar.navigateForward", "workbench.action.navigateForward"],
        [
            "ShortcutMenuBar.toggleRenderWhitespace",
            "editor.action.toggleRenderWhitespace",
        ],
        ["ShortcutMenuBar.quickOpen", "workbench.action.quickOpen"],
        ["ShortcutMenuBar.findReplace", "editor.action.startFindReplaceAction"],
        ["ShortcutMenuBar.undo", "undo"],
        ["ShortcutMenuBar.redo", "redo"],
        ["ShortcutMenuBar.commentLine", "editor.action.commentLine"],
        ["ShortcutMenuBar.saveAll", "workbench.action.files.saveAll"],
        ["ShortcutMenuBar.openFile", "workbench.action.files.openFile"],
        ["ShortcutMenuBar.newFile", "workbench.action.files.newUntitledFile"],
        ["ShortcutMenuBar.goToDefinition", "editor.action.revealDefinition"],
        ["ShortcutMenuBar.cut", "editor.action.clipboardCutAction"],
        ["ShortcutMenuBar.copy", "editor.action.clipboardCopyAction"],
        ["ShortcutMenuBar.paste", "editor.action.clipboardPasteAction"],
        [
            "ShortcutMenuBar.compareWithSaved",
            "workbench.files.action.compareWithSaved",
        ],
        ["ShortcutMenuBar.showCommands", "workbench.action.showCommands"],
        ["ShortcutMenuBar.startDebugging", "workbench.action.debug.start"],
    ];
    let disposableCommandsArray = [];
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    commandArray.forEach((command) => {
        disposableCommandsArray.push(vscode_1.commands.registerCommand(command[0], () => {
            vscode_1.commands.executeCommand(command[1]).then(function () { });
        }));
    });
    // Step: else add complex command separately
    let disposableBeautify = vscode_1.commands.registerCommand("ShortcutMenuBar.beautify", () => {
        let editor = vscode_1.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        if (vscode_1.window.state.focused === true && !editor.selection.isEmpty) {
            vscode_1.commands
                .executeCommand("editor.action.formatSelection")
                .then(function () { });
        }
        else {
            vscode_1.commands
                .executeCommand("editor.action.formatDocument")
                .then(function () { });
        }
    });
    let disposableFormatWith = vscode_1.commands.registerCommand("ShortcutMenuBar.formatWith", () => {
        let editor = vscode_1.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        if (vscode_1.window.state.focused === true && !editor.selection.isEmpty) {
            vscode_1.commands
                .executeCommand("editor.action.formatSelection.multiple")
                .then(function () { });
        }
        else {
            vscode_1.commands
                .executeCommand("editor.action.formatDocument.multiple")
                .then(function () { });
        }
    });
    // see opened files list
    let disposableFileList = vscode_1.commands.registerCommand("ShortcutMenuBar.openFilesList", () => {
        let editor = vscode_1.window.activeTextEditor;
        if (!editor || !editor.viewColumn) {
            return; // No open text editor
        }
        vscode_1.commands
            .executeCommand("workbench.action.showAllEditorsByMostRecentlyUsed")
            .then(function () { });
    });
    let disposableSwitch = vscode_1.commands.registerCommand("ShortcutMenuBar.switchHeaderSource", () => {
        if (hasCpp) {
            vscode_1.commands
                .executeCommand("C_Cpp.SwitchHeaderSource")
                .then(function () { });
        }
        else {
            vscode_1.window.showErrorMessage("C/C++ extension (ms-vscode.cpptools) is not installed!");
        }
    });
    // Adding 1) to a list of disposables which are disposed when this extension is deactivated
    disposableCommandsArray.forEach((i) => {
        context.subscriptions.push(i);
    });
    // Adding 2) to a list of disposables which are disposed when this extension is deactivated
    context.subscriptions.push(disposableFileList);
    context.subscriptions.push(disposableBeautify);
    context.subscriptions.push(disposableFormatWith);
    context.subscriptions.push(disposableSwitch);
    //also update button in package.json.. see "Adding new buttons" in help.md file
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map