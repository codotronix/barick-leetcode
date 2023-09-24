/**
 * @param {number[]} costs
 * @return {number}
 */
 // init currentindex=-1 becaus ethe start index can be 0 or 1
var minCostClimbingStairs = function(costs, currentindex=-1, mem={}) {
    // end steps
    // already crossed the top?
    if (currentindex >= costs.length) return 0
    // Can reach top in another step?
    if(currentindex === costs.length-1 || currentindex === costs.length-2) {
        return costs[currentindex]
    }

    // we already know cost from this point?
    if(currentindex in mem) return mem[currentindex]

    // If starting point can be 0 OR 1
    if(currentindex === -1) {
        // case 1: when starts at zero, SET currentindex=0
        let i=0
        let cost1 = costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )

        // case 2: when starts at 1, SET currentindex=1
        i=1
        let cost2 = costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )

        // return the min of 2 starting indexes
        mem[currentindex] = Math.min(cost1, cost2)
    }
    else {
        // normal / regular path
        let i=currentindex
        mem[currentindex] = costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )
    }

    return mem[currentindex]
};

// helper function, to reduce writing
// function getMinCost(costs, i, mem) {
//     return costs[i] + Math.min( minCostClimbingStairs(costs, i+1, mem),  minCostClimbingStairs(costs, i+2, mem) )
// }