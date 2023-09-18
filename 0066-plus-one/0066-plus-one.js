/**
 * @param {number[]} digits
 * @return {number[]}
 */
 // My Solution 1
 /**
    Runtime 57ms Beats 28.27% of users with JavaScript
    Memory 41.45MB Beats 90.14% of users with JavaScript
  */
var plusOne = function(digits) {
    let carry = 1 // start with 1, as the task is to increment 1
    for(let i=digits.length-1; i>=0; --i) {
        let s = digits[i] + carry
        digits[i] = s % 10
        carry = Math.floor(s/10)
    }
    if(carry === 0) return digits
    else return [carry, ...digits]
};