NODE=node
CURL=curl
CURLFLAGS=-s
LANGUAGETAGS_URL=http://www.microsoft.com/typography/otspec/languagetags.htm
ISO639_2_URL=http://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt
CLEANFILES=otlangs.js iso639.js ISO-639-2_utf-8.txt map.txt hb-map-trim.txt hb-map-fixed.txt extra-wd5.txt

map.txt: gen.js otlangs.js iso639.js
	$(NODE) gen.js >map.tmp
	mv map.tmp $@

diff: map.ok.txt map.txt
	diff -U 0 map.ok.txt map.txt

ok:
	cp map.txt map.ok.txt

json: ../lib/map.json

../lib/map.json: gen.js otlangs.js iso639.js
	$(NODE) gen.js -j >map.json.tmp
	mv map.json.tmp $@

otlangs.js: languagetags.sed
	$(CURL) $(CURLFLAGS) $(LANGUAGETAGS_URL) | sed -f languagetags.sed >$@

iso639.js: ISO-639-2_utf-8.txt iso639.sed
	tail -c +4 ISO-639-2_utf-8.txt | sed -f iso639.sed -n >iso639.tmp
	mv iso639.tmp $@

ISO-639-2_utf-8.txt:
	$(CURL) $(CURLFLAGS) -R $(ISO639_2_URL) -o $@

clean:
	rm -f $(CLEANFILES) *.tmp

extra-wd5.txt: languagetags-wd5.txt otlangs.js
	$(NODE) genlanguagetags.js \
	  | sort -k 2 -t '+' \
	  | join -t '+' -v 2 -1 2 -2 2 - languagetags-wd5.txt \
	  | cut -d '+' -f 2 >$@

hb-map-trim.txt: hb-map.txt extra-wd5.txt
	sort -k 2 hb-map.txt | join -v 1 -1 2 - extra-wd5.txt | sort -k 1 >$@

hb-map-fixed.txt: hb-map-trim.txt hb-add.txt hb-macrolang-expand.txt hb-remove.txt
	(cat hb-add.txt hb-macrolang-expand.txt; join -t @ -v 2 hb-remove.txt hb-map-trim.txt ) | sort -k 1 >$@

hb-diff: hb-map-fixed.txt map.txt
	cut -d ' ' -f '1,2' map.txt | diff -U 0 hb-map-fixed.txt -

