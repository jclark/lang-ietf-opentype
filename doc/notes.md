# Notes on mapping from IETF language tags to OpenType language system tags

The OpenType spec associates zero or more ISO 639-2 or ISO 639-3 tags
with each OpenType language system tag. Our goal is to map IETF
language tags to OpenType language system tags.  Thus, when the
OpenType spec associates the same ISO 639 tag with multiple OpenType
language system tags, we have to remove or qualify all except one of
the associations, in order to make the mapping unambiguous.
Qualification consists of adding a script and/or variant subtag.

These notes are structured in terms of the OpenType language system
tag. The first line gives the OpenType spec's name for the language
system, followed by a recommendation for any changes to the associated
ISO 639 tags, relative to the mapping in the current OpenType spec.

For primary language tags, we use the ISO 639-2/3/5 3-letter name
(since that is what the OpenType spec uses).  For qualified tags (with
a script or variant subtag), we use the 2-letter tag, if one is
available, so that the result is a valid IETF tag.

## AGW

Agaw. Add **awn** (Awngi) to **ahg** (Qimant).

[Wikipedia](http://en.wikipedia.org/wiki/Agaw_languages) says the Agaw
languages are the Central Cushitic languages and comprise Awngi
(South), Blin (North), Xamtanga (Central), Qimant (West).

This is confirmed by
[Ethnologue](http://www.ethnologue.com/subgroups/central-11), which
has a *Cushitic, Central* group comprising: Southern (Awngi, awn),
Northern (Bilen, byn), Eastern (Xamtanga, xan) and Western (Qimant,
ahg).

However, we map **xan** to SEK
and **byn** is mapped to BIL.

Ethnologue includes alternate names of *Western Agaw* for **ahg**, of
*Agaw* for **awn**, of *Agawinya* for **xan** and of *North Agaw* for
**byn**. However, Wikipedia, gives an alternate name of *South Agaw*
for **awn**.

## ALS

Alsatian. Confirm **gsw**.

See [Wikipedia](http://en.wikipedia.org/wiki/Alsatian_language).
Alsatian is one of the names associated with **gsw**.

## APPH

Phonetic transcription - Americanist conventions. Confirm *unmapped*.

There is no tag corresponding to the [Americanist Phonetic
Alphabet](http://en.wikipedia.org/wiki/Americanist_phonetic_notation).

## ARA

Arabic. Add **arb** (Standard Arabic).

## ARK

Arakanese. Remove **mhv** (Arakanese) leaving **rki** (Rakhine) and **rmz** (Marma).

**mhv** (Arakanese) was [retired and
split](http://www-01.sil.org/iso639-3/documentation.asp?id=mhv) into
**rki** (Rakhine) and **rmz** (Marma).  Before **mhv** was retired,
both Rakhine and Marma were treated as [alternate
names](http://archive.ethnologue.com/14/show_language.asp?code=mhv)
for Arakanese. Currently Arakanese is considered an alternate name for
Rakhine, but Marma is a also considered a [dialect of
Arakanese](http://en.wikipedia.org/wiki/Arakanese_language).

**mhv** is not a registered IETF language subtag.

## ATH

Athapascan. Replace by **ath** (Athapascan languages).

This is a language collection. Several languages in the collection
have their own codes.  The current spec has a long list of all the
names in the collection, but this causes duplicate mappings.
Given that IETF language tags allows a language group as a primary
language tag, and there is a tag that is an exact match, using the
collection tag seems preferable.

## BAL

Balkar. Remove duplicate **krc** (Karachay-Balkar).

See KAR.

## BBR

Berber. Add **ber** (Berber languages).

**ber** is a collection tag.

## BCR

Bible Cree. Confirm *unmapped*.

The only mention of Bible Cree that I have found is in the name of the
Unicode character U+153F (CANADIAN SYLLABICS BIBLE-CREE Y).  Written
Cree dialects tend to
[vary](http://www.languagegeek.com/algon/cree/cre_syllabarium.html) in
how they represent final y.  This suggests that Bible Cree is a
written variation of Cree that has a different glyph for final y.

## BHI

Bhili. Remove **bhi** (Bhilali) leaving **bhb** (Bhili).

Bhili and Bhilali are not the same.

## BML

Bamileke. Add **bai** (Bamileke languages).

**bai** is a collection tag.

## BTI

Beti. Add **beb**, **bum**, **bxp**, **eto**, **ewo**, **fan**, **mct** to **btb** (Beti, Cameroon).

Code **btb** was [retired and
split](http://www.silinternational.net/iso639-3/documentation.asp?id=btb)
into **beb** (Bebele), **bum** (Bulu (Cameroon)), **bxp** (Bebil),
**eto** (Eton (Cameroon)), **ewo** (Ewondo), **fan** (Fang (Equatorial
Guinea)), and **mct** (Mengisa).

There's also a code **eot** Beti (Côte d'Ivoire)), but that is an
[unrelated, almost extinct](http://www.ethnologue.com/language/eot)
language, and thus unlikely to be part of the intended meaning of the
BTI code.

## DHV

Divehi. Remove **div**.

This is deprecated in the spec in favour of DIV.

## ETI

Estonian. Add **ekk** (Standard Estonian).

## FAN

French Antillean. Add **gcf** (Guadeloupean Creole French) to **acf**
(Santa Lucian Creole French).

**acf** (Saint Lucia Creole French) has an alternate name of Lesser Antillean Creole French.
The French-associated islands in the Antilles are in the Lesser Antilles.

[Wikipedia](http://en.wikipedia.org/wiki/Antillean_Creole_French) also
includes **gcf* in Antillean Creole French. It also mentions **scf**
(San Miguel Creole French) but it is nearly extinct and spoken in Panama
(which is not part of the Antilles). Ethnologue also mentions **gcr**
(Guianese Creole French).

## FNE

Forest Nenets. Remove **enf** (Forest Enets).

See TNE (Tundra Nenets).

## FTA

Futa. Confirm **fuf** (Pular).

Alternate names of [Pular](http://www.ethnologue.com/language/fuf) are
*Futa Fula* and *Futa Jallon*. Not sure what else *Futa* could mean.

## GAR

Garshuni. Add **ar-Syrc** (Arabic, Syriac script) and **arb-Syrc** (Standard Arabic, Syriac script).

[Garshuni](http://en.wikipedia.org/wiki/Garshuni) are Arabic writings in the Syriac script.

## HAL

Halam. Rename **flm** to **cfm** (Falam Chin).

[Ethnologue](http://www.ethnologue.com/language/cfm) gives Halam as an alternate name for **cfm**.

**flm** (Falam Chin) was
[retired](http://www.silinternational.net/iso639-3/documentation.asp?id=flm)
and split into **rnl** (Ranglong) and **cfm**.

According to [Wikipedia](http://en.wikipedia.org/wiki/Halam_tribe), the
Ranglong are a sub-group of the Halam, but the Ranglong language doesn't appear to be
a dialect of Halam.

## IJO

Ijo. Add **ijo** (Ijo languages).

This is a collection.

## IPPH

Phonetic transcription - IPA Conventions. Add: **und-fonipa**
(Undetermined/International Phonetic Alphabet).

**fonipa** is a variant subtag, so cannot be used by itself. If one has
to map specific language tags to OpenType language system tags, then
the best choice is to use **und**, which means Undetermined, as
the primary language. But it would be better to map anything with a
variant subtag of **fonipa** to IPPH.

## IRT

Irish Traditional. Qualify as **ga-Latg** (Irish/Latin script, Gaelic variant).

Traditional Irish typesetting uses the [Gaelic
script](http://en.wikipedia.org/wiki/Gaelic_type).

## KAR

Karachay. Confirm as **krc** (Karachay-Balkar)

There are two dialects of Karachay-Balkar: Karachay-Baksan-Chegem and Balkar.
Presumably Karachay refers to the former, and Balkar to the latter.
The modern [Karachay-Balkar written language](http://en.wikipedia.org/wiki/Karachay-Balkar_language)
is based on the Karachay-Baksan-Chegem dialect,
which suggests it is better to map **krc** to KAR rather than BAL.
This is also consistent with the tag name.

## KEB

Kebena. Rename **ktb** (Kambaata) to **alw** (Alaba-K'abeena).

Kebena (which can alternatively be spelled Qebena, Qabena or K'abena)
[used to be
classified](http://archive.ethnologue.com/15/show_language.asp?code=ktb)
as a dialect of Kambaata, but is [now
classified](http://www.ethnologue.com/language/alw) as a separate
language.

## KOD

Kodagu. Confirm **kfa** (Kodava).

[ISO 639-3](http://www-01.sil.org/iso639-3/documentation.asp?id=kfa)
used to use *Kodagu* instead of *Kodava* as the name for **kfa**.

## KGE

Khutsuri Georgian. Qualify as **ka-Geok** (Georgian/Khutsuri script).

## KHK

Khanty-Kazim. Confirm **kca** (Kanty).

**kca** is Khanty and there aren't any registered subtags that allow
distinguishing the
variants. [Omniglot](http://www.omniglot.com/writing/khanty.htm) says
the main dialect is Kazim (Kazym), so the best option would seem to be
mapping **kca** to KHK, and leaving KHS and KHV without mappings.

## KHS

Khanty-Shurishkar. Remove duplicate **kca** (Kanty).

See KHK.

## KHV

Khanty-Vakhi. Remove duplicate **kca** (Kanty).

See KHK.

## KIS

Kisii. Remove "kqs" (Northern Kissi). Remove "kss" (Southern Kisi). Add "guz" (Gusii).

Kisi (with one *i*) isn't the same as Kisii (with two *i*s).

[Kisii](http://en.wikipedia.org/wiki/Gusii_language) is another name for Gusii, which has
about 2 million speakers.

## KMO

Komo. Confirm **kmw** (Komo, Democratic Republic of Congo).

**xom** (Komo, Sudan) is an
[unrelated](http://www.ethnologue.com/language/xom)
[language](http://www.ethnologue.com/language/kmw) with many fewer
speakers.  The intended meaning of Komo is thus unlikely to include
**xom**.

## KOH

Korean Old Hangul. Confirm **okm** (Middle Korean).

There are two potential ISO 639-2 tags: **okm** (Middle Korean, 10th-16th cent.),
and **oko** (Old Korean, 3rd-9th cent.).  The Hangul script was invented during
the [Middle Korean](http://en.wikipedia.org/wiki/History_of_the_Korean_language#Middle_Korean)
period; Old Korean was written using Chinese characters.  This means that **oko** is
not appropriate for a language system called Korean Old *Hangul*.

## KON

Kikongo. Confirm **ktu** (Kituba (Democratic Republic of Congo))

We have three choices:

* **ktu** (Kituba) also known as Kikongo Commercial and Kikingo ya
leta (Kikongo of the state administration), with 4.2m speakers; a
creole language based on Kongo
* **kng** (Koongo) also known as Kikongo, with 3m speakers in the Congo
* **kon** (Kongo) macrolanguage containing **kng** and a couple of other much less
widely spoken languages

The spec maps **ktu** to KON; ISO WD5 also maps **kon** to
KON0. Wikipedia says of
[Kituba](http://en.wikipedia.org/wiki/Kituba_language) that "it is
often called in short Kikongo, especially out of the region of ethnic
Bakongo people. The constitution of the Democratic Republic of Congo
lists Kikongo as one of the national languages. In fact, it refers to
Kikongo ya leta (i.e. Kituba), because a translation of the
constitution itself is written in Kituba but no translation exists in
Kikongo...In the academic circles the language is called Kikongo-Kituba".

Given all the circumstances, it seems best to stick to the spec's recommendation.

## KUI

Kui. Confirm **kxu** (Kui (India)).

There's also **kvd** (Kui (Indonesia)), but that is an [unrelated, much
smaller](http://www.ethnologue.com/language/kxu) (1,900 as opposed to
916,000 speakers) language, so it is unlikely to be part of the
intended meaning of Kui.

## KUL

Kulvi. Confirm **kfx** (Kullu Pahari).

Kulvi is one of the alternate names listed in
[Ethnologue](http://www.ethnologue.com/language/kfx).

## LAH

Lahuli. Add **lbf** (Tinani) and **lae** (Pattani) to **bfu** (Gahri).

**lbf** is [also known as](http://www.ethnologue.com/language/lbf)
Lahuli or Tinan Lahuli; **lae** is [also known
**as](http://www.ethnologue.com/language/lae) Lahuli, or Chamba
**Lahuli. Both have more speakers than **bfu** (also known as Lahuli
**of Bunan).  They are all in the Ethnologue group
[Kinauri](http://www.ethnologue.com/subgroups/kinauri).

## LCR

L-Cree. Remove duplicate **crm** (Moose Cree).

Better to map **crm** to MCR (Moose Cree).

## MAL

Malayalam Traditional. Remove duplicate **mal** (Malayalam).

Unfortunately, these does not seem to be any registered tag that
allows distingushing the traditional and reformed orthographies of
Malayalam. It seems preferable to prefer the reformed orthography.

This is the one case where I think it would be worthwhile
to register a variant subtag.

## MLE

Male. Confirm **mdy** (Male (Ethiopia)).

There's also **mdc** (Male (Papua New Guinea)) but that is an
[unrelated, much smaller](http://www.ethnologue.com/language/mdc) (970
as opposed to 95,000 speakers) language, so it is unlikely to be part
of the intended meaning of Male.

## MLN

Malinke. Confirm **mlq** (Western Maninkan).

Ethnologue says Malinke is an alternate name for **mlq**.

http://www.ethnologue.com/language/mlq

Not to be confused with MNK.

## MNK

Maninka. Confirm **man** (Mandingo)

This is a macrolanguage containing MLN (and a bunch of other languages
whose names include Maninka or Maninkakan). See
http://www-01.sil.org/iso639-3/documentation.asp?id=man

## MOL

Moldavian. Confirm **mol** (Moldavian).

**mol** has been [retired](http://www-01.sil.org/iso639-3/documentation.asp?id=mol)
(merging with Romanian), but given that we still have MOL, **mol** is the best match for it.

The IETF language tag is **mo**, but ISO 639-2 registry no longer
contains entries for **mol** and **mo**.

## MOR

Moroccan. Add **ary** (Moroccan Arabic).

## NCR

N-Cree. Confirm **csw*** (Swampy Cree)

Swampy Cree is the N-dialect of Cree.

(In Unicode, N-Cree is used in the names of U+155F, U+1561 and U+1563, but these
characters don't appear to be used in Modern Cree:
http://www.languagegeek.com/algon/cree/cre_syllabarium.html)

## NGR

Nagari. Confirm *unmapped*.

[Nagari](http://en.wikipedia.org/wiki/N%C4%81gar%C4%AB_script)
is an ancestor of the Devanagari script.

## NHC

Norway House Cree. Confirm *unmapped*.

The Norway House Cree (all 6,000 of them) are part of the Swampy Cree, for which
there is already a tag NCR.

No idea why this tag exists.

## NIS

Nisi. Add **njz** (Nyishi) and **tgj* (Tagin) to **dap** (Nishi, India).

**dap** (Nisi, India) was retired and split into **njz** (Nyishi) and
****tgj** (Tagin).  **dap** is in the IETF language registry, but
**deprecated.

**yso** (Nisi, China) is an unrelated, much smaller language.

## NOR

Norwegian. Add **nor** (Norwegian) to **nob** (Norwegian Bokmol).

**nor** is a macrolanguage consisting of **nno** (Norwegian Nynorsk)
and **nob** (Norwegian Bokmol), but **nno* is already mapped to NYN (Nynorsk).

## PAA

Palestinian Aramaic.  Add **jpa** (Jewish Palestinian Aramaic) to **sam** (Samaritan Aramaic).

Jewish Palestinian Aramaic is [also known as](http://multitree.linguistlist.org/codes/jpa)
Palestinian Aramaic.

Samaritan Aramaic is also an Aramaic that was used in Palestine.

## PGR

Polytonic Greek. Qualify as **el-polyton**.

## PRO

Provencal. Confirm **pro** (Old Provencal, Old Occitan).

There's also **oci** (Occitan), of which (modern) Provencal is a
dialect. ISO 639-2 [used
to](http://www.loc.gov/standards/iso639-2/php/code_changes.php)
specify Provencal as an alternate name for **oci**. But **oci** is
already mapped to OCI.

It seems a stretch to assume that
*Provencal* by itself refers to *Old* Provencal, but on the other hand

* there is important literature in Old Occitan, whereas modern
Provencal is primarily a spoken language (and in the OpenType context,
we are primarily concerned with the written language);

* the tags are the same.

## QIN

Chin. Replace by **tbq** (Tibeto-Burman languages).

The Ethnologue group corresponding to Chin is
[Kuki-Chin](http://www.ethnologue.com/subgroups/kuki-chin).
This has 51 members, including 30 that use Chin in their name. The
hierarchy is Sino-Tibetan/Tibeto-Burman/Sal/Kuki-Chin-Naga/Kuki-Chin.
The most precise group that has a defined ISO 639-5 tag is Tibeto-Burman. The
alternative is to map all the 51 languages in the Kuki-Chin group (of
just those with Chin in their name) individually to QIN, but that seems
disproportionate. On the other hand, **tbq** is considerably more general
than Kuki-Chin.

## RCR

R-Cree. Confirm **atj** (Atikamekw).

According to the [Languagegeek
website](http://www.languagegeek.com/algon/cree/atikamekw.html),
Atikamekw is an r-dialect of the Cree language.

## RIA

Riang. Confirm **ria** (Riang (India)).

There's also **ril** (Riang (Myanmar)), but that is an [unrelated,
smaller](http://www.ethnologue.com/language/ril) (15,500 vs 77,000
speakers) language, and thus unlikely to be part of the intended
meaning of the RIA code.

## SAY

Sayisi. Remove duplicate **chp**.

**chp** is already mapped to CHP (Chipeywan). Sayisi is one of the
tribes belonging to the Chipeywan people.  As a written language,
Sayisi appears to be an [orthographic variant of
Chipeywan](http://www.languagegeek.com/dene/denesulhine/chp_syllabarium.html),
introduced by English Protestant missionaries, as opposed to the
French Catholic missionaries that introduced the other variant.

In theory a variant subtag could be registered for this, but it's probably not worth it.

## SEK

Sekota. Confirm **xan** (Xamtanga).

[Xamtanga](http://www.ethnologue.com/language/xan) is the language of
the Xamir people of Ethiopia, who live in the Wag Hemra zone in the
Amhara Region of
Ethiopia. [Sekota](http://en.wikipedia.org/wiki/Soqota) (or Soquota)
is one of the major towns and a
[district](http://en.wikipedia.org/wiki/Soqota_%28woreda%29) in the
[Wag Hemra zone](http://en.wikipedia.org/wiki/Wag_Hemra_Zone).

## SIB

Sibe. Confirm **sjo** (Xibe).

[Two choices](http://en.wikipedia.org/wiki/Sibe_language):

* **sjo** (Xibe), a language of China, similar to Manchu, spoken by 30,000 or
* **nco** (Sibe), a language of Papua New Guinea, spoken by 6,000.

The term *Sibe* seems more
[commonly](http://www.press.uchicago.edu/ucp/books/book/distributed/S/bo15645501.html)
[used](http://en.wikipedia.org/wiki/Xibe_language) to refer to the
first than the second. Also the first has many more speakers, and is a
significant language, being the last remaining active variety of
Manchu.

## SIG

Silte Gurage. Remove **xst** and add **wle** (Wolane) and **stv** (Silt'e).

**xst** was retired and split into **wle** (Wolane) and **stv** (Silt'e). **xst** does
not exist in the IETF language registry, not even as deprecated.

Silt'e is [also known as](https://www.ethnologue.com/language/stv) East Gurage.

## SNA

Sena. Change **she** to **seh**.

## SWK

Swahili. Add **swh** (Swahili (individual language)) and **swc**
(Congo Swahili) to **swa** (Swahili (macrolanguage)).

**swa** is a macrolanguage containing **swh** and **swc**. They are all Swahili.

## SXT

Sutu. Remove **ngo** (Ngoni).

There are two possible meanings for Sutu.

* an [alternate](http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=sso)
[name](http://en.wikipedia.org/wiki/Sotho_language#cite_note-schizo-4)
for the Southern Sotho or Sesotho language of South Africa.

* an [alternate name](http://www.ethnologue.com/language/ngo) for the
Ngoni language of Tanzania

The language names originally come from Microsoft, and Sutu also
appears as the name of Microsoft Locale ID (LCID) 0x430, and that LCID
is [also associated](http://support.microsoft.com/kb/q221435) with
Sesotho.  The numerically next LCID is Tsonga, which another South
African language, and the next is Tswana, which is also a South
African language. This suggests that the first meaning is the
originally intended one.

Unfortunately, **sot** is also mapped to SOT (Sotho).

## TCR

TH-Cree. Remove duplicate **cwd** (Woods Cree).

More natural to map **cwd** to DCR (Woods Cree).

The term *Woods Cree* and *TH-Cree* are usually used to refer to the
same thing.  However, the Unicode Canadian Aboriginal Syllabics block
uses both *Woods-Cree* (for U+159B-U+159F) and *TH-Cree* (for
U+15A7-U+15AE). The Languagegeek website
[says](http://www.languagegeek.com/algon/cree/cre_syllabarium.html):
"In Manitoba, some communities prefer to use n-series or t-series
syllabics with a macron to indicate the /ð/ sound." The syllabics with
a macron correspond to the Unicode characters that use the term
*Woods-Cree*.  So it looks like there are two variants here.

## TNE

Tundra Nenets. Remove **enh** (Tundra Enets). Add **yrk** (Nenets).

There is **yrk** (Nenets) and **enh** (Tundra Enets).
[Enets](http://en.wikipedia.org/wiki/Enets_language) and
[Nenets](http://en.wikipedia.org/wiki/Nenets_languages) are [different
languages](http://www.ethnologue.com/subgroups/northern-samoyed).
[Nenets](http://www.ethnologue.com/language/yrk) is also called Yurak
and has dialects *Forest Yurak* and *Tundra Yurak*. So [Tundra
Nenets](http://en.wikipedia.org/wiki/Tundra_Nenets_language) is the
same as Tundra Yurak, and is a dialect of Nenets.

The only available code is **yrk** for Nenets.  Tundra Nenets has a
literary tradition and is spoken much more widely than Forest Nenets,
so it seems better to map **yrk** to Tundra Nenets rather than Forest
Nenets.

## TNG

Tonga. Confirm **toi** (Tonga (Zambia)).

There are several different languages known as Tonga. Of these, by far the most
important in terms of number of speakers is Tonga of Zambia **toi** with over
a million speakers. The next biggest, Tonga of Mozambique, is a different language.

## TOD

Todo. Qualify as **xal-Mong** (Kalmyk-Oirat/Mongolian Script). Add **xwo** (Written Oirat).

The Todo script (sometimes called [Clear
Script](http://en.wikipedia.org/wiki/Clear_script)) is a derivative
script of Mongolian (*Todo* means clear in Mongolian), used to write
the Kalmyk-Oirat dialects of Mongolian. See section 13.2
([pdf](http://www.unicode.org/versions/Unicode6.2.0/ch13.pdf)) of the
Unicode standard. Until very recently the Todo script was still used
by some Kalmyk-Oirat speakers within Xinjiang and Qinghai in China.

ISO 639-2 has a code **xwo**, defined as *Written
Oirat*. [Wikipedia](http://en.wikipedia.org/wiki/Oirat_language) says
the term *Written Oirat* is sometimes used to refer to the language of
historical documents written in the Clear script.

## WCR

West-Cree. Remove **crk** (Plains Cree).

West-Cree is a grouping that contains Plains Cree, Woods Cree and some
of Swampy Cree; there is no IETF tag for this.

See YCR.

## YCR

Y-Cree. Add **crk** (Plains Cree).

Y-Cree means Plains Cree, because [Plains Cree is the y-dialect of
Cree](http://www.languagegeek.com/algon/cree/nehiyawewin.html).

## YIC

Yi Classic. Confirm *unmapped*.

The classical ideographic Yi script is not yet encoded in Unicode.

## YIM

Yi Modern. Confirm **iii** (Sichuan Yi).

The spec says **iii** (Sichuan Yi or Nuosu).

According to [Wikipedia](http://en.wikipedia.org/wiki/Northern_Yi),
Sichuan Yi or Nuosu (also known as Northern Yii) is the largest Yi
dialect with some two million speakers, and is the basis of the
literary language. The Chinese government recognizes it as the
standard Yi language and is the only one taught in schools.

Yi corresponds to the
[Loloish](http://en.wikipedia.org/wiki/Loloish_languages) family of
languages, which Ethnologue calls
[Ngwi](http://www.ethnologue.com/subgroups/ngwi).  Ethnologue
recognizes 98 members of Ngwi, but the Chinese government recognizes
six mutually unintelligible Yi languages, of which Northern Yi is one.
The other 5 Yi languages each correspond to multiple language codes
in a very unclear way.

## ZHH

Chinese HongKong-SAR. *todo*

## ZHP

Chinese Phonetic. Qualify as **zh-Latn**.

The more precise tag would be **zh-Latn-pinyin**, but there isn't any better match for
**zh-Latn**. See:

http://lists.w3.org/Archives/Public/www-style/2009Oct/0327.html
http://lists.w3.org/Archives/Public/www-style/2009Oct/0346.html

## ZHS

Chinese Simplified. *todo*

## ZHT

Chinese Traditional. *todo*
