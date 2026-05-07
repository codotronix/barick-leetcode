/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return findLeftAndRightBoundary(nums, target, 0, nums.length-1);
};

function findLeftAndRightBoundary(nums, target, l, r) {
    if(l > r) return [-1, -1]; // no scope

    // if only 1 element in the scope
    if(l === r) {
        if(nums[l] === target) return [l, l];
        else return [-1,-1];
    }

    // Examples and Thoughts
    // 1 1 1 2 2  2 2 2 3 4 , target=2

    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);

        // if mid is a match
        // then go find the left and right boundaries
        if(nums[mid] === target) {
            let [left, ] = findLeftAndRightBoundary(nums, target, l, mid-1);
            let [, right] = findLeftAndRightBoundary(nums, target, mid+1, r);
            
            // we know mid is a match
            if(left === -1) left = mid;
            if(right === -1) right = mid;

            return [left, right];
        }
        else if(nums[mid] < target) l = mid+1;
        else r = mid-1;
    }

    // if we have reached this point, 
    // then target not found
    return [-1, -1];
}