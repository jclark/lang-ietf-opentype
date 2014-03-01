NODE=node
CURL=curl
CURLFLAGS=-s
LANGUAGETAGS_URL=http://www.microsoft.com/typography/otspec/languagetags.htm
ISO639_2_URL=http://www.loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt
CLEANFILES=otlangs.js iso639.js ISO-639-2_utf-8.txt map.txt

map.txt: gen.js otlangs.js iso639.js
	$(NODE) gen.js >map.tmp
	mv map.tmp $@

otlangs.js: languagetags.sed
	$(CURL) $(CURLFLAGS) $(LANGUAGETAGS_URL) | sed -f languagetags.sed >$@

iso639.js: ISO-639-2_utf-8.txt iso639.sed
	tail -c +4 ISO-639-2_utf-8.txt | sed -f iso639.sed -n >iso639.tmp
	mv iso639.tmp $@

ISO-639-2_utf-8.txt:
	$(CURL) $(CURLFLAGS) -R $(ISO639_2_URL) -o $@

clean:
	rm -f $(CLEANFILES) *.tmp
