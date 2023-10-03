/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stck=[]
    for(let c of s) {
        if(stck.length === 0) stck.push(c)
        else {
            
            let lastCh = stck[stck.length-1]
            // if current char is duplicate of last one
            // remove the last char
            if(c === lastCh) stck.pop()
            else stck.push(c)
        }
    }
    return stck.join('')
};