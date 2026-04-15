/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0; // the result

    // if negative
    const isNegative = x < 0;
    if(isNegative) {
        x = -x;
    }

    // as long as there is a number left
    while(x > 0) {
        let r = x % 10; // take the rightmost digit
        res = res * 10 + r;
        x = Math.floor(x / 10); // everything except the right most digit
    }

    if(isNegative) {
        // if already crossed 30 bits, 
        // then we don't have place for the -ve sign bit
        if(res >= (2**31)) return 0;
        res = -res;
    }
    else {
        // +ve should not go beyond 2^31-1
        if(res > (2**31 - 1)) return 0;
    }

    return res;
};