/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(m, y=0, x=0, mem={}) {
    // last index l
    const l = m.length-1
    // out of bound checks
    if(y > l || x > l || x < 0) return Number.MAX_VALUE

    // if bottom cell reached, take that cells cost
    if(y===l) return m[y][x]

    const key = `${y}_${x}`
    if(key in mem) return mem[key]

    // if first row, we need to travel down all the cells
    if(y===0) {
        let minCost = Number.MAX_VALUE
        for(let i=0; i<=l; ++i) {
            x=i // y=0, x=i
            let cost = m[y][x] + Math.min( minFallingPathSum(m, y+1, x-1, mem), minFallingPathSum(m, y+1, x, mem), minFallingPathSum(m, y+1, x+1, mem) )
            minCost = Math.min(minCost, cost)
        }
        mem[key] = minCost
        return mem[key]
    }
    // for all other rows
    else {
        mem[key] = m[y][x] + Math.min( minFallingPathSum(m, y+1, x-1, mem), minFallingPathSum(m, y+1, x, mem), minFallingPathSum(m, y+1, x+1, mem) )
        return mem[key]
    }

};