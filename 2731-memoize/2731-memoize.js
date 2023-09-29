/**
 * @param {Function} fn
 */
function memoize(fn) {
    let f = {}
    return function(...args) {
        let k = JSON.stringify(args)
        if(!(k in f)) f[k] = fn(...args)
        return f[k]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */