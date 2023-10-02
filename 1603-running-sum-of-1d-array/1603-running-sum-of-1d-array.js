/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let r = [nums[0]]
    for(let i=1; i<nums.length;i++) {
        r.push(r[i-1] + nums[i])
    }
    return r
};