/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length-1;

    while(l < r) {
        let mid = l + Math.floor((r-l)/2);

        // the l<r will ensure that there will always be
        // at least 2 elements where l will be mid and r
        // i.e. mid will always have a mid+1
        // so, let's start with tha
        
        // if mid+1 is greater, then peak will be 
        // on the right
        if(arr[mid] < arr[mid+1]) l = mid+1;

        // else, peak will be on left or mid itself
        else r = mid;

        // Examples:
        // 0 1 0
        // 0 1 2 0
        // 0 2 1 0
    }

    // at this point l should point to Peak
    return l;
};