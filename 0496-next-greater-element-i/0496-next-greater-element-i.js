/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let ngMap = {} // { n1:ng1, n2:ng2 } a map of num vs next-greater-num
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
                ngMap[nums2[j]] = nums2[i]
            }
            // don't forget to push the current el index on the stack
            stack.push(i);
        }
    }
    return nums1.map(n => ngMap[n] ?? -1);
};