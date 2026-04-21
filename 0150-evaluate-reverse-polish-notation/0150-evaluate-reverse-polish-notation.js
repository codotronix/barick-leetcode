/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let st = [];
    let op = ['+', '-', '*', '/'];
    for(let t of tokens) {
        // if t is an operand
        if(op.includes(t)) {
            const b = st.pop();
            const a = st.pop();
            // console.log(`${a} ${t} ${b}`);
            let res = 0;
            if(t === '+') res = a+b;
            else if(t === '-') res = a-b;
            else if(t === '*') res = a*b;
            else res = Math.trunc(a / b); // Math.floor WILL NOT WORK here because Math.floor(-0.3) is -1 and not 0

            st.push(res)
        }
        // else a number
        else st.push(Number(t));
    }

    return st.pop();
};