/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        // create our own async function
        // which will reject after t ms
        const fn2 = async () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject("Time Limit Exceeded")
                }, t)
            })
        }

        // Now race between between fn and fn2
        return Promise.race([fn.call(null, ...args), fn2.call()])
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */