/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        let r = n;
        let minBadIndex = Infinity;
        while(l <= r) {
            let mid = l + Math.floor((r-l)/2);
            // if mid is bad
            if(isBadVersion(mid)) {
                minBadIndex = Math.min(minBadIndex, mid);
                // look left, to find the 1st bad before this mid
                r = mid-1;
            }
            else {
                l = mid+1;
            }
        }

        // One last check, to be sure
        // if we're there or almost there?
        if(minBadIndex > 1 && isBadVersion(minBadIndex-1)) {
            minBadIndex -= 1;
        }

        return minBadIndex;
    };
};