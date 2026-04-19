/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return 0;
    res = '';
    // go by index
    for(let i=0; i < strs[0].length; i++) {
        let s = strs[0][i];
        // for each string
        for(let str of strs) {
            // if out of bound
            // match breaks here
            if(i >= str.length || str[i] !== s) return res;
        }
        res += s;
    }

    return res;
};