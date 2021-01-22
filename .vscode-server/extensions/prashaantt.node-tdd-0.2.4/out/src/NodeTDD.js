"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vscode_1 = require("vscode");
const TestRunner_1 = require("./TestRunner");
const constants_1 = require("./constants");
let instance;
class NodeTDD {
    constructor() {
        this.enabled = false;
        this.outputShown = false;
        if (vscode_1.workspace.rootPath) {
            this.outputChannel = vscode_1.window.createOutputChannel(constants_1.config.OUTPUT_CHANNEL_NAME);
            this.testRunner = new TestRunner_1.TestRunner();
            this.extensionStatusBar = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 2);
            this.buildStatusBar = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 1);
            this.coverageStatusBar = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, 0);
            const activateOnStartup = NodeTDD.getConfig(constants_1.config.ACTIVATE_ON_STARTUP);
            if (activateOnStartup) {
                this.activate();
            }
            else {
                this.deactivate();
            }
            this.extensionStatusBar.show();
        }
    }
    static getInstance() {
        if (!instance) {
            instance = new NodeTDD();
        }
        return instance;
    }
    static getConfig(configSection) {
        return vscode_1.workspace.getConfiguration(constants_1.config.CONFIG_SECTION_KEY)
            .get(configSection.name, configSection.defaultValue);
    }
    activate() {
        this.enabled = true;
        this.showBuildStatusBar();
        Object.assign(this.extensionStatusBar, constants_1.messages.ACTIVATE_EXTENSION);
        this.testRunner.watch();
        this.showCoverageStatusBar();
    }
    deactivate() {
        this.enabled = false;
        this.hideBuildStatusBar();
        this.hideCoverageStatusBar();
        Object.assign(this.extensionStatusBar, constants_1.messages.DEACTIVATE_EXTENSION);
        this.testRunner.dispose();
    }
    setBuildStatusBar(obj) {
        Object.assign(this.buildStatusBar, obj);
    }
    showBuildStatusBar() {
        this.buildStatusBar.show();
    }
    hideBuildStatusBar() {
        this.buildStatusBar.hide();
    }
    clearOutput() {
        this.outputChannel.clear();
    }
    hideOutput() {
        this.outputChannel.hide();
        this.outputShown = false;
    }
    toggleOutput() {
        if (this.outputShown) {
            this.outputChannel.hide();
        }
        else {
            this.outputChannel.show();
        }
        this.outputShown = !this.outputShown;
    }
    appendOutput(text) {
        this.outputChannel.append(text);
    }
    stopBuild() {
        this.testRunner.stop();
    }
    showInfoDialog(code) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const verbose = NodeTDD.getConfig(constants_1.config.VERBOSE);
            if (typeof verbose === 'boolean' && !verbose) {
                return;
            }
            let clicked;
            const notOnlyOnFailure = verbose === true || !verbose.onlyOnFailure;
            if (notOnlyOnFailure && code === 0) {
                clicked = yield vscode_1.window.showInformationMessage(constants_1.messages.PASSING_DIALOG, constants_1.messages.SHOW_OUTPUT_DIALOG);
            }
            else if (code === 1) {
                clicked = yield vscode_1.window.showErrorMessage(constants_1.messages.FAILING_DIALOG, constants_1.messages.SHOW_OUTPUT_DIALOG);
            }
            else if (notOnlyOnFailure && code === null) {
                vscode_1.window.showWarningMessage(constants_1.messages.STOPPED_DIALOG);
            }
            if (clicked && clicked === constants_1.messages.SHOW_OUTPUT_DIALOG) {
                this.outputChannel.show();
                this.outputShown = true;
            }
        });
    }
    setCoverage(coverage) {
        if (coverage) {
            const threshold = NodeTDD.getConfig(constants_1.config.COVERAGE_THRESHOLD);
            const minimal = NodeTDD.getConfig(constants_1.config.MINIMAL);
            Object.assign(this.coverageStatusBar, constants_1.messages.coverage(coverage, threshold, minimal));
        }
    }
    clearCoverage() {
        this.coverageStatusBar.text = '';
    }
    hideCoverageStatusBar() {
        this.coverageStatusBar.hide();
    }
    showCoverageStatusBar() {
        if (NodeTDD.getConfig(constants_1.config.SHOW_COVERAGE) && this.coverageStatusBar.text) {
            this.coverageStatusBar.show();
        }
    }
    dispose() {
        this.extensionStatusBar.dispose();
        this.buildStatusBar.dispose();
        this.coverageStatusBar.dispose();
        this.outputChannel.dispose();
        this.testRunner.dispose();
    }
}
exports.NodeTDD = NodeTDD;
//# sourceMappingURL=NodeTDD.js.map