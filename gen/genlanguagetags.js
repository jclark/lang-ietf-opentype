
"use strict";

var tags = require('./otlangs');

for (var i = 0; i < tags.length; i++) {
    var entry = tags[i];
    var line = entry[0] + '+' + entry[1] + '+';
    for (var j = 2; j < entry.length; j++) {
	if (j > 2)
	    line += ', ';
	line += entry[j];
    }
    console.log('%s', line);
}
