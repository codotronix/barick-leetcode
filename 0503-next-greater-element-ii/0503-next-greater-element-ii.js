/**
 * @param {number[]} nums
 * @return {number[]}
 */

////// A BIT BETTER APPROACH
//////////////////////////////
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(-1);
    const stack = []; // Stores indices

    // Run the loop twice to simulate circularity
    for (let i = 0; i < 2 * n; i++) {
        const currentIndex = i % n; // Use modulo to wrap around indices
        
        while (stack.length > 0 && nums[currentIndex] > nums[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            ans[prevIndex] = nums[currentIndex];
        }
        
        // Only push indices during the first pass
        // (During the second pass, we only pop to find answers for the first pass)
        if (i < n) {
            stack.push(currentIndex);
        }
    }
    
    return ans;
};

// var nextGreaterElements = function(nums) {
//     let st = [];    // monotonic stack
//     let ans = new Array(nums.length).fill(-1);
//     let i=-1   // circular array
//     let crossedOnce = false;

//     while(i < nums.length) {
//         i = (++i) % nums.length;    // circular

//         // circlarly looping back to oneself?
//         if(st[0] === i) {
//             crossedOnce = true;
//         }

//         while(st.length && nums[i] > nums[st.at(-1)]) {
//             let j = st.pop();
//             ans[j] = nums[i];
//         }

//         if(crossedOnce) return ans

//         st.push(i); // empty or nums[i] < st.top
//     }

//     return ans;
// };