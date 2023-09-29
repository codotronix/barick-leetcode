/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(fns) {
	return function(x) {
        for(let i=fns.length-1; i>=0; --i) x = fns[i](x)
        return x 
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */