/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, stringSoFar='', closingAvailable=0) {
    // Let's say n is the opening brackets available
    // we take 2 helper default params
    // 1 to track the string so far, because we need them at the end
    // another to track how many unused/available closing brakcets we have

    // Base case, 
    // when we have used all Opening and Closing brackets,
    // return stringSoFar in an array
    if(n === 0 && closingAvailable === 0) return [stringSoFar]

    // to hold the result
    let res = []

    // At any point of time, we have 2 options,
    // either open a bracket or close one

    // Case 1: Open a bracket
    if(n > 0) {
        const res1 = generateParenthesis(n-1, stringSoFar + '(', closingAvailable + 1)
        res = res.concat(res1)
    }

    // Case 2: Close a bracket
    if(closingAvailable > 0) {
        const res2 = generateParenthesis(n, stringSoFar + ')', closingAvailable - 1)
        res = res.concat(res2)
    }


    return res
};