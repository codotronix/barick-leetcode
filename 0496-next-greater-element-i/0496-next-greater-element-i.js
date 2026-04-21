/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // 1st let's create a nextGreaterElement list
    // for nums2
    let stack = [];
    let nextGreaterElement = new Array(nums2.length).fill(-1); // -1 means no greater el on right
    for(let i=0; i<nums2.length; ++i) {
        // if stack is empty, put this element
        // but instead of putting the el, let's put the index
        // by putting the index, we'll know its potition and value
        if(!stack.length) stack.push(i);

        // else if it's lesser-equal than the stack top, just push it there
        else if(nums2[i] <= nums2[stack.at(-1)]) stack.push(i);
        
        // else, this is Bigger, and we have found the answer (next bigger el)
        // for at least the top element, and let's find out if for more
        else {
            while(nums2[i] > nums2[stack.at(-1)]) {
                let j = stack.pop();
                nextGreaterElement[j] = nums2[i];
            }
            // don't forget to push the current el index on the stack
            stack.push(i);
        }
    }

    // At this point nextGreaterElement contains next bigger el 
    // for all the el of nums2, if available, else -1

    let res = new Array(nums1.length).fill(-1); // will hold the answer
    let nMap = {} // this will hold el:index for nums2, for easy find
    for(let i=0; i<nums2.length; i++) {
        nMap[nums2[i]] = i;
    }

    // now let's go thru nums1 and fill our result list
    for(let i=0; i<nums1.length; i++) {
        let num = nums1[i];
        let j = nMap[num];
        res[i] = nextGreaterElement[j];
    }


    return res;
};