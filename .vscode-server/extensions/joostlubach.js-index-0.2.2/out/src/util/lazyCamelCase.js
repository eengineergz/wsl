"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Camel-cases a string, keeping as much of it intact. This only aims to remove non-alphanumeric characters,
 * not to provide a full camel case.
 *
 * @param string The string to camel-case.
 */
function lazyCamelCase(string) {
    return string.replace(/[^a-z0-9]+([a-z0-9]|$)/gi, (_, l) => l.toUpperCase());
}
exports.default = lazyCamelCase;
//# sourceMappingURL=lazyCamelCase.js.map