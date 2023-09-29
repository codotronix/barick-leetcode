class EventEmitter {
    constructor () {
        this.cbs = {}
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
      	if(!(eventName in this.cbs)) { 
            this.cbs[eventName] = []
        }
        this.cbs[eventName].push(callback)

		return {
			unsubscribe: () => {
                // put all other callbacks back except this one
				this.cbs[eventName] = this.cbs[eventName].filter(cb => cb !== callback)
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        let res = []
        if(this.cbs[eventName]) {
            for(let fn of this.cbs[eventName]) {
                res.push(fn(...args))
            }
        }
		
        return res
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */