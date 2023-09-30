/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(g, y=0, x=0, mem={}) {
    // final / last y and x
    const ly = g.length-1, lx = g[0].length-1

    // out of bounds, no paths here
    if(y > ly || x > lx) return 0

    // if it is an obstacle, then no path ahead
    if(g[y][x] === 1) return 0

    // if already reached
    if(y===ly && x===lx) return 1

    // for all other
    const key = y + '_' + x
    if(!(key in mem)) {
        // go down + go left
        mem[key] = uniquePathsWithObstacles(g, y+1, x, mem) + uniquePathsWithObstacles(g, y, x+1, mem)
    }

    return mem[key]
};