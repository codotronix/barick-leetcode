/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, y=0, x=0, mem={}) {
    // last positions to reach, the boundaries
    const ly = grid.length-1, lx = grid[0].length-1

    // if out of bounds, infinite cost
    if(y > ly || x > lx) return Number.MAX_VALUE

    // if already at the end, take that cost
    if(y===ly && x===lx) return grid[y][x]

    const key = y + '_' + x
    if(!(key in mem)) {
        // now calc for all other cases
        // Min cost = current cell + Min(rightPath, downPath)
        mem[key] = grid[y][x] + Math.min( minPathSum(grid, y+1, x, mem), minPathSum(grid, y, x+1, mem) )
    }

    return mem[key]
};