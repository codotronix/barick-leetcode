/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 1) return 1;

    let l = 0;  // left
    let r = x   // right

    while(l < r) {
        prevL = l;
        prevR = r;

        let mid = l + Math.floor((r-l)/2);
        let sq = mid * mid;
        if(sq === x) return mid;

        if(sq < x) l = mid+1;
        else r = mid-1;
    }
    return (l*l > x) ? l-1 : l;
};