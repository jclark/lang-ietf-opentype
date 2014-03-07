'use strict';

var ietfToOT = require('../lib/lang').ietfToOpenType;

exports.testBasic = function (test) {
    test.expect(1);
    test.equal(ietfToOT('en'), 'ENG');
    test.done();
};
