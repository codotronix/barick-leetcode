/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vMap = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}, 
    cMap = {'b': 0}; // must have at least 1 value in cMap, else it may remain undefined / blank if no consonant appears in the input string

    for(let c of s) {
        if(c in vMap) vMap[c]++;
        else {
            if(!(c in cMap)) cMap[c] = 0;
            cMap[c]++;
        }
    }

    return Math.max(...Object.values(vMap)) + Math.max(...Object.values(cMap));
};