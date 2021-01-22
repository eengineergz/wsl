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
const utils_1 = require("./utils");
const path = require("path");
const vscode = require("vscode");
const coding_picbed_1 = require("coding-picbed");
class Coding {
    constructor(config) {
        if (!Coding.coding) {
            Coding.coding = new coding_picbed_1.Coding();
        }
        if (!Coding.coding.lastconfig ||
            Coding.coding.lastconfig.token !== config.coding.token ||
            Coding.coding.lastconfig.repository !== config.coding.repository) {
            this.reconfig(config);
        }
        this.config = config;
    }
    reconfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.config = config;
                Coding.coding.lastconfig = config.coding;
                yield Coding.coding.config({ token: config.coding.token, repository: config.coding.repository });
            }
            catch (error) {
                vscode.window.showErrorMessage(`Config Failed: ${error.message}`);
            }
        });
    }
    upload(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                while (!Coding.coding.isInitialized()) {
                    yield utils_1.default.sleep(100);
                }
                let saveFolder = this.config.coding.path;
                let now = new Date();
                if (this.config.coding.createDirectoryByDate) {
                    saveFolder = path.join(saveFolder, `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${(now.getDate()).toString().padStart(2, '0')}`);
                }
                let data = yield Coding.coding.upload(filePath, saveFolder.replace(/\\/g, '/'));
                return data.urls[0];
            }
            catch (e) {
                vscode.window.showInformationMessage(`Upload File Failed: ${e.message}`);
                return null;
            }
        });
    }
}
exports.default = Coding;
//# sourceMappingURL=coding copy.js.map