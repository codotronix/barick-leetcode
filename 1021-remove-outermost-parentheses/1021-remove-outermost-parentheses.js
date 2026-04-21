/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level=0;    // to keep track of nesting of brackets
    let hiLevel=0;  // highest level reached
    let l1Index=-1; // last level 1 opening ( index
    let res = ''    // will hold the result
    for(let i=0; i<s.length; i++) {
        // an opening bracket?
        // increase the level
        if(s[i] === '(') {
            level++;
            hiLevel = level;

            if(level === 1) l1Index=i;
        }
        // else a closing ')' found?
        else {
            // if this is a level one closing
            // and inside it we had nested
            // save the inner content
            if(level === 1 && hiLevel > 1) {
                res += s.substring(l1Index+1, i);

                // clear all flags
                hiLevel = 0;
                l1Index = -1;
            }
            level--;
        }
    }

    return res;
};