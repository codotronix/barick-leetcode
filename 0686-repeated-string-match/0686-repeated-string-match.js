/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let count = 0;
    let r = '';  // keep appending a

    // a = 6 char
    // b = 4 char in such a way, we need b + b + b
    // last char of 1st b, +b, +1st char of last b
    while(r.length <= (a.length +  2* b.length)) {
        r += a;
        count++;
        if(r.includes(b)) return count;
    }

    return -1;
};