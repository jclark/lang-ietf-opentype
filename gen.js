var registry = require('language-subtag-registry/data/json/registry');

var langs = require('./otlangs');
var iso639 = require('./iso639');

function shorten(tag) {
    return iso639[tag] || tag;
}

var overrides = {
    ary: "MOR", // Moroccan Arabic
    bai: "BML", // Bamileke (collection)
    ber: "BBR", // Berber (collection)
    cfm: "HAL", // Falam Chin (also known as Halam)
    chp: "CHP", // Chipewyan; prefer to Sayisi
    crm: "MCR", // Moose Cree; prefer to L-Cree
    crx: "CRR", // Carrier; prefer to Athapaskan
    csw: "NCR", // Swampy Cree = N-Cree; prefer to Norway House Cree
    cwd: "DCR", // Woods Cree; prefer to TH-Cree
    div: "DIV", // Dhivehi; prefer to DHV (deprecated)
    ell: "ELL", // Greek; prefer to Polytonic Greek
    flm: null, // Falam Chin, retired: split into rnl and cfm
    gle: "IRI", // Irish, prefer to Irish Traditional
    kat: "KAT", // Georgian, prefer to Khutsuri Georgian
    kca: "KHK", // Khanty-Kazim (most common dialect of Khanty; prefer to other dialects)
    krc: "KAR", // Karachay; prefer to Balkar
    mal: "MLR", // Malaylam reformed; prefer to Malayalam Traditional
    mol: null,  // Moldavian, now retired
    nor: "NOR", // Norwegian (macrolanguage)
    stv: "SIG", // renamed from xst
    xal: "KLM", // Kalmyk; prefer to Todo
    xsl: "SSL", // South Slavey; prefer to Athapaskan
    xst: null,  // Silt'e split into stv and wle
    zho: null,  // Chinese (handle explicitly)
};

var usedOtf = { };
var isoToOtf = {};

var tag;
for (tag in overrides) {
    if (overrides[tag] !== null) {
	isoToOtf[shorten(tag)] = overrides[tag];
	usedOtf[overrides[tag]] = true;
    }
}


var i;
for (i = 0; i < langs.length; i++) {
    var lang = langs[i];
    var otf = lang[1];
    var used = usedOtf[otf] || false;
    for (var j = 2; j < lang.length; j++) {
	var iso = lang[j];
	if (overrides[iso] === undefined) {
	    var short = shorten(iso);
	    var prevOtf = isoToOtf[short];
	    if (prevOtf === undefined) {
		isoToOtf[short] = otf;
		used = true;
	    }
	    else
		console.error('duplicate for %s', iso);
	}
    }
    if (!used)
	console.error('unused %s (%s)', otf, lang[0]);
}

var tags = Object.keys(isoToOtf).sort();

for (i = 0; i < tags.length; i++)
    console.log('%s %s', tags[i], isoToOtf[tags[i]]);
