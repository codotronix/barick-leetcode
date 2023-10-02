/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0
    let i=0,        // will hold the lowest found so far
        j=1,        // the scanning index   
        maxProfit=0
    while(j<prices.length) {
        let profit = prices[j] - prices[i]          // possible profit at this step
        if(profit > maxProfit) maxProfit = profit   // update the new MaxProfit
        else if(prices[j] < prices[i]) i=j          // found a new minimum

        ++j     // j will keep scanning
    }

    return maxProfit
};