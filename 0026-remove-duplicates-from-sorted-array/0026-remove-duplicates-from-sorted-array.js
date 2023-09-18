/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0   // the 0th element is uniq
    let j = 1   // the moving index
    while(j < nums.length) {
        // if a uniq number found
        // increment i 
        // and put that new number in this new i
        if(nums[j] !== nums[i]) {
            ++i
            nums[i] = nums[j]
        }

        // in any case, keep j moving
        ++j
    }

    return i+1  // since i was last uniq index
};