/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // Plan
    // Example 1: 1 2 3 4 5
    // Example 2: 2 3 4 5 1
    // Example: 1 2 3
    // Example: 2 3 1
    // Example: 1 2
    // Example: 2 1
    // Think: The array is sorted.
    // Normal case, the min will be on left of mid
    // But if rotated, and the right side becomes unsorted
    // then, min will be on right.
    // So, if right side is broken, then min will be there, just
    // at the point of break
    // else, min will be on the left
    // So, we will examine the right side to know its state
    let l = 0;
    let r = nums.length-1;

    while(l < r) {
        let mid = l + Math.floor((r-l)/2);

        // examine the right side
        if(nums[mid] < nums[r]) {
            // right side is sorted, 
            // which means min will be < or = mid
            r = mid;
        }
        // right side is broken, min on right
        // and above condition fails which means nums[mid] > nums[r]
        else {
            l = mid+1;
        }
    }

    // l should point the min
    return nums[l]
};