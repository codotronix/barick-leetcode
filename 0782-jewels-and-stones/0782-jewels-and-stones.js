/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let c=0;
    for(let i=0; i<stones.length; ++i) {
        if(jewels.indexOf(stones[i]) > -1) c++
    }
    return c
};