/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x
    let i=2
    
    for(i=2; i*i<x; ++i);

    return (i*i) === x ? i : i-1
};