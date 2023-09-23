/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, mem={}) {
    if(n===0) return 0
    if(n===1) return 1

    if(!(n in mem)) {
        mem[n] = fib(n-1) + fib(n-2)
    }

    return mem[n]
};