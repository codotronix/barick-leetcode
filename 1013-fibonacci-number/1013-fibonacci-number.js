/**
 * @param {number} n
 * @return {number}
 */
 // My Solution Using Recursion
var fib = function(n, mem={}) {
    if(n===0) return 0
    if(n===1) return 1

    if(!(n in mem)) {
        mem[n] = fib(n-1, mem) + fib(n-2, mem)
    }

    return mem[n]
};

///////////////////////////////////////////////////////////

// My Solution using Loops
// var fib = function(n) {
//     let mem = { 0: 0, 1: 1 }

//     // let's build it progressively, 
//     // till we reach n
//     for(let i=2; i<=n; ++i) {
//         mem[i] = mem[i-1] + mem[i-2] 
//     }

//     return mem[n]
// }