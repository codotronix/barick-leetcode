/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 /**
    My Simple Array Base Solution
    Time: 53 ms (50.13%), Space: 41.7 MB (70.75%) 
  */
var getRow = function(rowIndex) {
    let rowsMap = {
        0: [1],
        1: [1,1]
    }

    // let's build 3rd row onwards
    for(let r=2; r<=rowIndex; ++r) {
        // let's get the prev line array
        let prevLine = rowsMap[r-1]

        // now we know the total number of element on each line
        // is equal to line_number
        let thisLine = []
        for(let c=0; c<=r; ++c) {
            // the terminal elements is always 1
            if(c===0 || c===r) thisLine.push(1)
            else {
                thisLine.push(prevLine[c-1] + prevLine[c])
            }
        }

        // Add this line array to our cummulativeArrays
        rowsMap[r] = thisLine
    }

    return rowsMap[rowIndex]
};
