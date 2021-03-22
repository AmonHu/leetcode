class Solution:
    def decode(self, encoded, first: int):
        arr = [first]
        i = 0
        for c in encoded:
            arr.append(c ^ arr[i])
            i = i + 1

        return arr
        