/**
 * @param {number[]} prices
 * @return {number}
 */
// Try-2
var maxProfit = function(prices) {
    if(prices.length===1) return 0

    // whenever the mountain is rising, keep on adding the profits
    // last time I was adding the lowest point and the highest
    // which is same as just keeping on adding the increments 
    // and ultimately we will reach the peak
    let profit = 0
    for(let i=1; i<prices.length; ++i) {
        // prices increasing? keep on adding thep rofits
        if(prices[i] > prices[i-1]) profit += prices[i] - prices[i-1]
    }

    return profit
}


// Try-1: This same concept can be coded simply, see Try-2 above

// var maxProfit = function(prices) {
//     // looks like it has a mountain range like structure
//     // so, at the bottom of hill we will buy
//     // and at the peak of the hill we will sell

//     // only one? no profit
//     if(prices.length===1) return 0

//     let dir, min, max, profit=0    // direction and min 
//     if(prices[0] < prices[1]) {
//         dir = 'inc'
//         min = 0
//         max=0
//     }
//     else {
//         dir = 'dec'
//         min = 1
//         max=1
//     }

//     for(let i=1; i<prices.length; i++) {
//         // direction changed from dec to inc
//         // prev index was a minima, buying point
//         if(prices[i] > prices[i-1] && dir === 'dec') {
//             min=i-1
//             dir='inc'
//         }
//         // else if, it is changing from inc to dec
//         // prev point was a maxima, selling point
//         if(prices[i] < prices[i-1] && dir === 'inc') {
//             max=i-1
//             dir='dec'
//             // if there was a minima before
//             if(min !== -1) {
//                 profit += prices[max] - prices[min]
//                 min = -1
//             }
//         }
//     }

//     // if it was increasing at the end
//     // then sell it on the last day
//     if(min !== -1) {
//         profit += prices[prices.length-1] - prices[min]
//     }

//     return Math.max(profit, 0)
// };