/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // let's find out the number of rotation 
    // and the actual array
    let k = 0;  // no of rotations

    // in ideal sorted array 1st el must be < last el
    // since it was left rotated, we will right rotate
    // i.e. take from last and put it at first
    while(nums[0] > nums.at(-1)) {
        k++;
        const lastEl = nums.pop();
        nums.unshift(lastEl)
    }
    
    // [0,1,2,4,5,6,7] l=0, r=0 , mid=1
    // now the arr is properly sorted, 
    // let's do a binary search
    let l = 0;
    let r = nums.length-1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);

        if(nums[mid] === target) {
            let index = mid - k;
            return index < 0 ? (nums.length + index) : index;
        }
        else if(nums[mid] > target) r = mid-1;
        else l = mid+1;
    }

    return -1;
};