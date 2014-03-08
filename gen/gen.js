"use strict";

var argv = require('optimist')
     .usage('Usage: $0 [-j]')
     .boolean('j').alias('j', 'json').describe('Generate output in JSON format')
     .boolean('m').alias('m', 'macrolang-expand').describe('Generate mappings for components of mapped macrolanguages')
     .argv;

var registry = require('language-subtag-registry/data/json/registry');

var iso639 = require('./iso639');

var expectMissing = [
    "APPH", // Phonetic transcription - Americanist conventions
    "BAL",  // Balkar
    "BCR",  // Bible Cree
    "FNE",  // Forest Nenets (conflict with TNE for yrk)
    "IPPH", // Phonetic transcription - IPA conventions (maps to variant fonipa, but we deal with this separately)
    "KHS",  // Khanty-Shurishkar (conflict with KHK for kca)
    "KHV",  // Khanty-Vakhi (conflict with KHK for kca)
    "LCR",  // L-Cree (conflict with MCR for crm)
    "MAL",  // Malayalam Traditional (conflict with MLR for mal)
    "NGR",  // Nagari
    "NHC",  // Norway House Cree
    "SAY",  // Sayisi (conflict with CHP for chp)
    "SXT",  // Sutu
    "TCR",  // TH-Cree (conflict with DCR for cwd)
    "WCR",  // West-Cree
    "YIC"   // Yi Classic 
];

var expectDeprecated = [
    "btb",
    "mo",
    "dap"
];

var qualifyRules = {
    ar: [ // Arabic macrolanguage
        // Support ary as an extlang ie ar-ary
        "ary", "MOR",
        // Garshuni is Arabic with the Syriac script
        "syrc", "GAR"
    ],
    arb: ["syrc", "GAR"], // Standard Arabic
    // Polytonic Greek
    el: ["polyton", "PGR"],
    // Irish Traditional is Irish using the Gaelic variant of the Irish script
    ga: ["latg", "IRT"],
    // Khutsiri Georgian is Georgian with the Khutsuri script
    ka: ["geok", "KGE"],
    // Todo is Kalmyk-Oirat with the Mongolian script
    xal: ["mong", "TODO"],
    // Chinese
    zh: [
        // If the script is Simplified Chinese, use ZHS;
        "hans", "ZHS",
        // otherwise, if the script is Latin, use ZHP;
        "latn", "ZHP",
        // otherwise, if the region is Hong Kong, use ZHH;
        "hk", "ZHH",
        // otherwise, if the script is Traditional Chinese, use ZHT;
        "hant", "ZHT",
        // otherwise, if the region is Macau, use ZHT;
        "mo", "ZHT",
        // otherwise, if the region is Taiwan, use ZHT;
        "tw", "ZHT"
        // otherwise, use ZHS.
    ]
};

// Moldavian has been retired, so the shortening isn't in the official map,
// but we keep it since we still have a MOL entry
iso639["mol"] = "mo";

function buildLangsMap(v) {
    var map = new LangMap();
    for (var i = 0; i < v.length; i++) {
	var entry = v[i];
	// This will remove a DHV (drepecated) entry
	if (entry[1].indexOf("deprecated") < 0)
	    map[entry[1]] = { name: entry[0], iso: entry.slice(2) };
    }
    return map;
}

function LangMap() { }

LangMap.prototype.add = function (langSys, isoTag) {
    this.getEntryTags(langSys).push(isoTag);
    return this;
};

LangMap.prototype.removeAll = function (langSys) {
    this.getEntryTags(langSys).length = 0;
    return this;
};

LangMap.prototype.remove = function (langSys, isoTag) {
    var tags = this.getEntryTags(langSys);
    var i = tags.indexOf(isoTag);
    if (i < 0)
	throw new Error("in entry for " + langSys + " expected ISO tag " + isoTag);
    tags.splice(i, 1);
    return this;
};

LangMap.prototype.rename = function (langSys, oldIsoTag, newIsoTag) {
    var tags = this.getEntryTags(langSys);
    var i = tags.indexOf(oldIsoTag);
    if (i < 0)
	throw new Error("in entry for " + langSys + " expected ISO tag " + oldIsoTag);
    tags[i] = newIsoTag;
    return this;
};

LangMap.prototype.getEntryTags = function (langSys) {
    var entry = this[langSys];
    if (entry === undefined) 
	throw new Error('expected entry for ' + langSys);
    return entry.iso;
};

// This is before shortening

