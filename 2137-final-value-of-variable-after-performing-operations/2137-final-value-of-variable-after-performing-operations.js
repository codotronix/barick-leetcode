/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0
    for(let o of operations) {
        if(o==='++X' || o==='X++') ++x
        else --x
    }
    return x
};