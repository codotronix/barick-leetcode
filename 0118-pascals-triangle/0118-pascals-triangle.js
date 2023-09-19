/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let cummulativeArrays = {
        1: [[1]],
        2: [[1], [1,1]]
    }

    // let's build 3rd row onwards
    for(let r=3; r<=numRows; ++r) {
        // let's get the prev line array
        prevArrays = cummulativeArrays[r-1]
        prevLine = prevArrays[prevArrays.length-1]

        // now we know the total number of element on each line
        // is equal to line_number
        let thisLine = []
        for(let c=1; c<=r; ++c) {
            // the terminal elements is always 1
            if(c===1 || c===r) thisLine.push(1)
            else {
                let thisIndex = c-1 // index=column - 1
                thisLine.push(prevLine[thisIndex-1] + prevLine[thisIndex])
            }
        }

        // Add this line array to our cummulativeArrays
        cummulativeArrays[r] = [...prevArrays, thisLine]
    }

    return cummulativeArrays[numRows]
};