/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i=0 // let's start from 1
    let l=s.length
    let t = 0;

    while(i<l) {
        const c = s[i]  // this char
        const n = (i+1) < l ? s[i+1] : 'Z' // next char, Z=invalid-roman
        const cn =  c + n 

        // let's start with number who doesn't modify the next digit
        if (c === 'M') t += 1000;
        else if (c === 'D') t += 500;
        else if (c === 'L') t += 50;
        else if (c === 'V') t += 5;

        // let's see the modifier combos
        // double increase i
        else if (cn === 'IV') { t += 4; ++i; }
        else if (cn === 'IX') { t += 9; ++i; }
        
        else if (cn === 'XL') { t += 40; ++i; }
        else if (cn === 'XC') { t += 90; ++i; }
        
        else if (cn === 'CD') { t += 400; ++i; }
        else if (cn === 'CM') { t += 900; ++i; }

        // left are modifiers, when not modifying
        else if (c === 'I') t += 1;
        else if (c === 'X') t += 10;
        else if (c === 'C') t += 100;

        // increase i
        ++i;
    }

    return t;
};