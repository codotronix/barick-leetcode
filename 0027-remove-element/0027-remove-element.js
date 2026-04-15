/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0; // where val was found;
    let j=0; // keep moving, keep looking
    while(j < nums.length) {
        // a non-val found?
        if(nums[j] !== val) {
            nums[i] = nums[j]
            ++i;
        }
        // else if j found a val, but i is still sitting on a non-val
        // point i to this place
        // else if (nums[i] !== val) {
        //     i = j;
        // }

        // keep moving
        ++j;
    }

    return i;
};