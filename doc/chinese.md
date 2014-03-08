# Chinese language tags

The OpenType spec provides four language system tags for Chinese:

* ZHH (Chinese, Hong Kong SAR), corresponding to the IETF tag **zh-HK**;
* ZHP (Chinese Phonetic), corresponding approximately to the IETF tag **zh-Latn**;
* ZHH (Chinese Simplified), corresponding to the IETF tag **zh-Hans**;
* ZHT (Chinese Traditional), corresponding to the IETF tag **zh-Hant**.

Note that Hong Kong uses the traditional Chinese script.

There are a number of issues that complicate the mapping process.

* Before the **zh-Hans** and **zh-Hant** tags were introduced, regional tags were used
indirectly to distinguish between traditional and simplified Chinese.  Specifically,
**zh-TW**, **zh-MO** would be used to indicate traditional Chinese; and these tags
continue to be used.  However, BCP 47 allows for unusual combinations such as **zh-Hans-TW**
(Taiwanese dialect of Chinese, written in Simplified Chinese script), which have to handled
correctly; this would be mapped to ZHS.

* The **zh** tag denotes a *macrolanguage* (family of related languages) which encompasses
14 different versions of Chinese, such as **cmn** (Mandarin) or **yue** (Yue, of which
Cantonese is a dialect). BCP 47 recommends using the tag for the specific version of Chinese,
where this is known, rather than the macrolanguage tag **zh**.

* BCP 47 allows for extended language subtags: a tag **zh-cmn** is equivalent to **cmn**. So, for
example, **zh-cmn-Hant** and **cmn-Hant** both need to be mapped to ZHT.

We therefore use the following algorithm, both for **zh** macrolanguage itself and for all the individual languages
encompassed in **zh**:

* if there's a **Hans** (Simplified Chinese script) subtag, then the result is ZHS;
* otherwise, if there's a **Latn** (Latin script) subtag, then the result is ZHP;
* otherwise, if there's an **HK** (Hong Kong region) subtag, then the result is ZHH;
* otherwise, if there's a **Hant** (Traditional Chinese script) subtag, then the result is ZHT;
* otherwise, if there's a **MO** (Macao region) subtag, then the result is ZHT;
* otherwise, if there's a **TW** (Taiwan region) subtag, then the result is ZHT;
* otherwise, the result is ZHS.

Note that subtags are not considered in any portion of the tag after a singleton subtag.  For example,
with a tag of **zh-x-HK**, the HK subtag should ignored for the purposes of the above algorithm.
Note also that tags are matched case-insensitively.
