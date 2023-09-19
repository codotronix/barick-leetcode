/**
 * @param {number} x
 * @return {number}
 */
 /**
    My Solution 1: Brute Force
    Runtime 87ms Beats 21.70%of users with JavaScript
    Memory 43.58MB Beats 66.22%of users with JavaScript
  */
// var mySqrt = function(x) {
//     if(x<2) return x
//     let i=2

//     for(i=2; i*i<x; ++i);

//     return (i*i) === x ? i : i-1
// };

////////////////////////////////////////////////////////////////////////////

// My Solution 2 - Binary, O(log n)
/**
    Runtime 63ms Beats 64.52% of users with JavaScript
    Memory 43.70MB Beats 49.86% of users with JavaScript
 */
var mySqrt = function(x) {
    if(x<2) return x

    let left = 2
    let right = Math.floor(x/2)
    let mid = left + Math.floor( (right-left)/2 )

    while(left<right) {
        mid = left + Math.floor( (right-left)/2 )
        let sq = mid*mid
        if(sq === x) return mid
        else if(sq < x) left = mid+1
        else right = mid-1
    }

    // at this point left === right
    let sq = left*left
    if(sq <= x) return left
    else return left-1
}