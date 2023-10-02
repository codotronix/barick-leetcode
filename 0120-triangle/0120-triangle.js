/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(t, y=0, x=0, mem={}) {
    // last possible y 
    const ly = t.length-1
    // out of bound
    if(y > ly) return Number.MAX_VALUE
    // if y is inbound, check x for current y
    const lx = t[y].length-1    
    if(x > lx) return Number.MAX_VALUE

    // if bottom reached, return that value
    if(y===ly) return t[y][x]

    // all other cases
    const key = `${y}_${x}`
    if(!(key in mem)) {
        // take the value of current cell +
        // Min of(go down, or go down right)
        mem[key] = t[y][x] + Math.min( minimumTotal(t, y+1, x, mem), minimumTotal(t, y+1, x+1, mem) )
    }

    return mem[key]
};