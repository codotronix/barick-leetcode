/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // O(n), no extra space
    // keep the count c of the non-zero elements on the left
    // i will scan from left to right only once
    // so, on the left the c'th element must be a zero
    // and i have already got past it, (that's how it was counted)
    // Now whenever i founds a non-zero element, it should be swapped 
    // with the c'th zero, and the count of non-zero c should be +1
    let count = 0
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] !== 0) {
            // swap the count'th elements with this one
            // the count'th element will be either this element itself
            // until discovering the first zero
            // and from then onwards the count'th el will always be a ZERO
            [ nums[count], nums[i] ] = [ nums[i], nums[count] ]
            ++count // another non-zero found, yay!
        }
    }

    return nums
};