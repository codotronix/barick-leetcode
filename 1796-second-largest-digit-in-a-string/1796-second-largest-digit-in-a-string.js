/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let h1 = -1, h2 = -1;
    // for each char
    for(const c of s) {
        const n = Number(c)
        // if NaN, continue
        if(isNaN(n)) continue;

        if(n > h1) {
            h2 = h1;
            h1 = n;
        }
        else if (n > h2 && n != h1) {
            h2 = n;
        }
    }

    return h2;
};