function fixupMap(m) {
    // Keep these sorted by OpenType tag.
    m.add("AGW", "awn");
    m.add("ARA", "arb"); // Standard Arabic
    m.remove("ARK", "mhv");  // mhv retired and not a valid IETF code
    // Get rid of long mappings for ATH
    m.removeAll("ATH");
    // We remove all ATH mappings above
    if (false) {
	m.remove("ATH", "chp"); // Athapaskan; prefer Chipewyan, CHP, for chp (Chipewyan)
	m.remove("ATH", "crx"); // Athapaskan; prefer Carrier, CRR, for crx (Carrier)
	m.remove("ATH", "caf"); // Athapaskan; prefer Carrier, CRR for caf (Southern Carrier)
	m.remove("ATH", "xsl"); // Athapaskan; prefer South Slavey, SSL, for xsl (South Slavey)
	m.remove("ATH", "scs"); // Athapaskan; prefer Slavey, SLA, for scs (North Slavey)
    }
    m.add("ATH", "ath"); // Athapascan languages (collection)
    m.remove("BAL", "krc"); // Balkar; prefer Karachay, KAR, for Karachay-Balkar
    m.add("BBR", "ber"); // Berber (collection)
    m.remove("BHI", "bhi"); // Bhili != Bhilali
    m.add("BML", "bai"); // Bamileke (collection)
    m.add("BTI", "beb").add("BTI", "bum").add("BTI", "bxp").add("BTI", "eto")
	.add("BTI", "ewo").add("BTI", "fan").add("BTI", "mct");
    m.add("ETI", "ekk"); // Standard Estonian
    m.add("FAN", "gcf");
    m.remove("FNE", "enf");
    m.rename("HAL", "flm", "cfm"); // Falam Chin also known as Halam; flm retired
    m.add("IJO", "ijo"); // Ijo (collection)
    m.remove("IRT", "gle"); // Irish Traditional; prefer Irish, IRI, for gle
    m.rename("KEB", "ktb", "alw");
    m.remove("KGE", "kat"); // Khutsuri Georgian; prefer Georgia, KAT, for kat
    m.removeAll("KIS").add("KIS", "guz");
    // Khanty
    m.remove("KHS", "kca"); // Khanty-Shurishkar; prefer Khanty-Kazim, KHK, for kca (Khanty)
    m.remove("KHV", "kca"); // Khanty-Vakhi; prefer Khanty-Kazim, KHK, for kca (Khanty)
    m.add("LAH", "lbf").add("LAH", "lae"); // Lahuli
    m.remove("LCR", "crm"); // L-Cree; prefer Moose Cree, MCR, for crm (Moose Cree)
    m.remove("MAL", "mal"); // Malayalam Traditional Orthography; prefer reformed orthography, MLR
    // mol is out of date: we're keeping it, but adding a short mapping
    if (false) {
	m.remove("MOL", "mol"); // Moldavian retired
    }
    m.add("MOR", "ary"); // Moroccan Arabic
    m.remove("NHC", "csw"); // Norway House Cree; prefer N-Cree, NCR, for csw (Swampy Cree)
    m.add("NIS", "njz").add("NIS", "tgj");
    m.add("NOR", "nor"); // Norwegian (macrolanguage)
    m.add("PAA", "jpa");
    m.remove("PGR", "ell"); // Polytonic Greek; prefer Greek, ELL, for ell
    // Get rid of long mappings for QIN
    m.removeAll("QIN");
    if (false)			   // We remove all of QIN mappings above
	m.remove("QIN", "flm");
    // In Ethnologue, there are about 30 Chin languages in the group
    // Sino-Tibetan/Tibeto-Burman/Sal/Kuki-Chin-Naga/Kuki-Chin
    // The most precise group for which there is a ISO639-5 code is Tibeto-Burman, thus
    m.add("QIN", "tbq"); // Tibeto-Burman languages (collection)
    m.remove("SAY", "chp"); // Sayisi; prefer Chipewyan, CHP, for chp (Chipewyan)
    m.rename("SIG", "xst", "stv").add("SIG", "wle"); // Silt'e; xst retired
    m.rename("SNA", "she", "seh"); // Sena
    m.add("SWK", "swh").add("SWK", "swc"); // Swahili
    m.remove("SXT", "ngo");
    m.remove("TCR", "cwd"); // TH-Cree; prefer Woods Cree, DCR, for cwd (Woods Cree)
    m.rename("TNE", "enh", "yrk");
    // One interpretation of Todo is Written Oirat
    m.add("TOD", "xwo");
    // qualifyRules handles this
    m.remove("TOD", "xal");
    m.remove("WCR", "crk").add("YCR", "crk");
    // Handled by qualifyRules; default is ZHS (Simplified Chinese)
    m.remove("ZHH", "zho"); // Chinese Hong Kong SAR
    m.remove("ZHP", "zho"); // Chinese Phonetic
    m.remove("ZHT", "zho"); // Chinese Traditional
    return m;
}

