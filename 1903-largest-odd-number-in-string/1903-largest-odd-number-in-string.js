/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // find the rightmost odd integer index
    let j = num.length-1;
    while(j >= 0) {
        // odd found?
        if(Number(num[j]) % 2 === 1) break;
        j--;
    }

    return num.substring(0, j+1);
};