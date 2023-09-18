/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) return 0

    let i=-1    // pointing to the last found diff num
    let j=0
    while(j < nums.length) {
        // if a different number is found
        // put it after the last i
        if(nums[j] !== val) {
            ++i
            nums[i] = nums[j]
        }

        // in any case keep forwarding j
        ++j
    }

    return i+1
};