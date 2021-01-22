"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
let curId = 0;
const commandId = (id) => `anonymous-command.${id}`;
function getAnonymousCommand(func) {
    const id = curId++;
    const parametrizedCommand = commandId(id);
    const d = vscode_1.commands.registerCommand(parametrizedCommand, () => {
        func();
    });
    return {
        command: parametrizedCommand,
        disposable: d,
    };
}
exports.getAnonymousCommand = getAnonymousCommand;
function getParametrizedCommand(command, args) {
    return getAnonymousCommand(() => {
        vscode_1.commands.executeCommand(command, ...args);
    });
}
exports.getParametrizedCommand = getParametrizedCommand;
//# sourceMappingURL=StatusBarHelper.js.map