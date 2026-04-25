/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let st = [];    // monotonic stack
    let ans = new Array(nums.length).fill(-1);
    let i=-1   // circular array
    let crossedOnce = false;

    while(i < nums.length) {
        i = (++i) % nums.length;    // circular

        // circlarly looping back to oneself?
        if(st[0] === i) {
            crossedOnce = true;
        }

        while(st.length && nums[i] > nums[st.at(-1)]) {
            let j = st.pop();
            ans[j] = nums[i];
        }

        if(crossedOnce) return ans

        st.push(i); // empty or nums[i] < st.top
    }

    return ans;
};