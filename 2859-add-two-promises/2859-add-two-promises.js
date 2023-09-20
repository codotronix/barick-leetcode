/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
 // My Solution 1
 // Runtime: 71 ms
// var addTwoPromises = async function(promise1, promise2) {
//     const a = await promise1
//     const b = await promise2
//     return a+b
// };

// My Solution 2
// Runtime: 104 ms
var addTwoPromises = async function(promise1, promise2) {
    return new Promise((resolve) => {
        promise1.then(a => {
            promise2.then(b => {
                resolve(a+b)
            })
        })
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */