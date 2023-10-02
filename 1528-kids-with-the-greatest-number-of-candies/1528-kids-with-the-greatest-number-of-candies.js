/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let mx = Math.max(...candies)
    return candies.map(c => c + extraCandies >= mx)
};