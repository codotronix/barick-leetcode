/**
 * @param {string} s
 * @return {boolean}
 */
 /**
 Runtime 49ms Beats 88.43%of users with JavaScript,
 Memory 42.92MB Beats 24.51%of users with JavaScript
  */
var isValid = function(s) {
    // Single bracket can't pair
    if(s.length <= 1) return false

    const stack = []
    // let's make a map of { 'close': 'open' } of bracket pairs
    const pairs = {
        ')': '(', '}': '{', ']': '['
    }

    for(let i=0; i<s.length; ++i) {
        const c = s[i]  // current char
        // if it's an opening one
        if(Object.values(pairs).includes(c)) stack.push(c)

        // else a closing one
        else {
            // pop the last entry from the stack
            const lastEntry = stack.pop()

            // it must match the paris map of current char
            if(lastEntry !== pairs[c]) {
                return false
            }
        }
    }

    // if the stack is cleared, we are done
    return (stack.length === 0) ? true : false
};