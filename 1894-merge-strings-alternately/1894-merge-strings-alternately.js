/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(w1, w2) {
    let i=0, j=0, r=''
    while(i<w1.length && j<w2.length) {
        r += w1[i] + w2[j]
        i++
        j++
    }
    // add whatever is left
    if(i<w1.length) r += w1.substring(i)
    else if(j<w2.length) r+= w2.substring(j)

    return r
};