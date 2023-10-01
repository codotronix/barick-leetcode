/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Solution 1: O(n) time, O(k) sapce
var rotate = function(nums, k) {
    // if k is bigger, a lot bigger, make it smaller than nums.length
    if(k>nums.length) k = k % nums.length
    let ka = nums.slice(nums.length-k)    // keep last k elements away
    // shift the rest k places right
    // start from right, otherwise it will get overwritten
    for(let i=nums.length-k-1; i>=0; --i) {
        nums[i+k] = nums[i]
    }
    // copy the 1st k element at the begining
    for(let i=0; i<k; ++i) {
        nums[i] = ka[i]
    }
};