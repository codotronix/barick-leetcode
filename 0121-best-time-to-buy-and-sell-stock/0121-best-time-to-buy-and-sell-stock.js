/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0;
    let p1 = prices[0];
    let i=1;
    let profit = 0;

    while(i < prices.length) {
        // more profit found?
        profit = Math.max(profit, prices[i] - p1);

        // less price found?
        if(prices[i] < p1) p1 = prices[i];

        // move to next
        ++i;
    }

    return profit;
};