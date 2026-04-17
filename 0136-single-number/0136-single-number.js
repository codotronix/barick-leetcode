/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let's XOR all of them,
    // Only the ODD one out will remain
    let r = 0;
    for (const n of nums) {
        r ^= n;
    }
    return r;
};