/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * 
 Let's try:
 better than O(n log n), where n is the array's size.

 My own implementation -- Barick
 */
var topKFrequent = function(nums, k) {
    // 1st let's count the elemets in a map
    const numCounts = {}
    for(let n of nums) {
        if(!(n in numCounts)) numCounts[n] = 0
        ++numCounts[n]
    }
    // console.log('numCounts = ', numCounts)

    // Now let's have an array of length (nums.length+1)
    // [Since, the highest possible count is nums.length
    // and we are using count as index, hence nums.length+1,]
    // whose index positions will indicate the counts
    // (easiest way to sort without actually sorting)
    // and let's fill all the positions with null
    const countsAsIndex = Array(nums.length+1).fill(null) 

    // Now go thru the uniq numbers 
    for(let n of Object.keys(numCounts)) {
        // take the actual count as index
        let index = numCounts[n]
        if(!countsAsIndex[index]) countsAsIndex[index] = []
        countsAsIndex[index].push(n)
    }

    // console.log('countsAsIndex = ', countsAsIndex)

    // Now go thru the countsAsIndex from right to left 
    // and collect the elements
    // result array will have the elemts with descending frequency
    let result = []
    for(let i = nums.length + 1; i>=0 ; i--) {
        // if anything is present with count i
        if(countsAsIndex[i]) {
            result = [...result, ...countsAsIndex[i]]
        }
    }
    // console.log('result = ', result)

    // return the first k elements
    return result.slice(0, k)
};