/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    // not enough elements to fill
    if(this.length !== rowsCount*colsCount) return []

    let res = []
    for(let i=0; i<rowsCount; ++i) res.push([])

    let dir = 1     // direction is +1 or -1
    let i=-1, c=0
    while(i<this.length) {
        c = dir === 1 ? 0 : rowsCount-1
        while(c < rowsCount && c >= 0) {
            res[c].push(this[++i])
            c += dir
        }
        // change direction
        dir *= -1

        // if end element reached?
        if(i >= this.length-1) break
    }
    return res
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */