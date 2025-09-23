/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1Arr = version1.split('.').map(p => parseInt(p))
    const v2Arr = version2.split('.').map(p => parseInt(p))
    const v1l = v1Arr.length
    const v2l = v2Arr.length
    const maxL = Math.max(v1l, v2l)
    for(let i=0; i<(maxL - v1l); ++i) v1Arr.push(0)
    for(let i=0; i<(maxL - v2l); ++i) v2Arr.push(0)

    for(let i=0; i<maxL; ++i) {
        if(v1Arr[i] < v2Arr[i]) return -1
        else if(v1Arr[i] > v2Arr[i]) return 1
    }

    return 0
};