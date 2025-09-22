class Solution:
    def maximum69Number (self, num: int) -> int:
        s = str(num)
        r = ''
        c = 0
        # change ONLY the 1st 6 to 9
        for a in s:
            if c == 0 and a == '6':
                r += '9'
                c = 1
            else:
                r += a
        
        return int(r)