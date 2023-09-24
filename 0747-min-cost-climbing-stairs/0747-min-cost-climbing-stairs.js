/**
 * @param {number[]} costs
 * @return {number}
 */
 // init currentindex=-1 because start index can be 0 or 1
var minCostClimbingStairs = function(costs, currentindex=-1, mem={}) {
    // end steps
    // already crossed the top?
    let i = currentindex
    if (i >= costs.length) return 0
    // Can reach top in another step?
    if(i === costs.length-1 || i === costs.length-2) {
        return costs[i]
    }

    // do we already know cost from this index?
    if(i in mem) return mem[i]

    // If yet to start, starting point can be 0 OR 1
    if(i === -1) {
        // case 1: when starts at zero, SET currentindex=0
        i=0
        let cost1 = costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )

        // case 2: when starts at 1, SET currentindex=1
        i=1
        let cost2 = costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )

        // return the min of 2 starting indexes
        mem[i] = Math.min(cost1, cost2)
    }
    else {
        // regular path
        mem[i] = costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )
    }

    return mem[i]
};

// helper function, to reduce writing
// It will increase the STACK overhead, thus increasing RUNTIME
// function getMinCost(costs, i, mem) {
//     return costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )
// }
