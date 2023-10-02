/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Logic
    // Calculate Left Running Max Sum
    // e.g. The Max Sum till 0th el is that el itself
    // for any nth el, the Max Sum till point can be =
    // MaxSum till prev el + that el OR that el alone
    let max = nums[0]
    // we can use the nums array itself for storing the maxSum
    for(let i=1; i<nums.length; i++) {
        // either add itself to the maxSum till prev index
        // or stand alone, whichever is Max
        nums[i] = Math.max(nums[i], nums[i-1]+nums[i])
        max = Math.max(max, nums[i])
    }

    return max
};