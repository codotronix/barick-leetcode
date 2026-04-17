/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0, j=0;
    while(j < nums.length) {
        // first zero is found
        if(nums[j] === 0 && nums[i] !== 0) {
            i = j; // point i to it
        }
        // j finds a non-zero, and i is pointing to a zero
        else if(nums[j] !== 0 && nums[i] === 0) {
            nums[i] = nums[j];
            nums[j] = 0;
            ++i;
        }

        ++j;
    }
};

// 1,2,0,0,0,3