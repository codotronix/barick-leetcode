/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let mx = 0, c = 0;
    for(let n of nums) {
        if(n === 1) c++;
        else {
            mx = Math.max(mx, c);
            c = 0;
        }
    }

    // last count
    mx = Math.max(mx, c);
    return mx;
};