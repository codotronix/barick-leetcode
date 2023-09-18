/**
 * @param {string[]} strs
 * @return {string}
 */
// My Bad Solution 1
// 
var longestCommonPrefix = function(strs) {
    // let's find the shortest length of those strings
    let l = strs[0].length
    // O(n)
    for(let s of strs) {
        if(s.length < l) l = s.length
    }

    let res = ''    // resulting string
    let i = 0       // traversing index

    // O(n^2)
    // let's increment index 1 by 1
    // and see the char at that index matches for all of strs
    while(i < l) {
        let allMatch = true // init
        let ch = strs[0][i] // init with current char at index of 1st string
        for(let s of strs) {
            // if there's a single mismatch, break out
            if(s[i] !== ch) {
                allMatch = false
                break
            }
        }

        // if all the chars match at this index
        // append this char and go next
        if(allMatch) {
            res += ch
            ++i
        }
        else break
    }

    return res
};