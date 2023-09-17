/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let's have a map of { numberNeeded: prevIndex }
    let m = {}

    for(let i=0; i<nums.length; ++i) {
      const n = nums[i] // this number
      // if n is already required
      // we are done
      if(n in m) return [i, m[n]]

      // store its complimentary req num
      m[target-n] = i
    }

    return []
};