function shortenIso(m) {
    var inRegistry = {};
    for (var i = 0; i < registry.length; i++) {
        if (registry[i]['Type'] === 'language') {
            var val = true;
            if (registry[i]['Deprecated'])
                val = 'deprecated';
            inRegistry[registry[i]['Subtag']] = val;
        }
    }
    for (var ott in m) {
	if (m.hasOwnProperty(ott)) {
	    var v = m[ott].iso;
	    for (i = 0; i < v.length; i++) {
		var t = iso639[v[i]];
		if (t)
		    v[i] = t;
                if (!inRegistry[v[i]])
                    console.error('%s: not in registry (%s)', v[i], ott);
                else if (inRegistry[v[i]] === 'deprecated'
			 && expectDeprecated.indexOf(v[i]) < 0)
                    console.error('%s: deprecated by IETF registry', v[i]);
	    }
	}
    }
    return m;
}

function invert(m) {
    var missing = {}
    var inv = {};
    for (var ott in m) {
	if (m.hasOwnProperty(ott)) {
	    var v = m[ott].iso;
	    if (v.length === 0)
		missing[ott] = true;
	    for (var i = 0; i < v.length; i++) {
		if (inv[v[i]] !== undefined)
		    console.error('duplicate for %s', v[i]);
		inv[v[i]] = ott;
	    }
	}
    }
    var i;
    for (i = 0; i < expectMissing.length; i++)
	delete missing[expectMissing[i]];
    for (var t in qualifyRules) {
	var rules = qualifyRules[t];
	if (inv[t] === undefined)
	    console.error('no mapping for %s', t);
	else
	    inv[t] = [inv[t]].concat(qualifyRules[t]);
	for (i = 1; i < rules.length; i += 2)
	    delete missing[rules[i]];
    }
    for (ott in missing) 
	console.error("Missing mapping for %s", ott);
    return inv;
}

function expandMacrolang(m) {
    var componentLangs = {};
    for (var i = 0; i < registry.length; i++) {
        var macrolang = registry[i]['Macrolanguage'];
        if (macrolang && m[macrolang]
            && registry[i]['Type'] === 'language'
            && registry[i]['Preferred-Value'] === undefined) {
            var componentTag = registry[i]['Subtag'];
            if (componentLangs[macrolang] === undefined)
                componentLangs[macrolang] = [];
            componentLangs[macrolang].push(componentTag);
        }
    }
    var addedList = [];
    for (var tag in m) {
        var components = componentLangs[tag];
        if (components) {
            for (i = 0; i < components.length; i++) {
                var component = components[i];
                if (!m[component]) {
		    var ot = m[tag];
		    if (typeof(ot) === 'string')
			addedList.push({ macrolang: tag, component: component, opentype: ot });
		    else
			addedList.push({ macrolang: tag, component: component, opentype: ot[0],
				         rules: ot.slice(1) });
		}
            }
        }
    }
    for (i = 0; i < addedList.length; i++) {
        var added = addedList[i];
	if (added.macrolang === 'zh')
	    m[added.component] = [added.opentype].concat(added.rules);
	else
            m[added.component] = added.opentype;
    }
    if (argv.m) {
        addedList.sort(function (x, y) {
            if (x.opentype < y.opentype)
                return -1;
            if (x.opentype > y.opentype)
                return 1;
            if (x.component < y.component)
                return -1;
            if (x.component > y.component)
                return 1;
            return 0;
        });
        var report = "";
        for (i = 0; i < addedList.length; i++) {
            if (i === 0
                || addedList[i].opentype !== addedList[i - 1].opentype
                || addedList[i].macrolang != addedList[i - 1].macrolang)
                report += '\n' + addedList[i].opentype + ' (' + addedList[i].macrolang + '): ' + addedList[i].component;
            else
                report += ', ' + addedList[i].component;
        }
        if (report)
            console.error('Added macrolang components:%s', report);
    }
    return m;
}

function textOutput(m) {
    var tags = Object.keys(m).sort();
    for (var i = 0; i < tags.length; i++) {
	var result = m[tags[i]];
	if (typeof(result) !== 'string')
	    result = result.join(' ');
	console.log('%s %s', tags[i], result);
    }
}

function jsonOutput(m) {
    console.log('%s', JSON.stringify(m, undefined, 2));
}

var output = argv.json ? jsonOutput : textOutput;

output(expandMacrolang(invert(shortenIso(fixupMap(buildLangsMap(require('./otlangs')))))));
