/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // // 1 liner
    // return s.split('').sort().join('') === t.split('').sort().join('')

    if(s.length !== t.length) return false;

    // create a map of letter count fot s
    let m = {}
    for(let c of s) {
        if(!(c in m)) m[c] = 1;
        else m[c]++;
    }

    // now keep deducting from m for t
    for(let c of t) {
        if(!(c in m)) return false;
        else {
            m[c]--;
            if(m[c] < 0) return false;
        }
    }

    return true;
};