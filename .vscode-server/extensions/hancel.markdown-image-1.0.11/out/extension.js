'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");
const utils_1 = require("./lib/utils");
const utils_2 = require("./lib/utils");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let index = 1;
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "markdown-image" is now active!');
    let config = utils_1.default.getConfig();
    let upload = utils_1.default.getUpload(config);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let pasteCommand = vscode.commands.registerCommand('markdown-image.paste', () => __awaiter(this, void 0, void 0, function* () {
        let stop = () => { };
        try {
            stop = utils_1.default.showProgress(utils_2.locale['uploading']);
            console.log(config.base.uploadMethod);
            let editor = vscode.window.activeTextEditor;
            let selections = utils_1.default.getSelections();
            let savePath = utils_1.default.getTmpFolder();
            savePath = path.join(savePath, `pic_${new Date().getTime()}.png`);
            let images = yield utils_1.default.getPasteImage(savePath);
            images = images.filter(img => ['.jpg', '.jpeg', '.gif', '.bmp', '.png', '.webp'].find(ext => img.endsWith(ext)));
            console.log(`Get ${images.length} Images`);
            let urls = [];
            for (let i = 0; i < images.length; i++) {
                let name = (yield utils_1.default.formatName(config.base.fileNameFormat, images[i], savePath === images[i])) || images[i];
                console.log(`Uploading ${images[i]} to ${name}.`);
                let p = yield (upload === null || upload === void 0 ? void 0 : upload.upload(images[i], name));
                if (p) {
                    urls.push(p);
                }
            }
            let insertCode = '';
            for (let i = 0; i < urls.length; i++) {
                let selection = `${utils_2.locale['picture']} ${index++}`;
                if ((selections === null || selections === void 0 ? void 0 : selections.length) === 1 && (editor === null || editor === void 0 ? void 0 : editor.document.getText(selections[0]))) {
                    selection = `${editor === null || editor === void 0 ? void 0 : editor.document.getText(selections[0])} ${i + 1}`;
                }
                else if ((selections === null || selections === void 0 ? void 0 : selections[i]) && (editor === null || editor === void 0 ? void 0 : editor.document.getText(selections[i]))) {
                    selection = (selections === null || selections === void 0 ? void 0 : selections[i]) && (editor === null || editor === void 0 ? void 0 : editor.document.getText(selections[i]));
                }
                let text = `![${selection}](${encodeURIComponent(urls[i]).replace(/%2F/g, '/').replace(/%3A/g, ':')})  \n`;
                if ((selections === null || selections === void 0 ? void 0 : selections[i]) && (selections === null || selections === void 0 ? void 0 : selections.length) > 1) {
                    yield utils_1.default.editorEdit(selections[i], text);
                }
                else {
                    insertCode += text;
                }
            }
            if (insertCode) {
                yield utils_1.default.editorEdit(editor === null || editor === void 0 ? void 0 : editor.selection.active, insertCode);
            }
            utils_1.default.noticeComment(context);
        }
        catch (error) {
            console.dir(error);
            vscode.window.showErrorMessage(`${utils_2.locale['something_wrong']}${error.message}\n${error.toString()}`);
        }
        stop();
    }));
    context.subscriptions.push(pasteCommand);
    let configCommand = vscode.commands.registerCommand('markdown-image.config', () => {
        vscode.commands.executeCommand('workbench.action.openSettings', 'markdown-image');
    });
    context.subscriptions.push(configCommand);
    vscode.workspace.onDidChangeConfiguration(function (event) {
        config = utils_1.default.getConfig();
        upload = utils_1.default.getUpload(config);
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map