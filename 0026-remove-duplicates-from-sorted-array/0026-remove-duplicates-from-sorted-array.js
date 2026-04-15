/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0, j=0;
    while(j < nums.length) {
        // if a new element is found
        if(nums[j] !== nums[i]) {
            // then copy it on the next place
            ++i;
            nums[i] = nums[j];
        }

        // move j to the next element
        ++j;
    }

    // returning the number of uniq elements
    return i+1;
};