'use strict';

var map = require('./map');

exports.ietfToOpenType = ietfToOpenType;

/**
 * Convert an IETF language tag to an OpenType language system tag.
 * Returns undefined if there is no suitable OpenType language system tag.
 * @param {!string} tag an IETF language tag
 * @returns {string|undefined}
 */
function ietfToOpenType(tag) {
    var hyphenPos = tag.indexOf('-');
    var initialSubtag = hyphenPos < 0 ? tag : tag.substring(0, hyphenPos);
    var result = map[initialSubtag] || map[initialSubtag.toLowerCase()];
    if (typeof(result) === 'string' || result === undefined)
        return result;
    if (hyphenPos < 0)
        return result[0];
    var subtags = tag.substring(hyphenPos + 1).split('-');
    for (var i = 0; i < subtags.length; i++) {
        if (subtags[i].length === 1) {
            subtags.length = i;
            break;
        }
        subtags[i] = subtags[i].toLowerCase();
    }
    for (i = 1; i < result.length; i += 2) {
        if (subtags.indexOf(result[i]) >= 0)
            return result[i + 1];
    }
    return result[0];
}
