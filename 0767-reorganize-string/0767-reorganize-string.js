/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    // let's count the letter frequencies
    let m = {}
    for(let c of s) {
        if(!(c in m)) m[c] = 1;
        else m[c]++;
    }

    // let's make a DESC sorted list pairs,
    // like [['a', 5], ['c', 3], ...]
    let pairs = Object.entries(m).sort((a,b) => b[1]-a[1]);

    // if only 1 pair available, give up
    // NO NEED as next check will suffice
    // if(pairs.length <= 1) return '';

    // if the most freq of el is > half the positions,
    // then it will be impossible to fill
    // i.e. if 5 places, then most freq should be at-most 3
    // if 4 places, then highest freq should be at-most 2
    if(pairs[0][1] > (s.length+1)/2) return '';

    let p = 0; // keep track of pair in pairs
    let pair = pairs[0];
    let res = new Array(s.length).fill('_')

    // let's fill the even indices first
    for(i=0; i<s.length; i+=2) {
        // see we have something to fill with
        if(pair[1] === 0) {
            p++;
            if(p >= pairs.length) return ''; // ran out of things, which shouldn't happen
            pair = pairs[p];
        }
        res[i] = pair[0];
        pair[1]--;
    }

    // Now let's fill the ODD indices
    for(let i=1; i<s.length; i+=2) {
        // see we have something to fill with
        if(pair[1] === 0) {
            p++;
            if(p >= pairs.length) return ''; // ran out of things, which shouldn't happen
            pair = pairs[p];
        }
        res[i] = pair[0];
        pair[1]--;
    }

    return res.join('')
};