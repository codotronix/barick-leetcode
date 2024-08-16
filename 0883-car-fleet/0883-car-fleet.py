class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # let's zip the position and speed together
        # [ (p1, s1), (p2, s2), ... ]
        cars = list(zip(position, speed))

        # Since there are only 1 lane,
        # let's sort them based on their current position
        # by dafault it will sort on 1st param i.e. position
        cars.sort()


        stack = []
        # On the distance line we are moving from right to left
        # i.e. from the closest to the target 
        # to furthest to the target
        for p,s in cars:
            if stack == []:
                stack.append((p,s))
            else:
                t = (target-p) / s  # time this car will take to reach target
                while stack:
                    # last item in the stack
                    p1, s1 = stack[-1]
                    t1 = (target - p1) / s1

                    # if time is less or equal to this car
                    # make it part of this fleet
                    if t1 <= t:
                        # remove it from stack
                        # and move to the next item on the stack
                        stack.pop()
                        s = min(s, s1)      # speed will be min of the two
                    else:
                        break

                # put this fleet back to stack  
                stack.append((p, s))

        
        return len(stack)




        