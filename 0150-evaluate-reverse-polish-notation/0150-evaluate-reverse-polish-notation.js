/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // if only 1 num
    if(tokens.length === 1) return parseInt(tokens[0])

    const stack = []
    let r
    for(const t of tokens) {
        // if a number, push it in stack
        if(!isNaN(t)) stack.push(parseInt(t))

        // else an operator
        else {
            const b = stack.pop()
            const a = stack.pop()
        
            switch(t) {
                case '+': {
                    r = a+b
                    break
                }
                case '-': {
                    r = a-b
                    break
                }
                case '*': {
                    r = a*b
                    break
                }
                case '/': {
                    r = a/b
                    // The division between two integers always truncates toward zero.
                    r = r < 0 ? Math.ceil(r) : Math.floor(r)
                    break
                }
            }
            // push the result back in stack
            stack.push(r)
            console.log(stack)
        }
    }

    return r
};