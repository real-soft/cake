import {isNull} from "../helpers/null/is_null";
import {REGEXP_EXTENDED_ASCII, REGEXP_LATIN_WORD, REGEXP_WORD} from "../helpers/regexp/regexp";
import {nvl} from "../helpers/null/nvl";

export default function words(s, pattern, flags){
    let regexp;

    if (isNull(pattern)) {
        regexp = REGEXP_EXTENDED_ASCII.test(s) ? REGEXP_LATIN_WORD : REGEXP_WORD;
    } else if (pattern instanceof RegExp) {
        regexp = pattern;
    } else {
        regexp = new RegExp(pattern, nvl(flags, ''))
    }

    return nvl(s.match(regexp), []);
}
