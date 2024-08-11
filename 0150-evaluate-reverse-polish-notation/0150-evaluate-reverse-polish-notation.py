class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        if len(tokens) == 1:
            return int(tokens[0])

        stack = []
        r = 0
        for t in tokens:
            # print(t)
            # print(stack)
            # if t is a number,
            # push it in the stack
            if t not in ['+', '-', '*', '/']:
                stack.append(int(t))

            # else, it is an operator
            # pop 2 values and apply the operator
            else:
                b = stack.pop()
                a = stack.pop()

                # switch is 'match' in python
                # and we don't need a 'break'
                match t:
                    case '+':
                        r = a + b
                    case '-':
                        r = a - b
                    case "*":
                        r = a * b
                    case '/':
                        r = a / b
                        # The division between two integers always truncates toward zero.
                        r = math.ceil(r) if r < 0 else math.floor(r)
                
                # put this back in stack
                stack.append(r)

        # r should hold the answer,
        # also stack[-1]
        return r
