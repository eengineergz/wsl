"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Code = require("vscode");
const NodeTDD_1 = require("./NodeTDD");
const constants_1 = require("./constants");
function activate(context) {
    const nodeTdd = NodeTDD_1.NodeTDD.getInstance();
    const activateCommand = Code.commands.registerCommand(constants_1.commands.ACTIVATE, () => {
        nodeTdd.activate();
    });
    const deactivateCommand = Code.commands.registerCommand(constants_1.commands.DEACTIVATE, () => {
        nodeTdd.deactivate();
    });
    const toggleOutputCommand = Code.commands.registerCommand(constants_1.commands.TOGGLE_OUTPUT, () => {
        nodeTdd.toggleOutput();
    });
    const stopBuildCommand = Code.commands.registerCommand(constants_1.commands.STOP_BUILD, () => {
        nodeTdd.stopBuild();
    });
    context.subscriptions.push(activateCommand, deactivateCommand, toggleOutputCommand, stopBuildCommand, nodeTdd);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map