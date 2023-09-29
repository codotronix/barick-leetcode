/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let res = {}  // result
    for(let item of this) {
        let id = fn(item)
        if(!(id in res)) res[id] = []
        res[id].push(item)
    }
    return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */