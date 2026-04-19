/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let m = {}; // the map
    // let r = {};
    for(let i=0; i < s.length; i++) {
        // the char in s should have a mapping for t
        // and the mapping should hold for all the same char
        if(s[i] in m) {
            // mapping mismatch?
            if(m[s[i]] !== t[i]) return false;
        }
        // 1st time put the mapping
        else {
            m[s[i]] = t[i];
        }
    }

    // check if 2 or more values are same
    // then the mapping is not 1:1
    return Object.keys(m).length === (new Set(Object.values(m))).size
};