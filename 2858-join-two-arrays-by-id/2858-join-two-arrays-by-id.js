/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let res = {}    
    // go thru array 1 and add everything in res object
    for(let o of arr1) {
        res[o.id] = o
    }

    // go thru array 2
    for(let o of arr2) {
        if(o.id in res) {
            res[o.id] = {
                ...res[o.id], ...o
            }
        }
        else {
            res[o.id] = o
        }
    }

    return Object.values(res).sort((a,b) => a.id - b.id)
};