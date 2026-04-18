/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastL = 0;
    let currentL = 0;

    for(let c of s) {
        // space should save and reset current word length count
        if(c === ' ') {
            // if currentL > 0, consider it
            if(currentL) lastL = currentL;
            currentL = 0;
        }
        else {
            currentL++;
        }
    }

    // if currentL > 0, consider it
    if(currentL) lastL = currentL;

    return lastL;
};