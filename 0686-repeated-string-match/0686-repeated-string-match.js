/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
/**
 * My Method 3 - Most Sensible and Easy
 * 1st identify the potential starting indices in 'a' i.e. sub string
 * Then for each keep appending sub string b until it matches the length of 
 * main string a, i.e. b.substring(potentialStartingPoint) + n*b....
 */
var repeatedStringMatch = function(sub, main) {
    if(sub.includes(main)) return 1;
    
    // let's find all the indices in sub which
    // matches main[0]
    // because those are the potential match start points
    let matchedIndices = [];
    for(let i = 0; i < sub.length; i++) {
        if(sub[i] === main[0]) matchedIndices.push(i);
    }

    // now check for all matchedIndices
    for(let i of matchedIndices) {
        let res = sub.substring(i);         // take the rest of the string
        if(!main.startsWith(res)) continue; // match fails?
        let count = 1;

        while(res.length < main.length) {
            res += sub;
            count++;
        }

        // Check if we have achieved a match
        if(res.substring(0, main.length) === main) return count;
    }

    return -1;
}


// /**
//  * My Method 2: 2 pointers
//  */
//  var repeatedStringMatch_2 = function(a, b) {
//     let i=0; // this will go thru b // the main string
//     let j=0; // this will go thru a // the sub string
//     let count=1; // the count of a in b

//     // let's find all the indices in 'a' which
//     // matches b[0]
//     // because those are the potential match start points
//     let matchedIndices = [];
//     for(let k=0; k<a.length; k++) {
//         if(a[k] === b[0]) matchedIndices.push(k);
//     }

//     // console.log('matchedIndices = ', matchedIndices);

//     // no start point found ?
//     if(matchedIndices.length === 0) return -1;

//     // go thru b
//     let mi = 0; // track matchedIndices
//     j = matchedIndices[mi];
//     while(i < b.length) {
//         // match?
//         if(b[i] === a[j]) {
//             // console.log('match found, i=', i, ', j =', j)
//             // if this is the last char of b, BINGO
//             if(i === (b.length-1)) return count;

//             i++;
//             j++;
//             // j overflowed?
//             // start a new "a"
//             if(j === a.length) {
//                 j=0;
//                 count++;
//                 // console.log('increased count to = ', count);
//             }
//         }
//         // mismatch? :(
//         else {
//             // console.log('mismatch found, i=', i, ', j =', j)
//             // mismacthing on the last char 'a'?
//             // means it's a deal breaker
//             // if(j === (a.length-1)) return -1;

//             // start matching i from beginning of 'a'
//             i = 0;
//             // still some mi left?
//             // if yes, then jump to the next probable start point
//             mi++;
//             if(mi >= matchedIndices.length) return -1;
//             j = matchedIndices[mi];
//             count = 1; // since we are still starting over from the 1st substring
//         }
//     }

//     // should never reach here
//     // console.log('reached end...')
//     return -1;
//  }

// /**
//  * My Method 1: Brute Force. 
//  * Keep appending string a and check if it "includes" the string b
//  */
// var repeatedStringMatch_1 = function(a, b) {
//     let count = 0;
//     let r = '';  // keep appending a

//     // a = 6 char
//     // b = 4 char in such a way, we need b + b + b
//     // last char of 1st b, +b, +1st char of last b
//     while(r.length <= (a.length +  2* b.length)) {
//         r += a;
//         count++;
//         if(r.includes(b)) return count;
//     }

//     return -1;
// };