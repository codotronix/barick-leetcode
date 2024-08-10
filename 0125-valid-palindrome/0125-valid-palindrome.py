class Solution:
    def isPalindrome(self, s: str) -> bool:
        # we can have 2 pointers coming in from both ends
        left = 0
        right = len(s) - 1

        while left < right:

            # move left pointer to a alphanumeric
            while left < len(s) and not s[left].isalnum():
                left += 1
            
            # do the same for the right pointer
            while right >= 0 and not s[right].isalnum():
                right -= 1

            # both the while loop can make the pointer cross
            if left >= right:
                break

            # if they don't match,NOT PLAINDROME
            if s[left].lower() != s[right].lower():
                return False
            else:
                left += 1
                right -= 1

        return True