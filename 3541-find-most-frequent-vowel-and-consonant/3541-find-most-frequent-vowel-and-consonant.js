/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vMap = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}, cMap = {};

    for(let c of s) {
        if(c in vMap) vMap[c]++;
        else {
            if(!(c in cMap)) cMap[c] = 0;
            cMap[c]++;
        }
    }

    return Math.max(...Object.values(vMap), 0) + Math.max(...Object.values(cMap), 0);
};