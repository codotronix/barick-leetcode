/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const m = {}

    for (let s of strs) {
        const sortedS = s.split('').sort().join('')

        if(!(sortedS in m)) {
            m[sortedS] = []
        }

        m[sortedS].push(s)
    }

    return Object.values(m)
};