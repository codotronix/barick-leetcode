/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let direction = 0   // should be either +1 or -1
    
    // start from index 1
    for(let i=1; i<nums.length; ++i) {
        // if(nums[i] === nums[i-1]) continue

        // increasing?
        if(nums[i] > nums[i-1]) {
            // direction uninitialized ?
            if(direction === 0) direction = 1

            // direction changed?
            else if(direction === -1) return false
        }

        // decreasing ?
        else if(nums[i] < nums[i-1]) {
            // direction uninitialized ?
            if(direction === 0) direction = -1

            // direction changed?
            else if(direction === 1) return false
        }
    }

    return true
};