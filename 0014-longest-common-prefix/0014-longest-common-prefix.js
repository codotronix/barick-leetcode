/**
 * @param {string[]} strs
 * @return {string}
 */
// My Bad Solution 1
/*
Runtime: 57 ms, faster than 49.11% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 44 MB, less than 14.66% of JavaScript online submissions for Longest Common Prefix.
*/
// var longestCommonPrefix = function(strs) {
//     // let's find the shortest length of those strings
//     let l = strs[0].length
//     // O(n)
//     for(let s of strs) {
//         if(s.length < l) l = s.length
//     }

//     let res = ''    // resulting string
//     let i = 0       // traversing index

//     // O(n^2)
//     // let's increment index 1 by 1
//     // and see the char at that index matches for all of strs
//     while(i < l) {
//         let allMatch = true // init
//         let ch = strs[0][i] // init with current char at index of 1st string
//         for(let s of strs) {
//             // if there's a single mismatch, break out
//             if(s[i] !== ch) {
//                 allMatch = false
//                 break
//             }
//         }

//         // if all the chars match at this index
//         // append this char and go next
//         if(allMatch) {
//             res += ch
//             ++i
//         }
//         else break
//     }

//     return res
// };

// Optimal Solution 1
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    if(strs.length === 1) return strs[0]
    
    // Let's sort the strings
    // it will keep the most different strings at 2 terminals of the array
    strs = strs.sort()  // IMPORTANT: DO NOT PASS THE COMPARE-FUNC FOR STRING ARRAYS
    
    // Now, let's compare the 1st with the last string
    let fstr = strs[0]
    let lstr = strs[strs.length-1]
    let res = ''    // result string
    for(let i=0; i<fstr.length; ++i) {
        if(fstr[i] === lstr[i]) res += fstr[i]
        else break
    }
    return res
}