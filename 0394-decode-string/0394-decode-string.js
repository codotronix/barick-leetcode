/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // base case, string with no encoding
    if(!s.includes('[')) return s;

    let mul = 0;  // the multiplier
    let res = ''; // the result

    // using a while loop to go over the char
    // because we need to use an inner index also
    // which should increase i
    let i = 0;
    while(i < s.length) {
        // if it's a number multiplier
        // and multiplier can be a multidigit number
        if(!isNaN(s[i])) {
            mul = 10 * mul + Number(s[i]);
        }
        // else if a starting [
        else if (s[i] === '[') {
            let open = 1;   // there can be nested '['s
            let j = i+1;    // start from the next index
            while(j < s.length) {
                // nested opens?
                if(s[j] === '[') open++;
                else if(s[j] === ']') open--;
                
                // all closed?
                if(open === 0) {
                    // decode it
                    let ss = s.substring(i+1, j);
                    let decoded = decodeString(ss);
                    res += multiplyString(decoded, mul);

                    // clear everything for the next segment
                    mul = 0;
                    i = j;
                    break;
                }

                // move on
                j++;
            }
        }
        // multiplier not reached yet?
        // just take the text as they are
        else if(!mul) {
            res += s[i];
        }

        // move next
        i++;
    }

    return res;
};

function multiplyString(s, n) {
    let res = '';
    for(let i=0; i < n; i++) res += s;
    return res;
}

