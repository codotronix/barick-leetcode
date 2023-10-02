/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
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
}


/**
* Approach 1: This will fail if we have negatives,
* User left pointer and right pointer and keep closing from both ends
* keeping the sum
 */
// var pivotIndex = function(nums) {
//     let l=0                 // left pointer
//     let r=nums.length-1     // right pointer
//     let ls=nums[l],         // left sum,
//         rs=nums[r]          //right sum

//     while(l<r) {
//         // if left-sum is low
//         if(ls < rs) {
//             l++
//             ls += nums[l]
//         }
//         else {
//             r--
//             rs += nums[r]
//         }
//     }

//     if(ls === rs && l===r) return l
//     else return -1
// };