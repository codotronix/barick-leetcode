/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let i=0
    let res = []
    while(i<arr.length) {
        res.push(arr.slice(i, i+size))
        i += size
    }

    return res
};
