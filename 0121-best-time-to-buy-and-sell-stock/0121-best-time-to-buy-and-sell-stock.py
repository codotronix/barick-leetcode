class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i=0     # point to the lower left
        j=1     # point to the higher on right of i
        mx=0    # max profit

        while j < len(prices):
            # if this price is more than price at i,
            # then, see if this is the new max
            if prices[j] > prices[i]:
                mx = max(mx, prices[j] - prices[i])
            # else we have found a new low (lower than current i)
            # point i to this new low
            else:
                i = j
            # keep forwarding j
            j += 1
        
        return mx
