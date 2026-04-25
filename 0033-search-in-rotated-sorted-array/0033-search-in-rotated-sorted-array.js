/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// The Better Way
var search = function(nums, target) {
    let l = 0;
    let r = nums.length-1;

    // Since the sorted array is rotated
    // At each step only 1 side of the "mid" will be in sorted order
    // We have to find out that side at each step
    // And act depending on only calculations based on that side
    // The other (unsorted) side will be just the "else" case
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);

        if(nums[mid] === target) return mid;

        // Is the left side i.e. l-to-mid is the sorted side?
        if(nums[l] <= nums[mid]) {
            // since left is the SORTED side
            // we'll check IF our el is in the left side
            if(target >= nums[l] && target < nums[mid]) {
                r = mid-1;
            }
            // else, target is on the MESSY side
            else {
                l = mid+1;
            }
        }
        // else, the right (mid-to-r) is the sorted side
        else {
            // Since here we know RIGHT is the Sorted Side
            // Here we'll check IF target is also on RIGHT side
            if(target > nums[mid] && target <= nums[r]) {
                l = mid+1;
            }
            // else, target is on the Messy Left
            else {
                r = mid-1;
            }
        }
    }

    return -1;
}

// My Method 1
// var search = function(nums, target) {
//     // let's find out the number of rotation 
//     // and the actual array
//     let k = 0;  // no of rotations

//     // in ideal sorted array 1st el must be < last el
//     // since it was left rotated, we will right rotate
//     // i.e. take from last and put it at first
//     while(nums[0] > nums.at(-1)) {
//         k++;
//         const lastEl = nums.pop();
//         nums.unshift(lastEl)
//     }
    
//     // [0,1,2,4,5,6,7] l=0, r=0 , mid=1
//     // now the arr is properly sorted, 
//     // let's do a binary search
//     let l = 0;
//     let r = nums.length-1;
//     while(l <= r) {
//         let mid = l + Math.floor((r-l)/2);

//         if(nums[mid] === target) {
//             let index = mid - k;
//             return index < 0 ? (nums.length + index) : index;
//         }
//         else if(nums[mid] > target) r = mid-1;
//         else l = mid+1;
//     }

//     return -1;
// };