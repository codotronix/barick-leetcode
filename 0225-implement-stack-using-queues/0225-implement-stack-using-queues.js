
var MyStack = function() {
    // since we have to use 2 queues, we will use
    // 2 arrays and use only push() and shift() methods
    // to simulate queue behaviours 
    this.mainQ = [];    // main queue
    this.helperQ = [];  // aux queue
 };

/** 
 * @param {number} x
 * @return {void}
 * 1 2
 * 2 1
 */
MyStack.prototype.push = function(x) {
    // copy everything from mainQ to auxQ
    while(this.mainQ.length) {
        this.helperQ.push(this.mainQ.shift())
    }

    // put this new element at the beginning of the mainQ
    this.mainQ.push(x)

    // copy everything back
    while(this.helperQ.length) {
        this.mainQ.push(this.helperQ.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.mainQ.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.mainQ[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.mainQ.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */