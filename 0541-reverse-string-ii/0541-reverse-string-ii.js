/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    // how many 2k are possible, full or partial?
    const nk = Math.ceil(s.length / (2*k))
    let res = '';
    for(let i=0; i < nk; ++i) {
        res += halfFirstKSubstr(s.substring(2*k*i, 2*k*i + 2*k), k);
    }

    return res;
};

function halfFirstKSubstr(s, k) {
    if(s.length < k) return reverse(s);
    
    return reverse(s.substring(0, k)) + s.substring(k);
}

function reverse(s) {
    return s.split('').reverse().join('')
}