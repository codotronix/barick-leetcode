/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let r = 0;

    // find substrings and their beauties
    for(let i=0; i < s.length; i++) {
        
        // hold incremental char freq for substrings 
        // as they increase 1 char at a time
        let freq = new Array(26).fill(0); // place for 26 alphabets
        for(let j=i; j < s.length; j++) {
            // add only this one new char
            const index = s[j].codePointAt() - 'a'.codePointAt();
            freq[index]++;
            r += getBeautyOf(freq);
        }
    }
    return r;
};

function getBeautyOf(freq) {
    let maxFreq = 0;
    let minFreq = Infinity;

    for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
            if (freq[k] > maxFreq) maxFreq = freq[k];
            if (freq[k] < minFreq) minFreq = freq[k];
        }
    }

    return maxFreq - minFreq;
}

// function getBeauty(s) {
//     let m = {}
//     for(let c of s) {
//         if(!(c in m)) m[c] = 1;
//         else m[c]++;
//     }
//     return Math.max(...Object.values(m)) - Math.min(...Object.values(m));
// }

// function getBeauty(s) {
//     let a = new Array(26).fill(0); // place for 26 alphabets
//     for(let c of s) {
//         let i = c.codePointAt() - 'a'.codePointAt();
//         a[i]++;
//     }
//     let mx = -1, mn = -1;
//     for(let n of a) {
//         if(n === 0) continue;
//         if(mx === -1 || n > mx) mx = n;
//         if(mn === -1 || n < mn) mn = n;
//     }
//     // if(isNaN(mx - mn)) console.log('NaN in getBeauty for s = ', s);
//     return mx - mn;
// }
