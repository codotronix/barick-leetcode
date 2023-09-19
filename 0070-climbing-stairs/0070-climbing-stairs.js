/**
 * @param {number} n
 * @return {number}
 */
 /**
    My Solution 1: DP
    Time: 47 ms (76.78%), Space: 41.4 MB (86.46%)
  */
var climbStairs = function(n, mem={}) {
    if(n==2) return 2
    if(n==1) return 1
    if(n<=0) return 0
    
    if(!(n in mem)) mem[n] = climbStairs(n-1, mem) + climbStairs(n-2, mem)

    return mem[n]
};
