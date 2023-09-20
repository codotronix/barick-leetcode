/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort((a,b) => a-b)
    let i=0
    while(i<nums.length-1) {
        if(nums[i] !== nums[i+1]) return nums[i]
        i += 2
    }
    // if it has reached this point
    // then the numbers at odd places are no single
    // but e.g. 11223, if the length was odd
    // then we haven't checked the last number
    return nums[nums.length-1]
};