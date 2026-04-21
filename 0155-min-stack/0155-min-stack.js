// to create a mean stack, we will make each value a composite one,
// i.e. [val1, minSoFar1], [val2, minSoFar2] and so on
var MinStack = function() {
    this.st = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 1st el? then it's also MinSoFar
    if(!this.st.length) this.st.push([val, val]);
    else {
        let lastVal = this.st.at(-1);
        this.st.push([val, Math.min(val, lastVal[1])]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.st.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st.at(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.st.at(-1)[1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */