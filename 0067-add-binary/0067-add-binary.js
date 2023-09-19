/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // who's long, who's short?
    let [big, small] = a.length > b.length ? [a,b] : [b,a]

    // start from the end 
    // iterate only lmin times
    let i=0, res='', carry = 0
    while(i < small.length) {
        let s = parseInt(big[big.length-1-i]) + parseInt(small[small.length-1-i]) + carry
        // if all 3 are 1
        if(s === 3) {
            s = 1
            carry = 1
        }
        // if only 2 are 1
        else if (s === 2) {
            s = 0
            carry = 1
        }
        // if only 1 is 1
        else {
            carry = 0
        }

        // add it at the left of result
        res = s + res
        ++i
    }

    // now for the rest of the digits in big
    for(i=big.length-small.length-1; i>=0; --i) {
        let s = parseInt(big[i]) + carry
        // carry will be 1 only if both are 1
        if(s === 2) {
            s = 0
            carry = 1
        }
        else {
            carry = 0
        }

        // add it at the left of result
        res = s + res
    }

    // still a carry left?
    if(carry === 1) res = carry + res

    return res
};