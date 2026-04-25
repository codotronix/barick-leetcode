/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 1) return 1;

    let l = 0;  // left
    let r = x   // right
    let prevL = 0;
    let prevR = 0;

    while(l < r) {
        prevL = l;
        prevR = r;

        let mid = l + Math.floor((r-l)/2);
        let sq = mid * mid;
        if(sq === x) return mid;

        if(sq < x) l = mid;
        else r = mid;

        // are we stuck? break out
        if(l === prevL && r === prevR) break;
    }
    return l;
};