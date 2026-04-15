/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums)
};

function mergeSort(nums1=[], nums2=[]) {
    // if nums1 and nums2 has 1 elements,
    // just merge and return
    if(nums1.length <= 1 && nums2.length <= 1) {
        return mergeTwoSortedArrays(nums1, nums2)
    }

    const midL1 = Math.floor(nums1.length / 2);
    const midL2 = Math.floor(nums2.length / 2);

    let sortedArr1 = mergeSort(nums1.slice(0, midL1), nums1.slice(midL1))
    let sortedArr2 = mergeSort(nums2.slice(0, midL2), nums2.slice(midL2))
    return mergeTwoSortedArrays(sortedArr1, sortedArr2)
}

/**
// Thinking
// [5,2,3,1]
// [5,2], [3,1]
// [5], [2], [3], [1]
// [2,5], [1,3]
// [1,2,3,5]
 */

function mergeTwoSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let sr = []; // resultant sorted array
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            sr.push(arr1[i]);
            ++i;
        }
        else {
            sr.push(arr2[j]);
            ++j;
        }
    }

    // at this point 1 or both the arrays are finished
    // so collect the rest from the unfinished array
    while(i < arr1.length) {
        sr.push(arr1[i]);
        ++i;
    }
    while(j < arr2.length) {
        sr.push(arr2[j]);
        ++j;
    }

    return sr;
}