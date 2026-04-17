/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let mx = nums.length;
    let sm = 0;

    for(let n of nums) {
        sm += n;
    }

    const sum0toN = Math.floor(mx*(mx+1)/2);
    return (sum0toN - sm);
};