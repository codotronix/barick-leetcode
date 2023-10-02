/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    mx = [0,0]
    for(let y=0; y<mat.length; ++y) {
        let s = 0
        for(let x=0; x<mat[y].length; ++x) {
            s += mat[y][x]
        }
        if(s > mx[1]) mx = [y, s]
    }

    return mx
};