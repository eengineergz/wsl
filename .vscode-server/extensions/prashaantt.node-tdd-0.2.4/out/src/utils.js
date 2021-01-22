"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const Parser = require('tap-parser');
function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs_1.readFile(path, 'utf8', (err, data) => {
            if (err) {
                return reject(err.message);
            }
            return resolve(data);
        });
    });
}
exports.readFileAsync = readFileAsync;
function parseCoverage(chunk) {
    const coverageReports = chunk.toString().split('\n').filter(line => line.includes('%'));
    if (coverageReports.length > 0) {
        const percentages = coverageReports.map(report => {
            const match = report.match(/(\d*\.?\d*?(?=%))/);
            if (match) {
                return parseFloat(match[0]);
            }
            return 0;
        });
        const average = percentages.reduce((a, b) => a + b) / percentages.length;
        return parseFloat(average.toFixed(2));
    }
}
exports.parseCoverage = parseCoverage;
var Status;
(function (Status) {
    Status[Status["PASSING"] = 0] = "PASSING";
    Status[Status["FAILING"] = 1] = "FAILING";
})(Status = exports.Status || (exports.Status = {}));
function getMessage(status, minimal, report) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let text = '';
        let tooltip = '';
        const stats = yield getStats(report);
        if (minimal) {
            if (report && stats) {
                text = stats;
            }
            else {
                text = status === Status.PASSING ? '$(check)' : '$(alert)';
            }
            tooltip = status === Status.PASSING ? 'Build passing' : 'Build failing';
        }
        else {
            text = status === Status.PASSING ? '$(check)' : '$(alert)';
            if (stats) {
                text += ' ' + stats;
            }
            else {
                text += status === Status.PASSING ? ' Passing' : ' Failing';
            }
            tooltip = 'Toggle output';
        }
        return {
            text,
            tooltip
        };
    });
}
exports.getMessage = getMessage;
function getStats(report) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (report) {
            const result = yield parseReport(report);
            if (result) {
                return `${result.pass}/${result.count}`;
            }
        }
    });
}
function parseReport(report) {
    if (report.reporter === 'tap') {
        return new Promise(resolve => {
            const parser = new Parser();
            parser.on('complete', function (results) {
                resolve({
                    pass: results.pass,
                    count: results.count
                });
            });
            parser.end(report.stdout);
        });
    }
}
//# sourceMappingURL=utils.js.map