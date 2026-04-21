/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let st = [];
    const ops = {
        '+': (a, b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => Math.trunc(a/b)
    };
    for(let t of tokens) {
        // if t is an operand
        if(ops[t]) {
            const b = st.pop();
            const a = st.pop();
            st.push(ops[t](a,b))
        }
        // else a number
        else st.push(Number(t));
    }

    return st.pop();
};