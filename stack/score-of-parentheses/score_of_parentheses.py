class Solution(object):
    def scoreOfParentheses(self, S):
        stack = [0]

        for x in S:
            if x == '(':
                stack.append(0)
            else:
                peek = stack.pop()
                stack[-1] += max(2 * peek, 1)

        return stack.pop()
