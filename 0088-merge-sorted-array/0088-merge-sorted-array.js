/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
    My Simple Solution which will take an addional n+m place, time complexity is 2 * O(n+m)
    I will create a new merged sorted array, and then copy back everything to nums1

    Time: 47 ms (85.59%), Space: 41.6 MB (90.3%)
 */ 
var merge = function(nums1, m, nums2, n) {
    let res = []
    let i=0, j=0;

    // while both has something
    while(i<m && j<n) {
        // take the smaller number
        if(nums1[i] < nums2[j]) {
            res.push(nums1[i])
            ++i
        }
        else {
            res.push(nums2[j])
            ++j
        }
    }

    // if something left in nums1
    if(i<m) res = res.concat(nums1.slice(i))

    // if something is left in nums2
    if(j<n) res = res.concat(nums2.slice(j))

    // copy everything back in nums1
    for(i=0; i<m+n; ++i) nums1[i] = res[i]
};
