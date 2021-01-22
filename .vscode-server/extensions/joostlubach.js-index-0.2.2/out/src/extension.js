'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const IndexManifest_1 = require("./IndexManifest");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const disposable = vscode.commands.registerCommand('js-index.buildIndex', () => {
        const manifest = new IndexManifest_1.default(vscode.window.activeTextEditor.document);
        manifest.writeIndex();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map