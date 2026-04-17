/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    let i=0, j=0;

    while (i < (m+n) && j < n) {
        // nums[i] is already less or equal, move to next i
        if(nums1[i] <= nums2[j]) {
            ++i;
        }
        // else nums[i] in greater, so shift everything from this index to 1 place right
        else {
            shiftAllRight(i, nums1);
            nums1[i] = nums2[j];
            ++i;
            ++j;
        }
    }

    // if i is finished, but j still remains
    while(j < n) {
        nums1[m+j] = nums2[j];
        ++j;
    }
};

function shiftAllRight(startIndex, arr) {
    for(let i = arr.length-1; i > startIndex; i--) {
        arr[i] = arr[i-1];
    }
}