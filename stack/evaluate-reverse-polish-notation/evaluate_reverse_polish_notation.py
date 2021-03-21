class Solution:
    def evalRPN(self, tokens) -> int:
        stack = []
        for token in tokens:
            if token == '+':
                n1 = stack.pop()
                n2 = stack.pop()
                stack.append(n2 + n1)
            elif token == '-':
                n1 = stack.pop()
                n2 = stack.pop()
                stack.append(n2 - n1)
            elif token == '*':
                n1 = stack.pop()
                n2 = stack.pop()
                stack.append(n2 * n1)
            elif token == '/':
                n1 = stack.pop()
                n2 = stack.pop()
                if n2 // n1 < 0:
                    stack.append(-(abs(n2) // abs(n1)))
                else:
                    stack.append(n2 // n1)
            else:
                stack.append(int(token))
            
        return stack[0]


s = Solution()
print(s.evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))