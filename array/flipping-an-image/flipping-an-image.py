class Solution(object):
    def flipAndInvertImage(self, image):
        """
        :type image: List[List[int]]
        :rtype: List[List[int]]
        """
        for i in range(len(image)):
            line = image[i]
            for j in range((len(line) + 1) // 2):
                k = len(line) - 1 - j
                t = line[j]
                line[j] = line[k]
                line[k] = t

                if line[j] == 0:
                    line[j] = 1
                else:
                    line[j] = 0
                
                if j != k:
                    if line[k] == 0:
                        line[k] = 1
                    else:
                        line[k] = 0
                    
        return image