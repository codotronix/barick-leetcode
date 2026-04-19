/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = {} // to store { key: [words] }
    for(let str of strs) {
        let key = str.split('').sort().join('');
        if(!(key in m)) m[key] = [];
        m[key].push(str)
    }

    return Object.values(m);
};