"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const Path = require("path");
const FS = require("fs");
const Aligner_1 = require("./Aligner");
const Interpolator_1 = require("./Interpolator");
const util_1 = require("./util");
class IndexManifest {
    constructor(document) {
        this.document = document;
    }
    buildIndex(patterns, template, indent) {
        const { quotes, alignmentMarker } = vscode.workspace.getConfiguration('js-index');
        const aligner = new Aligner_1.default(alignmentMarker);
        const dir = Path.dirname(this.document.uri.fsPath);
        const names = this.getFilenames(patterns);
        const lines = names.map(name => {
            const nameWithoutExtension = name.replace(/\..*?$/, '');
            const interpolator = new Interpolator_1.default({ quotes });
            const variable = util_1.lazyCamelCase(nameWithoutExtension);
            interpolator.add('name', name, { quoted: true });
            interpolator.add('variable', variable);
            interpolator.add('relpath', `./${nameWithoutExtension}`, { quoted: true });
            interpolator.add('relpathwithext', `./${name}`, { quoted: true });
            return interpolator.interpolate(`${indent}${template}`);
        });
        return aligner.align(lines).join('\n');
    }
    writeIndex() {
        try {
            const edit = new vscode.WorkspaceEdit();
            for (const marker of this.readMarkers()) {
                this.replaceIndex(edit, marker);
            }
            vscode.workspace.applyEdit(edit);
        }
        catch (error) {
            if (error instanceof UserError) {
                vscode.window.showErrorMessage(error.message);
            }
            else {
                console.error(error);
            }
        }
    }
    replaceIndex(edit, marker) {
        let { indent, start, end, patterns, template } = marker;
        let index = this.buildIndex(patterns, template, indent);
        if (end < start) {
            // Because the pattern finders greedily eat newlines and blanks, it may be that the end index
            // is before the start index. In that case, insert a newline into the index.
            start = end;
            index = `\n${index}`;
        }
        const startPosition = this.document.positionAt(start);
        const endPosition = this.document.positionAt(end);
        const range = new vscode.Range(startPosition, endPosition);
        edit.replace(this.document.uri, range, index);
    }
    readMarkers() {
        const { defaultTemplate } = vscode.workspace.getConfiguration('js-index');
        const markers = [];
        let marker;
        let startFrom = 0;
        while ([marker, startFrom] = this.readNextMarker(startFrom), marker != null) {
            markers.push(marker);
        }
        if (markers.length === 0) {
            // Replace the entire file.
            markers.push({
                indent: '',
                start: 0,
                end: this.document.getText().length,
                patterns: [],
                template: defaultTemplate
            });
        }
        // Give back the markers in reverse order, so that a later index doesn't
        // overwrite an earlier one.
        markers.sort((a, b) => b.start - a.start);
        return markers;
    }
    readNextMarker(startFrom) {
        const text = this.document.getText();
        const { defaultTemplate } = vscode.workspace.getConfiguration('js-index');
        const part = text.slice(startFrom);
        const startMatch = part.match(/@index\s*(?:\((.*?)\))?\s*(?::\s*(.*?))?[\s\n]*(?:\n|$)/);
        const endMatch = part.match(/[\s\n]*\n[\/\*\s]*\/index/);
        if (startMatch == null) {
            return [null, text.length];
        }
        // Use start and end markers (@index ... /index) and optionally parse options from the start marker.
        const start = startFrom + startMatch.index + startMatch[0].length;
        const end = endMatch == null ? text.length : startFrom + endMatch.index;
        // Figure out the indentation of the start marker.
        const startPos = this.document.positionAt(start);
        const startLine = text.split('\n')[startPos.line - 1];
        const indent = startLine.match(/^\s*/)[0];
        const patterns = this.parsePatterns(startMatch[1]);
        const template = startMatch[2] || defaultTemplate;
        return [
            { indent, start, end, patterns, template },
            endMatch == null ? end : end + endMatch[0].length
        ];
    }
    parsePatterns(text) {
        if (text == null) {
            return [];
        }
        const patterns = [];
        for (let item of text.split(',')) {
            item = item.trim();
            if (item.length === 0) {
                continue;
            }
            if (item.startsWith('d:') || item.startsWith('D:')) {
                patterns.push(this.parsePattern('directory', item.slice(2).trim()));
            }
            else if (item.startsWith('f:') || item.startsWith('F:')) {
                patterns.push(this.parsePattern('file', item.slice(2).trim()));
            }
            else {
                patterns.push(this.parsePattern('file', item));
                patterns.push(this.parsePattern('directory', item));
            }
        }
        return patterns;
    }
    parsePattern(type, text) {
        const pattern = {
            type
        };
        if (text.startsWith('!')) {
            pattern.policy = 'exclude';
            text = text.slice(1).trim();
        }
        else {
            pattern.policy = 'include';
        }
        try {
            const regExp = new RegExp(text);
            if (regExp != null) {
                pattern.regExp = regExp;
            }
        }
        catch (error) {
            throw new UserError(`Invalid pattern: ${text}`);
        }
        return pattern;
    }
    getFilenames(patterns) {
        const dir = Path.dirname(this.document.uri.fsPath);
        const names = FS.readdirSync(dir);
        const filteredNames = [];
        for (const name of names) {
            const path = Path.join(dir, name);
            if (this.shouldInclude(name, path, patterns)) {
                filteredNames.push(name);
            }
        }
        return filteredNames;
    }
    shouldInclude(name, path, patterns) {
        // Never include the file we're writing to.
        if (path === this.document.uri.fsPath) {
            return false;
        }
        // Find the applicable patterns for this file / directory.
        const stat = FS.statSync(path);
        const applicablePatterns = patterns.filter(p => p.type === (stat.isDirectory() ? 'directory' : 'file'));
        // If there are no patterns -> include.
        if (applicablePatterns.length === 0) {
            return true;
        }
        // Figure out a base policy.
        // Look at the first pattern: does it specify an include, than start out by excluding everything,
        // and the other way around.
        let include = applicablePatterns[0].policy === 'exclude';
        for (const pattern of applicablePatterns) {
            if (pattern.regExp == null ? true : pattern.regExp.test(name)) {
                include = pattern.policy === 'include';
            }
        }
        return include;
    }
}
exports.default = IndexManifest;
class UserError extends Error {
}
//# sourceMappingURL=IndexManifest.js.map