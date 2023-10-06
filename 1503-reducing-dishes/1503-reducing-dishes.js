/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    let mx = Math.max(...satisfaction)

    // let's sort it
    satisfaction = satisfaction.sort((a,b) => a-b)

    // divide it into positives and negatives
    let positives = satisfaction.filter(n => n>=0)
    let negatives = satisfaction.filter(n => n<0)

    // let's cacl the coeff for the positivies only
    let maxSum=0
    let elementsSum=0   // normal sum of the elements
    for(let i=0; i<positives.length; i++) {
        maxSum += positives[i] * (i+1)
        elementsSum += positives[i]
    }

    // Now for each push of a negative number from left
    // the entire array will be right shifted
    // i.e. same as adding another sum to the array, as all the numbers
    // will be multiplied by 1 higher index
    let i = negatives.length-1
    while(i>=0) {
        // if taking this negative number increases the maxSum
        if( negatives[i] + maxSum + elementsSum > maxSum  ) {
            maxSum += negatives[i] + elementsSum     
            elementsSum += negatives[i] // the -ve + right-shift of all
        }
        --i
    }

    return maxSum
};