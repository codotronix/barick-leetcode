/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length-1;

    while(l < r) {
        let mid = l + Math.floor((r-l) / 2);

        // even if there are 2 element, 
        // they will be l=mid and r
        // i.e. mid will always have mid+1 available
        // example 1, [2,3] // l and mid is 2, r is 3
        // example 2, [3,2] // l and mid is 3, r is 2
        if(nums[mid+1] > nums[mid]) l = mid+1;
        else r = mid; // because there may not be a mid-1 for len=2 arr
    }

    return l;
};