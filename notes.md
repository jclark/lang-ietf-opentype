# Notes on mapping between OpenType language system tags and ISO 639 tags

The goal is to map IETF language tags to OpenType language system
tags.  Thus, when the OpenType spec associates the same ISO 639 tag
with multiple OpenType language system tags, we have to remove or
qualify all except one of the associations, in order to make the
mapping unambiguous.  Qualification consists of adding a script and/or
variant subtag.

These notes are structured in terms of the OpenType language system
tag. The first line gives the OpenType spec's name for the tag,
followed by the recommendation for the mapping for this tag relative
to the mapping in the current OpenType spec.

For primary language tags, we use the ISO 639-2/3/5 3-letter name
(since that is what the OpenType spec uses).  For qualified tags (with
a script or variant subtag), we use the 2-letter tag, if one is
available, so that the result is a valid IETF tag.

## AGW

Agaw. Add **awn** (Awngi), **xan** (Xamtanga) to **ahg** (Qimant).

[Wikipedia](http://en.wikipedia.org/wiki/Agaw_languages) says the Agaw
languages are the Central Cushitic languages and comprise Awngi
(South), Blin (North), Xamtanga (Central), Qimant (West).

This is confirmed by
[Ethnologue](http://www.ethnologue.com/subgroups/central-11), which
has a *Cushitic, Central* group comprising: Southern (Awngi, awn),
Northern (Bilen, byn), Eastern (Xamtanga, xan) and Western (Qimant,
ahg).

However, Bilen has its own code: BIL.

Ethnologue includes alternate names of *Western Agaw* for **ahg**, of
*Agaw* for **awn**, of *Agawinya* for **xan** and of *North Agaw* for
**byn**. However, Wikipedia, gives an alternate name of *South Agaw*
for **awn**.

## APPH

Phonetic transcription - Americanist conventions. *todo*

## ATH

Athapascan. Replace by **ath** (Athpascan languages).

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

## BML

Bamileke. Add **bai** (Bamileke languages).

**bai** is a collection tag.

## GAR

Garshuni. Add **ar-Syrc** (Arabic/Syriac script).

[Garshuni](http://en.wikipedia.org/wiki/Garshuni) are Arabic writings in the Syriac script.

## HAL

Halam. Rename **flm** to **cfm** (Falam Chin).

[Ethnologue](http://www.ethnologue.com/language/cfm) gives Halam as an alternate name for **cfm**.

**flm** (Falam Chin) was
[retired](http://www.silinternational.net/iso639-3/documentation.asp?id=flm)
and split into **rnl** (Ranglong) and **cfm**.

According to [Wikipedia](http://en.wikipedia.org/wiki/Halam_tribe), the
Ranglong are a sub-group of the Halam, but Ranglong doesn't seem to be
a dialect of Halam.

## IPPH

Phonetic transcription - IPA Conventions. Add: **und-fonipa**
(Undetermined/International Phonetic Alphabet).

**fonipa** is a variant subtag, so cannot be used by itself. If one has
to map specific language tags to OpenType language system tags, then
the best choice is to use **und**, which means Undetermined, as
the primary language. But it would be better to map anything with a
variant subtag of **fonipa** to IPPH.

## IRT

Irish Traditional. Remove duplicate **gle**.

XXX *Can we do better? Maybe ga-Latg?*

## KAR

Karachay. Confirm as **krc** (Karachay-Balkar)

Prefer KRC to BAL for **krc** on the basis of the tag name.

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

## MLN

Malinke. Confirm **mlq** (Western Maninkan).

Ethnologue says Malinke is an alternate name for mlq.

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

Nagari. *todo*

## NHC

Norway House Cree. Confirm *unmapped*.

The Norway House Cree (all 6,000 of them) are part of the Swampy Cree, for which
there is already a tag NCR.

No idea why this tag exists.

## NOR

Norwegian. Add **nor** (Norwegian) to **nob** (Norwegian Bokmal).

**nor** is a macrolanguage consisting of **nno** (Norwegian Nynorsk)
and **nob** (Norwegian Bokmal), but **nno* is already mapped to NYN (Nynorsk).

## PGR

Polytonic Greek. Qualify as **el-polyton**.

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

## SAY

Sayisi. Remove duplicate **chp**.

**chp** is already mapped to CHP (Chipeywan). Sayisi is one of the
tribes belonging to the Chipeywan people.  As a written language,
Sayisi appears to be an [orthographic variant of
Chipeywan](http://www.languagegeek.com/dene/denesulhine/chp_syllabarium.html),
introduced by English Protestant missionaries, as opposed to the
French Catholic missionaries that introduced the other variant.

In theory a variant subtag could be registered for this, but it's probably not worth it.

## SIG

Silte Gurage. Rename **xst** to **stv** (Silt'e).

**xst** was retired and split into **wle** (Wolane) and **stv** (Silt'e).

Silt'e is [also known as](https://www.ethnologue.com/language/stv) East Gurage.

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

## TOD

Todo. Qualify as **xal-Mong** (Oirat/Mongolian Script).

HarfBuzz uses **xwo**.

XXX

## WCR

West-Cree. Remove **crk** (Plains Cree).

West-Cree is a grouping that contains Plains Cree, Woods Cree and some
of Swampy Cree; there is no code for this.

See YCR.

## YCR

Y-Cree. Add **crk** (Plains Cree).

Y-Cree means Plains Cree, because [Plains Cree is the y-dialect of
Cree](http://www.languagegeek.com/algon/cree/nehiyawewin.html).

## YIC

Yi Classic. *todo*

## YIM

Yi Modern.

The spec says **iii** (Sichuan Yi).

XXX

## ZHH

Chinese HongKong-SAR. *todo*

## ZHP

Chinese Phonetic. Qualify as **zh-Latn**.

The more precise tag would be **zh-Latn-pinyin**, but there isn't any better match for
**zh-Latn**. Se:

http://lists.w3.org/Archives/Public/www-style/2009Oct/0327.html
http://lists.w3.org/Archives/Public/www-style/2009Oct/0346.html

## ZHS

Chinese Simplified. *todo*

## ZHT

Chinese Traditional. *todo*
