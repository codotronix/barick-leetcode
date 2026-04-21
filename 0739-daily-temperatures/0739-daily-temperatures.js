/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans = new Array(temperatures.length).fill(0);

    // we'll create a monotonic stack
    // and instead of values we will use the index of the values
    // so that when needed we can get both the index and the value
    let stack = [];
    for(let i=0; i<temperatures.length; i++) {
        // if the stack is empty
        // OR is the current temp is less than the stack-top temp
        // just push it
        if(!stack.length || temperatures[i] <= temperatures[stack.at(-1)]) {
            stack.push(i)
        }
        // else, we have found a bigger value
        else {
            // while current temp is > stack-top temp
            while(temperatures[i] > temperatures[stack.at(-1)]) {
                let j = stack.pop();
                ans[j] = i-j;
            }
            // at the end, 
            // don't forget to push the current el to the stack
            stack.push(i)
        }
    }

    return ans;
};