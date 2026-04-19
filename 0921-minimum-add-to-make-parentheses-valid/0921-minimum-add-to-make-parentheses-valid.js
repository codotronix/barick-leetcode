/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let needsClosing = 0;
    let needsOpening = 0;
    for(let c of s) {
        // if open
        if(c === '(') needsClosing++;
        // else close
        // careful, for scenario like "()))(("
        // here too much closing, so needs to open at the beginning
        else {
            if(needsClosing > 0) needsClosing--;
            else needsOpening++;    // these needs to on the left, i.e. beginning of string and therefore can't be balanced with '(' that we will encounter further on the right
        }
    }

    return needsOpening + needsClosing;
};