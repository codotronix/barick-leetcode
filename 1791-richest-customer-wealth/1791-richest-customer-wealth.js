/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(a) {
    let mx = 0
    for(let y=0; y<a.length; ++y) {
        let s = 0
        for(let x=0; x<a[y].length; ++x) {
            s += a[y][x]
        }
        mx = Math.max(mx, s)
    }
    return mx
};