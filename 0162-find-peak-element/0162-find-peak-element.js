/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    let l = 0;
    let r = nums.length-1;

    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);

        // let's see if we've found a peak
        if(isPeak(mid, nums)) return mid;

        // boundaries
        if(mid === 0) l=mid+1;
        else if(mid === nums.length-1) r=mid-1;
        else if(nums[mid-1] > nums[mid+1]) r = mid-1;
        else l = mid+1;
    }

    return -1;
};

// let's assume the array contains at least 2 elements
function isPeak(i, arr) {
    if(i === 0 && arr[i] > arr[i+1]) return true;
    else if(i === arr.length-1 && arr[i] > arr[i-1]) return true;
    else if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) return true;
    else return false;
}