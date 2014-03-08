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
    var result;
    // 1st fast path
    if (hyphenPos < 0) {
        result = map[tag] || map[tag.toLowerCase()];
        return Array.isArray(result) ? result[0] : result;
    }
    var initialSubtag = tag.substring(0, hyphenPos);
    result = map[initialSubtag] || map[initialSubtag.toLowerCase()];
    var isArray = Array.isArray(result);
    // 2nd fast path
    if (!isArray && tag.length - hyphenPos < 7) // "-fonipa"
        return result;
    var subtags = tag.substring(hyphenPos + 1).split('-');
    for (var i = 0; i < subtags.length; i++) {
        if (subtags[i].length === 1) {
            subtags.length = i;
            break;
        }
        subtags[i] = subtags[i].toLowerCase();
        if (subtags[i] === 'fonipa')
            return 'IPPH';
    }
    if (!isArray)
        return result;
    for (i = 1; i < result.length; i += 2) {
        if (subtags.indexOf(result[i]) >= 0)
            return result[i + 1];
    }
    return result[0];
}

// Do something useful if run directly.
(function () {
    if (require.main === module) {
        var s = ietfToOpenType(process.argv[2]);
        if (s === undefined) {
            console.error('Unable to find OpenType language system tag');
            process.exit(1);
        }
        console.log('%s', s);
    }
})();
