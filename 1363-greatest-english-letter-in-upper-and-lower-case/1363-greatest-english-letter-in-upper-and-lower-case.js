/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let cap = {}, small = {}, r = ' '
    for(let c of s) {
        // is this cap?
        if(c === c.toUpperCase()) {
            // small already found?
            if(c.toLowerCase() in small) {
                // if(!r) r = c
                // else 
                if(c.charCodeAt(0) > r.charCodeAt(0)) r = c
            }
            else {
                cap[c] = true
            }
        }
        // else smaller case
        else {
            // cap already found

            if(c.toUpperCase() in cap) {
                // if(!r) r = c.toUpperCase()
                // else 
                if(c.toUpperCase().charCodeAt(0) > r.charCodeAt(0)) r = c.toUpperCase()
            }
            else {
                small[c] = true
            }
        }
    }
    return r.trim()
};