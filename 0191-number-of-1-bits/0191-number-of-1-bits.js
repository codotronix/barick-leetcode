/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // Let's convert the number to binary string
    let b = n.toString(2)
    let c = 0
    for(let i=0; i<b.length; ++i) {
        if(b[i] === '1') ++c
    }

    return c
};