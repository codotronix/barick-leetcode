/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, mem={ }) {
    // base cases
    // let (1,1) be the lowest right corner to reach
    if(m<1 || n<1) return 0     // out of bounds
    if(m===1 && n===1) return 1 // reached
    if( (m===2 && n===1) || (m===1 && n===2) ) return 1

    let key = m + '_' + n
    if(!(key in mem)) {
        mem[key] = uniquePaths(m-1, n, mem) + uniquePaths(m, n-1, mem)
    }
    return mem[key]
};