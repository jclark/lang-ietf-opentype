'use strict';

var map =
// Make it easy to use a sed script to extract these test cases.
{
    "en": "ENG",
    "EN": "ENG",
    "en-US": "ENG",
    // Arabic
    "ar": "ARA",
    "arb": "ARA",
    "ar-Syrc": "GAR",
    "arb-Syrc": "GAR",
    "ar-arb-Syrc": "GAR",
    // North Levantine spoken Arabic (comes from macrolanguage expansion)
    "apc": "ARA",
    // Don't recognize as GAR
    "apc-Syrc": "ARA",
    "ary": "MOR",
    "ar-ary": "MOR",
    // Chinese
    "zh-CN": "ZHS",
    "zh-HK": "ZHH",
    "ZH-hk": "ZHH",
    "zh-Hant-x-HK": "ZHT",
    "zh-MO": "ZHT",
    "zh-SG": "ZHS",
    "zh-TW": "ZHT",
    "zh-Hans": "ZHS",
    "zh-Hant": "ZHT",
    "zh-Hant-HK": "ZHH",
    "zh-Hans-HK": "ZHS",
    "zh-yue-Hant-HK": "ZHH",
    // Yue (of which Cantonese is a dialect) is a component of the Chinese macrolanguage
    "yue-HK": "ZHH",
    "yue-Hant-HK": "ZHH",
    "yue-Hant": "ZHT",
    "yue": "ZHS",
    // Greek
    "el": "ELL",
    "el-polyton": "PGR",
    "el-Grek-GR-polyton-x-wow": "PGR"
};

var ietfToOpenType = require('../lib/lang').ietfToOpenType;

function createTest(tag) {
    exports[tag] = function (test) {
        test.expect(1);
        test.equal(ietfToOpenType(tag), map[tag]);
        test.done();
    }
}

(function () {
    for (var tag in map) {
        if (map.hasOwnProperty(tag))
            createTest(tag);
    }
})();

