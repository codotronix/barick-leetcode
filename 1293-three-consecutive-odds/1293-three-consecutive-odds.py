class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        i = 0 # track the left ODD index in current sequence
        iODD = False
        n = 3 # n consecutive ODDs
        for j in range(len(arr)):
            # if j is an ODD
            if arr[j] % 2 != 0:
                # if i is not sitting on an ODD, bring it here
                if not iODD:
                    i = j
                    iODD = True
                else:
                    # i is holding a ODD
                    if (j - i) == (n-1):
                        return True
            # else, reset the iODD to current j, 
            # to break the consecuting continuity
            else:
                i = j
                iODD = False

        return False
