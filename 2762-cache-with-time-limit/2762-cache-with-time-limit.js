var TimeLimitedCache = function() {
    this.values = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let r = false
    // if this key exists
    if(key in this.values) {
        // clear the prev timeout
        r = true
        clearTimeout(this.values[key].tref)
    }
    this.values[key] = {}
    this.values[key].value = value
    this.values[key].tref = setTimeout(() => {
        // delete this key
        delete this.values[key]
    }, duration)

    return r
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(key in this.values) return this.values[key].value
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.values).length
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */