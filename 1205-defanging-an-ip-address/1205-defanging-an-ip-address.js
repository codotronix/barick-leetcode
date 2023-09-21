/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // one liner
    // return address.replaceAll('.', '[.]')

    // Custom
    let s = ''
    for(let a of address) {
        if(a === '.') s+='[.]'
        else s+=a
    }
    return s
};