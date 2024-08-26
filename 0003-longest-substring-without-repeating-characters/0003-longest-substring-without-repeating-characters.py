class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = {}   # { char1: index1, char2: index2 }
        lowestIndex = 0 # lowest non-repeat index
        maxL = 0

        # loop thru each chars
        for i in range(len(s)):
            c = s[i]        # current char
            # have we already seen it?
            # then end the sequence, 
            # see which index we last saw it,
            # from that index to this index is a non-dupe squence

            if c in seen and seen[c] >= lowestIndex:
                # record the max length
                maxL = max(maxL, i-lowestIndex)
                # reset the length
                # print(seen)
                lowestIndex = seen[c] + 1
            # put this char in seen
            seen[c] = i

        # Check if the longest non-repeating seq
        # Came at the end
        # print(seen)
        # print(lowestIndex)
        # print(len(s))
        maxL = max(maxL, len(s)-lowestIndex)

        return maxL
