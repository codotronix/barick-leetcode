/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let matchingPair = {
        ')': '(', '}': '{', ']': '['
    }
    let st = []

    for(let c of s) {
        // if a open found
        if(c === '(' || c === '{' || c === '[') st.push(c)
        // else a close found
        else {
            // if not a matching pair close
            if(matchingPair[c] !== st.at(-1)) return false;
            else st.pop()   // remove the matching open
        }
    }

    // stack must be empty at the end
    return st.length === 0
};