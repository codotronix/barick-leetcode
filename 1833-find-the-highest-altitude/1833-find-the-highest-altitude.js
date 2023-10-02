/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let mx = Math.max(0, gain[0])
    for(let i=1; i<gain.length; i++) {
        gain[i] += gain[i-1]
        mx = Math.max(mx, gain[i]) 
    }
    // Max alt can't be 0, as the starting point is 0
    return mx
};