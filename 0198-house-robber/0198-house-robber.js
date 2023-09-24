/**
 * @param {number[]} nums
 * @return {number}
 */
 // MY SWEET DP :)
 // Runtime 51ms Beats 57.58% of users with JavaScript
 // Memory 41.54MB 81.12% of users with JavaScript
 // Set the default currentIndex to -1 becase
 // we need to decide whether to include or not the first house
var rob = function(nums, currentIndex=-1, mem={}) {
    let i = currentIndex
    // TERMINATING CASES
    if(nums.length === 1) return nums[0]
    // all houses over?
    if(i >= nums.length) return 0
    // on last house? better rob it
    if(i === nums.length-1) return nums[i]

    // we already know max profit from this point onwards?
    if(i in mem) return mem[i]

    // YET TO START
    // start with either 0 or 1 indexed house
    // BUT FOR THAT THERE HAS TO BE ATLEAST 2 HOUSES, WHAT IF nums = [2]
    if(i===-1) {
        i=0
        let max1 = nums[i] + Math.max( rob(nums, i+2, mem), rob(nums, i+3, mem) )

        i=1
        let max2 = nums[i] + Math.max( rob(nums, i+2, mem), rob(nums, i+3, mem) )

        mem[i] = Math.max(max1, max2)
        return mem[i]
    }

    // regular case
    // We can skip 1 house or 2 houses, 
    // if that's profitable, say [9,1,1,9]
    mem[i] = nums[i] + Math.max( rob(nums, i+2, mem), rob(nums, i+3, mem) )
    return mem[i]
};