/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let c = 0
    for(let i=0; i<startTime.length; i++) {
        if(queryTime >= startTime[i] && queryTime <= endTime[i]) c++
    }
    return c
};