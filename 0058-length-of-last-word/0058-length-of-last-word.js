/**
 * @param {string} s
 * @return {number}
 */
 /**
    My Solution 1
    Runtime 48ms Beats 75.48% of users with JavaScript
    Memory 42.02MB Beats 37.33% of users with JavaScript
  */
// var lengthOfLastWord = function(s) {
//     s = s.trim()
//     l = 0
//     for(let i=0; i<s.length; ++i) {
//         if(s[i] === ' ') l=0
//         else ++l
//     }
//     return l
// };

//////////////////////////////////////////////////////////

// using library functions
/**
    Runtime 57ms Beats 25.36% of users with JavaScript
    Memory 41.38MB Beats 94.33%of users with JavaScript
 */
var lengthOfLastWord = function(s) {
    let wordsArr = s.trim().split(/\s+/)    // split accross any number of spaces
    return wordsArr[wordsArr.length-1].length   // length of last word
}