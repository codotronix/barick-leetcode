/**
 * @param {number} x
 * @return {boolean}
 */

 // 1 liner solution
// var isPalindrome = x => x.toString() === x.toString().split('').reverse().join('')

var isPalindrome = function (x) {
    // -ve is not plaindrome
    if(x<0) return false

    // let's break the number down into an arr of digits
    const arr = []
    while(x>0) {
        arr.push(x%10)
        x = Math.floor(x/10)
    }

    return isArrPalindrome(arr)
}

function isArrPalindrome (arr) {
    let i = 0;
    let j = arr.length - 1;
    
    while(i<j) {
        if(arr[i] !== arr[j]) return false;
        ++i;
        --j;
    }

    return true;
}