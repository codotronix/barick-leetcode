/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Solution 2: O(n) time, no extra space
// Same formula Works for both left rotation and right
// Step 1: reverse the 2 groups among themselves first
// Step 2: reverse the entire array
// We are DONE
var rotate = function(nums, k) {
    const n = nums.length
    // if k is bigger, a lot bigger than nums, 
    // make it smaller than nums.length
    if(k>n) k = k % n
    
    // Reverse the 1st group, i.e 0 to n-k elems
    reverse(nums, 0, n-k-1)
    // Reverse the last k elements
    reverse(nums, n-k, n-1)
    // Reverse the entire array
    reverse(nums, 0, n-1)
}

// reverse an array in place from start index to end index
function reverse(nums, start, end) {
    while(start < end) {
        [ nums[start], nums[end] ] = [ nums[end], nums[start] ]
        ++start
        --end
    }
    // nothing to return as we are modifying the object itself
}

 
/////////////////////////////////////////////////////////////////

// Solution 1: O(n) time, O(k) sapce
// var rotate = function(nums, k) {
//     // if k is bigger, a lot bigger, make it smaller than nums.length
//     if(k>nums.length) k = k % nums.length

//     let ka = nums.slice(nums.length-k)    // keep last k elements away
//     // shift the rest k places right
//     // start from right, otherwise it will get overwritten
//     for(let i=nums.length-k-1; i>=0; --i) {
//         nums[i+k] = nums[i]
//     }
//     // copy the 1st k element at the begining
//     for(let i=0; i<k; ++i) {
//         nums[i] = ka[i]
//     }
// };