/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0, b=0;
    for(let c of s) {
        if(c === 'L') b++;
        else b--;
        
        // balanced?
        if(b === 0) res++;
    }

    return res;
};