/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return '1';

    // this should start from 2, as 1 is handled
    let rle = '1';
    for(let i=2; i<=n; i++) {
        rle = rleEncode(rle);
    }
    return rle;
};

/**
 "3322251" -> "23321511"
 */
function rleEncode(s) {
    let currentChar = s[0];
    let count = 1;
    let res = ''
    for(let i=1; i<s.length; i++) {
        // a change?
        if(s[i] !== currentChar) {
            res += count + currentChar; // dump
            // reset
            currentChar = s[i];
            count = 1;
        }
        else count++;
    }

    // if still some left
    if(count > 0) res += count + currentChar;

    return res;
}