/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jMap = {};
    for(let c of jewels) jMap[c] = true;

    let n = 0;  // number of jewels
    for(let c of stones) {
        if(c in jMap) n++;
    }

    return n;
};