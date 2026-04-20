
var MyQueue = function() {
    // we are instructed to use 2 stacks
    // so we will use 2 JS arrays with only push() and pop() methods
    this.mainS = [] // main stack
    this.auxS = []  // helper stack
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // copy everything from mainStack to helperStack
    while(this.mainS.length) {
        this.auxS.push(this.mainS.pop())
    }

    // put this new el 
    this.mainS.push(x)

    // copy everything back
    while(this.auxS.length) {
        this.mainS.push(this.auxS.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.mainS.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainS.at(-1)
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainS.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */