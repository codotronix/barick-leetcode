/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let tRef;
    return function(...args) {
        clearTimeout(tRef)
        tRef = setTimeout(() => {
            fn(...args)
            clearTimeout(tRef)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */