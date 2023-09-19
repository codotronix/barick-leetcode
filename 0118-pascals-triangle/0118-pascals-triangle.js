/**
 * @param {number} numRows
 * @return {number[][]}
 */
 /**
    Simple Array Based Brute Force Solution 
    (though I know the binomial formula, will try next....)
    
    Runtime 58ms Beats 27.99%of users with JavaScript
    Memory 43.16MB Beats 10.78%of users with JavaScript
  */
// var generate = function(numRows) {
//     let cummulativeArrays = {
//         1: [[1]],
//         2: [[1], [1,1]]
//     }

//     // let's build 3rd row onwards
//     for(let r=3; r<=numRows; ++r) {
//         // let's get the prev line array
//         prevArrays = cummulativeArrays[r-1]
//         prevLine = prevArrays[prevArrays.length-1]

//         // now we know the total number of element on each line
//         // is equal to line_number
//         let thisLine = []
//         for(let c=1; c<=r; ++c) {
//             // the terminal elements is always 1
//             if(c===1 || c===r) thisLine.push(1)
//             else {
//                 let thisIndex = c-1 // index=column - 1
//                 thisLine.push(prevLine[thisIndex-1] + prevLine[thisIndex])
//             }
//         }

//         // Add this line array to our cummulativeArrays
//         cummulativeArrays[r] = [...prevArrays, thisLine]
//     }
//
//     return cummulativeArrays[numRows]
// };

/////////////////////////////////////////////////////////////////////////

/**
    My Solution using Binomial Formula of nCr
 */
factMem={}
var generate = function(numRows) {
    let res = []
    for(let n=0; n<numRows; ++n) {
        let thisLine = []
        for(let r=0; r<=n; ++r) {
            thisLine.push(nCr(n,r))
        }
        res.push(thisLine)
    }
    return res
}

function nCr(n,r) {
    return (fact(n)) / (fact(r) * fact(n-r))
}

function fact(n) {
    if(!(n in factMem)) {
        let f = 1
        for(let i=1; i<=n; ++i) f *= i
        factMem[n] = f
    }
    return factMem[n]
}




