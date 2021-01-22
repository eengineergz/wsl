"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const path_1 = require("path");
const vscode_1 = require("vscode");
const debounce = require('lodash.debounce');
const kill = require('tree-kill');
const NodeTDD_1 = require("./NodeTDD");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
class TestRunner {
    constructor() {
        this.fsWatcher = null;
        this.process = null;
    }
    watch() {
        const buildOnCreate = NodeTDD_1.NodeTDD.getConfig(constants_1.config.BUILD_ON_CREATE);
        const buildOnDelete = NodeTDD_1.NodeTDD.getConfig(constants_1.config.BUILD_ON_DELETE);
        if (!this.fsWatcher) {
            const globPath = path_1.resolve(vscode_1.workspace.rootPath, NodeTDD_1.NodeTDD.getConfig(constants_1.config.GLOB));
            this.fsWatcher = vscode_1.workspace.createFileSystemWatcher(globPath, !buildOnCreate, false, !buildOnDelete);
        }
        this.fsWatcher.onDidChange(debounce(this.run.bind(this), constants_1.config.DEBOUNCE_WAIT_TIME));
        if (buildOnCreate) {
            this.fsWatcher.onDidCreate(debounce(this.run.bind(this), constants_1.config.DEBOUNCE_WAIT_TIME));
        }
        if (buildOnDelete) {
            this.fsWatcher.onDidDelete(debounce(this.run.bind(this), constants_1.config.DEBOUNCE_WAIT_TIME));
        }
        if (NodeTDD_1.NodeTDD.getConfig(constants_1.config.BUILD_ON_ACTIVATION)) {
            this.run();
        }
    }
    stop() {
        if (this.process) {
            kill(this.process.pid, 'SIGKILL');
        }
    }
    dispose() {
        this.stop();
        if (this.fsWatcher) {
            this.fsWatcher.dispose();
            this.fsWatcher = null;
        }
    }
    get testCommand() {
        const scriptName = NodeTDD_1.NodeTDD.getConfig(constants_1.config.TEST_SCRIPT).trim();
        return scriptName === 'test' ? [scriptName] : ['run', scriptName];
    }
    run() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.process) {
                return;
            }
            let packageObj;
            try {
                const packageJSON = yield utils_1.readFileAsync(vscode_1.workspace.rootPath + '/package.json');
                packageObj = JSON.parse(packageJSON);
            }
            catch (err) {
                const selection = yield vscode_1.window.showErrorMessage(constants_1.messages.PACKAGE_JSON_NOT_FOUND, constants_1.messages.DEACTIVATE_DIALOG);
                if (selection === constants_1.messages.DEACTIVATE_DIALOG) {
                    NodeTDD_1.NodeTDD.getInstance().deactivate();
                }
                return;
            }
            const scriptName = NodeTDD_1.NodeTDD.getConfig(constants_1.config.TEST_SCRIPT).trim();
            if (!packageObj.scripts[scriptName]) {
                const selection = yield vscode_1.window.showErrorMessage(constants_1.messages.scriptNotFound(scriptName), constants_1.messages.OPEN_PACKAGE_JSON);
                if (selection === constants_1.messages.OPEN_PACKAGE_JSON) {
                    vscode_1.workspace.openTextDocument(vscode_1.workspace.rootPath + '/package.json')
                        .then(textDocument => {
                        vscode_1.window.showTextDocument(textDocument);
                    });
                }
                return;
            }
            NodeTDD_1.NodeTDD.getInstance().clearOutput();
            NodeTDD_1.NodeTDD.getInstance().clearCoverage();
            NodeTDD_1.NodeTDD.getInstance().hideCoverageStatusBar();
            const minimal = NodeTDD_1.NodeTDD.getConfig(constants_1.config.MINIMAL);
            if (minimal) {
                NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar(constants_1.messages.building(minimal));
            }
            else {
                NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar(Object.assign({}, constants_1.messages.building(minimal), { text: constants_1.messages.building(minimal).text + ' '.repeat(4) }));
            }
            NodeTDD_1.NodeTDD.getInstance().showBuildStatusBar();
            this.execProcess(clearInterval.bind(null, this.animateBuilding()));
        });
    }
    animateBuilding() {
        let count = 1;
        const minimal = NodeTDD_1.NodeTDD.getConfig(constants_1.config.MINIMAL);
        if (minimal) {
            return setInterval(() => {
                count += 1;
                const alpha = count % 2 === 0 ? 0 : 1;
                NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar({
                    text: constants_1.messages.building(minimal).text,
                    color: `rgba(255, 255, 255, ${alpha})`
                });
            }, constants_1.config.BUILDING_ANIMATION_SPEED * 2);
        }
        return setInterval(() => {
            const dots = count++ % 4;
            const spaces = 4 - dots;
            NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar({
                text: constants_1.messages.building(minimal).text + '.'.repeat(dots) + ' '.repeat(spaces)
            });
        }, constants_1.config.BUILDING_ANIMATION_SPEED);
    }
    execProcess(callback) {
        let stdout = '';
        let coverageString = '';
        const showCoverage = NodeTDD_1.NodeTDD.getConfig(constants_1.config.SHOW_COVERAGE);
        const reporter = NodeTDD_1.NodeTDD.getConfig(constants_1.config.REPORTER);
        if (process.platform === 'win32') {
            this.process = child_process_1.spawn('npm', this.testCommand, { cwd: vscode_1.workspace.rootPath, shell: process.env['comspec'] });
        }
        else {
            this.process = child_process_1.spawn('npm', this.testCommand, { cwd: vscode_1.workspace.rootPath, detached: true });
        }
        this.process.unref();
        this.process.stdout.on('data', (chunk) => {
            if (showCoverage) {
                if (chunk.toString().toLowerCase().includes('%')) {
                    coverageString += chunk.toString();
                }
            }
            const chunkStr = chunk.toString();
            NodeTDD_1.NodeTDD.getInstance().appendOutput(chunkStr);
            if (reporter) {
                stdout += chunkStr;
            }
        });
        this.process.stderr.on('data', (chunk) => {
            NodeTDD_1.NodeTDD.getInstance().appendOutput(chunk.toString());
        });
        this.process.on('close', (code, signal) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            callback();
            this.process = null;
            const minimal = NodeTDD_1.NodeTDD.getConfig(constants_1.config.MINIMAL);
            let report;
            if (reporter) {
                report = {
                    reporter,
                    stdout
                };
            }
            if (signal) {
                NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar(constants_1.messages.buildStopped(minimal));
            }
            else if (code === 0) {
                NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar(yield constants_1.messages.passing(minimal, report));
            }
            else if (code === 1) {
                NodeTDD_1.NodeTDD.getInstance().setBuildStatusBar(yield constants_1.messages.failing(minimal, report));
            }
            NodeTDD_1.NodeTDD.getInstance().showInfoDialog(code);
            if (coverageString.length) {
                NodeTDD_1.NodeTDD.getInstance().setCoverage(utils_1.parseCoverage(coverageString));
                NodeTDD_1.NodeTDD.getInstance().showCoverageStatusBar();
            }
        }));
    }
}
exports.TestRunner = TestRunner;
//# sourceMappingURL=TestRunner.js.map