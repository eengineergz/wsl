"use strict";
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
const tool_1 = require("./tool");
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
class Local {
    constructor(config) {
        this.config = config;
    }
    upload(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!tool_1.default.getCurrentRoot()) {
                    vscode.window.showInformationMessage('Please Open the project of the file with folder.');
                    return false;
                }
                let saveFolder = this.config.path.startsWith('/') ?
                    path.join(tool_1.default.getCurrentRoot(), this.config.path) :
                    path.join(path.dirname(tool_1.default.getCurrentFilePath()), this.config.path);
                if (!fs.existsSync(saveFolder)) {
                    fs.mkdirSync(saveFolder);
                }
                let now = new Date();
                if (this.config.createDirectoryByDate) {
                    saveFolder = path.join(saveFolder, `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${(now.getDate()).toString().padStart(2, '0')}`);
                }
                let savePath = path.join(saveFolder, path.basename(filePath));
                if (fs.existsSync(savePath) &&
                    (yield tool_1.default.confirm('The file was exists. Would you replace it?', ['Yes', 'No'])) === 'No') {
                    return false;
                }
                fs.copyFileSync(filePath, savePath, fs.constants.COPYFILE_EXCL);
                return true;
            }
            catch (e) {
                vscode.window.showInformationMessage(`Save File Failed: ${e.message}`);
                return false;
            }
        });
    }
}
exports.default = Local;
//# sourceMappingURL=local.js.map