# Mapping IETF language tags to OpenType language system tags

The language of text written in a markup language such as XML or HTML is usually identified by an IETF language tag,
conforming to [BCP 47](http://tools.ietf.org/html/bcp47). Such text is most often displayed using OpenType fonts.
In order to display text optimally with OpenType, it is necessary to use an OpenType language system tag.
Unfortunately, for historical reasons, OpenType language system tags have their own
[specification](http://www.microsoft.com/typography/otspec/languagetags.htm),
and are not the same as IETF language tags.
This means that any system that wants to display HTML or XML using OpenType fonts has to convert IETF language
tags into OpenType language system tags.

This project is designed to help with this problem, by providing

* [data](lib/map.json), in JSON format, declaratively describing the conversion and
* a node.js module that uses this data to do the conversion.

The OpenType specification associates a number of ISO 639-2 or ISO 639-3 three-letter tags
with each OpenType language system.
Using [ISO 639-2](http://www.loc.gov/standards/iso639-2/langhome.html),
each such ISO 639 tag can be mapped to an IETF language tag consisting of just a primary language subtag.
Although this provides the starting point for the conversion, the following problems still have to be solved:

* sometimes a particular ISO 639 tag is associated with multiple OpenType tags; these ambiguities can sometimes
be resolved by finding an appropriate script, region or variant subtag to add to the primary language subtag;
* for some OpenType tags, there is no associated ISO 639 tag;
* sometimes the associated ISO 639 tags are inconsistent with the name of the OpenType language system.

There are extensive [notes](doc/notes.md) describing the issues for each OpenType language system tag.
The [gen](gen/) directory contains code based on these notes to generate the JSON data file.

## Data

The format of the data is a JSON object, which maps an initial subtag to a rule for converting tags that
begin with that subtag.
The initial subtag is the part of the IETF tag up to the first hyphen, if there is one, or the whole tag,
if there is not. The rule is either a string or an array of strings.

If the rule is a string, then the string specifies the OpenType tag.

If the rules is an array of strings, then the array will contain an odd number of strings. The first
members of the array is the default OpenType tag.  The remaining strings are interpreted in pairs.
The first member of each pair specifies a subtag, and the second member specifies the OpenType tag
for when the IETF tag contains that subtag. For example, an entry:

    "zh": ["ZHS", "latn", "ZHP", "hk", "ZHH", "hant", "ZHT"]

means that an IETF tag that is `zh` or starts with `zh-` is handled as follows:

* if it has a subtag "latn", then it maps to the OpenType tag ZHP;
* othewise, if it has a subtag "hk", then it maps to the OpenType tag ZHH;
* otherwise, if it has a subtag "hant", then it maps to the OpenType tag ZHT;
* otherwise, it maps to the OpenType tag ZHS.

Note that subtags are specified in the data in lower-case but are matched case-insensitively.
Subtags that occur in a tag following a singleton subtag (a subtag of length 1) should be ignored
when applying a rule.

## Module

The module provides a single function.

### ietfToOpenType(*tag*)

This converts an IETF language tag to an OpenType language system tag.
The argument must be a string.
It returns a string with the OpenType language system tag,
or `undefined` if there is no suitable OpenType language system tag.





