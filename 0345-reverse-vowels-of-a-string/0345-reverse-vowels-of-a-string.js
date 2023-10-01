/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i=0, j=s.length-1, v = {
        'a':1, 'e':1, 'i':1, 'o':1, 'u':1,
        'A':1, 'E':1, 'I':1, 'O':1, 'U':1
    }
    let sa = s.split('')
    while(i<j) {
        // if i not pointitng to vowel, increase it
        if(!(sa[i] in v)) ++i
        // same for j
        else if(!(sa[j] in v)) --j
        // else, both are vowels
        else {
            // swap
            [ sa[i], sa[j] ] = [ sa[j], sa[i] ]
            i++
            --j
        }
    }

    return sa.join('')
};