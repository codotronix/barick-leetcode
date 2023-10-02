/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    // let's calculate the left running sum
    let leftRunSum = [...nums]
    for(let i=1; i<nums.length; i++) {
        leftRunSum[i] += leftRunSum[i-1]
    }

    // let's calculate right run sum
    let rightRunSum = [...nums].reverse()
    for(let i=1; i<nums.length; i++) {
        rightRunSum[i] += rightRunSum[i-1]
    }
    rightRunSum = rightRunSum.reverse()

    for(let i=0; i<nums.length; i++) {
        // if index at the begining
        if(i===0 && rightRunSum[i+1] === 0) return i

        // else if index at the end
        else if(i===nums.length-1 && leftRunSum[i-1] === 0) return i

        // else regular case
        else if(leftRunSum[i-1] === rightRunSum[i+1]) return i
    }

    return -1
};