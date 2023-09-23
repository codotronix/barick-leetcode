/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n, mem={0:0, 1:1, 2:1}) {
    if(!(n in mem)) {
        mem[n] = tribonacci(n-1, mem) + tribonacci(n-2, mem) + tribonacci(n-3, mem)
    }
    return mem[n]
};