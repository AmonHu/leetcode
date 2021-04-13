class Solution:
    def countBits(self, num: int):
        bits = []
        if num == 0:
            bits = [0]
        else:
            bits = [0, 1]
        

        base = 2
        for i in range(2, num + 1):
            if i >= base * 2:
                base = base * 2

            if i == base:
                bits.append(1)
            else:
                bits.append(bits[i - base] + 1)

        return bits

Solution().countBits(2)