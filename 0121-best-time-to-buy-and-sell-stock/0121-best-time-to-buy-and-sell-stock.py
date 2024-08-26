class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i=0
        j=1
        mx=0

        while j < len(prices):
            if prices[j] > prices[i]:
                mx = max(mx, prices[j] - prices[i])
            else:
                i = j
            j += 1
        
        return mx
