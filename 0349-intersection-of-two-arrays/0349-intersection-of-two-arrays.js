/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // nums1 = new Set(nums1)
    // nums2 = new Set(nums2)
    let m = {}
    let r = []
    // first list
    for(let n of nums1) {
        if(!(n in m)) m[n] = 1 // no duplicates, so hardcode to 1
    }
    // end list
    for(let n of nums2) {
        if(n in m && m[n] > 0) {
            r.push(n)
            --m[n]
        }
    }

    return r
};