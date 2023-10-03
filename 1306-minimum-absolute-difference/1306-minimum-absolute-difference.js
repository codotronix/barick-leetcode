/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // sort it
    arr = arr.sort((a,b) => a-b)
    let minDiff = arr[1]-arr[0]

    // let's find the min diff O(n)
    for(let i=1; i<arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i]-arr[i-1])
    }

    // Let's find the minDiff pairs
    let mdp = []
    for(let i=1; i<arr.length; i++) {
        if(arr[i] - arr[i-1] === minDiff) mdp.push([arr[i-1], arr[i]])
    }

    return mdp
};