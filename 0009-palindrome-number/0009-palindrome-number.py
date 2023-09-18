class Solution:
    def isPalindrome(self, x: int) -> bool:
        # negative numbers are NOT palindrom, as given
        if x < 0:
            return False
        
        # let's break the number down into an array
        arr = []
        while x > 0:
            arr.append(x%10)
            x = x // 10
        return self.isArrayPalindrome(arr)


    def isArrayPalindrome(self, arr: list) -> bool:
        i = 0
        j = len(arr) - 1
        while i < j:
            if arr[i] != arr[j]:
                return False
            i += 1
            j -= 1
        return True

        
        