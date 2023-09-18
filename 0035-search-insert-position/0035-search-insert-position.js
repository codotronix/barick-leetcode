/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /**
   My Simple Solution, BUT NOT O(log n) as required in Question
   Runtime 51ms Beats 62.87%of users with JavaScript
   Memory 42.06MB Beats 56.17%of users with JavaScript
 */
var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; ++i) {
        // if target found
        // OR
        // current number is bigger than target
        // the target should have been at that index 
        // and the current number should move to the right
        if(nums[i] === target || nums[i] > target) return i
    }

    // full array complete?
    // place it after everything
    return nums.length
};