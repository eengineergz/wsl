"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utils_1 = require("./utils");
exports.commands = {
    ACTIVATE: 'nodeTdd.activate',
    DEACTIVATE: 'nodeTdd.deactivate',
    TOGGLE_OUTPUT: 'nodeTdd.toggleOutput',
    STOP_BUILD: 'nodeTdd.stopBuild',
};
exports.config = {
    CONFIG_SECTION_KEY: 'nodeTdd',
    OUTPUT_CHANNEL_NAME: 'TDD',
    BUILDING_ANIMATION_SPEED: 333,
    DEBOUNCE_WAIT_TIME: 400,
    FAILING_COLOUR: '#ff9b9b',
    PASSING_COLOUR: '#55e269',
    ACTIVATE_ON_STARTUP: { name: 'activateOnStartup', defaultValue: true },
    TEST_SCRIPT: { name: 'testScript', defaultValue: 'test' },
    GLOB: { name: 'glob', defaultValue: '{test,src}/**/*.{js,ts,jsx,tsx}' },
    REPORTER: { name: 'reporter', defaultValue: null },
    VERBOSE: { name: 'verbose', defaultValue: false },
    MINIMAL: { name: 'minimal', defaultValue: false },
    BUILD_ON_ACTIVATION: { name: 'buildOnActivation', defaultValue: false },
    BUILD_ON_CREATE: { name: 'buildOnCreate', defaultValue: false },
    BUILD_ON_DELETE: { name: 'buildOnDelete', defaultValue: false },
    SHOW_COVERAGE: { name: 'showCoverage', defaultValue: false },
    COVERAGE_THRESHOLD: { name: 'coverageThreshold', defaultValue: null }
};
exports.messages = {
    ACTIVATE_EXTENSION: {
        text: 'TDD $(rocket)',
        tooltip: 'Deactivate TDD mode',
        command: exports.commands.DEACTIVATE,
    },
    DEACTIVATE_EXTENSION: {
        text: 'TDD $(circle-slash)',
        tooltip: 'Activate TDD mode',
        command: exports.commands.ACTIVATE,
    },
    failing: function (minimal, report) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const message = yield utils_1.getMessage(utils_1.Status.FAILING, minimal, report);
            return {
                text: message.text,
                color: exports.config.FAILING_COLOUR,
                tooltip: message.tooltip,
                command: exports.commands.TOGGLE_OUTPUT
            };
        });
    },
    FAILING_DIALOG: 'Node TDD: The build failed',
    passing: function (minimal, report) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const message = yield utils_1.getMessage(utils_1.Status.PASSING, minimal, report);
            return {
                text: message.text,
                color: exports.config.PASSING_COLOUR,
                tooltip: message.tooltip,
                command: exports.commands.TOGGLE_OUTPUT
            };
        });
    },
    PASSING_DIALOG: 'Node TDD: The build passed',
    SHOW_OUTPUT_DIALOG: 'Show output',
    building: function (minimal) {
        return {
            text: minimal ? '$(tools)' : '$(tools) Building',
            color: 'inherit',
            tooltip: 'Stop current build',
            command: exports.commands.STOP_BUILD
        };
    },
    buildStopped: function (minimal) {
        return {
            text: minimal ? '$(stop)' : 'Build stopped',
            color: 'inherit',
            tooltip: minimal ? 'Build stopped' : '',
            command: ''
        };
    },
    STOPPED_DIALOG: 'Node TDD: The build was stopped',
    OPEN_PACKAGE_JSON: 'Open package.json',
    PACKAGE_JSON_NOT_FOUND: 'Node TDD: package.json was not found',
    DEACTIVATE_DIALOG: 'Deactivate TDD mode',
    coverage: function (coverage, threshold, minimal) {
        return {
            text: minimal ? `${coverage}%` : `$(dashboard) ${coverage}%`,
            tooltip: 'Test coverage',
            color: threshold ? (coverage >= threshold ?
                exports.config.PASSING_COLOUR : exports.config.FAILING_COLOUR) : 'inherit'
        };
    },
    scriptNotFound: function (scriptName) {
        return `Node TDD: The npm script \`${scriptName}\` was not found`;
    }
};
//# sourceMappingURL=constants.js.map