/**
 * @param {number} x
 * @return {number}
 */
 /**
    Runtime 87ms Beats 21.70%of users with JavaScript
    Memory 43.58MB Beats 66.22%of users with JavaScript
  */
var mySqrt = function(x) {
    if(x<2) return x
    let i=2

    for(i=2; i*i<x; ++i);

    return (i*i) === x ? i : i-1
};