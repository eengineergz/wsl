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
const fs = require("fs");
const tool_1 = require("./lib/tool");
const local_1 = require("./lib/local");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "markdown-image" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let pasteCommand = vscode.commands.registerCommand('markdown-image.paste', () => __awaiter(this, void 0, void 0, function* () {
        let stop = () => { };
        let config = tool_1.default.getConfig();
        try {
            stop = tool_1.default.showProgress('Uploading...');
            let savePath = tool_1.default.getTmpFolder();
            savePath = path.join(savePath, `pic_${new Date().getTime()}.png`);
            let images = yield tool_1.default.getPasteImage(savePath);
            images = images.filter(img => ['.jpg', 'jpeg', '.gif', '.bmp', '.png'].find(ext => img.endsWith(ext)));
            let upload;
            switch (config.saveLocation) {
                case 'local':
                    upload = new local_1.default(config);
                    break;
            }
            for (let i = 0; i < images.length; i++) {
                if (images[i] !== savePath) {
                    upload === null || upload === void 0 ? void 0 : upload.upload(images[i]);
                    continue;
                }
                let name = path.basename(yield tool_1.default.prompt('Name the picture you pasted', path.basename(savePath))) + '.png';
                images[i] = path.join(path.dirname(savePath), name);
                fs.renameSync(savePath, images[i]);
                upload === null || upload === void 0 ? void 0 : upload.upload(images[i]);
            }
        }
        catch (error) {
            vscode.window.showErrorMessage(`Something was wrong: ${error.message}`);
        }
        stop();
    }));
    context.subscriptions.push(pasteCommand);
    let configCommand = vscode.commands.registerCommand('markdown-image.config', () => {
        vscode.commands.executeCommand('workbench.action.openSettings', 'markdown-image');
    });
    context.subscriptions.push(configCommand);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map