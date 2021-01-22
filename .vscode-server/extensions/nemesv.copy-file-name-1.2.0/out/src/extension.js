'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
const vscode = require("vscode");
const path = require("path");
let getPath = function (args) {
    let path = null;
    if (args && args.length > 0) {
        path = args[0].fsPath;
    }
    if (!path)
        path = vscode.window.activeTextEditor.document.fileName;
    return path;
};
let pasteAndShowMessage = function (fileName) {
    vscode.env.clipboard.writeText(fileName);
    vscode.window.setStatusBarMessage(`The filename "${fileName}" was copied to the clipboard.`, 3000);
};
function activate(context) {
    let disposable = vscode.commands.registerCommand('copy-file-name.copyFileName', (...args) => {
        var fullPath = getPath(args);
        var extName = path.extname(fullPath);
        var fileName = path.basename(fullPath, extName);
        pasteAndShowMessage(fileName);
    });
    context.subscriptions.push(disposable);
    disposable = vscode.commands.registerCommand('copy-file-name.copyFileNameWithExtension', (...args) => {
        var fullPath = getPath(args);
        var fileName = path.basename(fullPath);
        pasteAndShowMessage(fileName);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map