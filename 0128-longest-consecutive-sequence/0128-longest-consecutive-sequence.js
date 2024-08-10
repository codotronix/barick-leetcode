/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Let's put all the numbers in an object for O(1) lookup
    let map = {}
    for(const n of nums) map[n] = true

    // now let's go thru each numbers
    let maxL = 0
    for(const n of nums) {
        // if the (n-1) is present in our map
        // then n is not s atrt of any sequence
        if(map[n-1]) continue

        // else it can be a start of a seq
        // so, let's see how many consecutive numbers are there
        // starting with n
        let k = n   // start num of seq
        let l = 1   // length of the seq
        while(map[k+1]) {
            ++k
            ++l
        }
        // store the longest seq so far
        maxL = Math.max(maxL, l)
    }

    return maxL
};