"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const INTERPOLATION_REGEXP = /\$\{(.*?)\}/g;
const PARSE_REGEXP = /^(.*?)(?:\/(.+)\/(.*)\/(.*?))?(?::(.*))?$/;
const MODIFIERS = {
    lower: (s) => s.toLowerCase(),
    upper: (s) => s.toUpperCase(),
    camel: lodash_1.camelCase,
    pascal: (s) => lodash_1.upperFirst(lodash_1.camelCase(s)),
    kebab: lodash_1.kebabCase,
    snake: lodash_1.snakeCase,
    dot: (s) => lodash_1.kebabCase(s).replace(/-/g, '.'),
    title: lodash_1.startCase,
};
class Interpolator {
    constructor(options = {}) {
        this.options = options;
        this.interpolations = {};
    }
    add(placeholder, replacement, options = {}) {
        this.interpolations[placeholder] = { replacement, options };
    }
    interpolate(string) {
        return string.replace(INTERPOLATION_REGEXP, (all, content) => {
            const match = content.match(PARSE_REGEXP);
            if (match == null) {
                return all;
            }
            const [, name, search, replace, reModifiers, rest = ''] = match;
            const interpolation = this.interpolations[name];
            if (interpolation == null) {
                return all;
            }
            const params = rest.split(':');
            const quoted = interpolation.options.quoted || params.indexOf('quoted') !== -1;
            const modifiers = params.map(p => MODIFIERS[p]).filter(Boolean);
            let replacement = interpolation.replacement;
            if (search) {
                const regexp = new RegExp(search, reModifiers);
                replacement = replacement.replace(regexp, replace);
            }
            for (const modifier of modifiers) {
                replacement = modifier(replacement);
            }
            if (quoted) {
                replacement = this.quote(replacement);
            }
            return replacement;
        });
    }
    quote(string) {
        if (this.options.quotes === 'double') {
            return `"${string.replace('"', '\\"')}"`;
        }
        else {
            return `'${string.replace('\'', '\\\'')}'`;
        }
    }
}
exports.default = Interpolator;
//# sourceMappingURL=Interpolator.js.map