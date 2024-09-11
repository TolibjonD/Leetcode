class Solution:
    def two_sum(self, nums: list[int], target: int) -> list[int]:
        lastIndex = len(nums)
        for i in range(lastIndex):
            for j in range(i+1, lastIndex):
                if nums[j] == target - nums[i]:
                    return [i, j]
        return []
    
solution = Solution()
answer = solution.two_sum([-1,8,19,4,7,-5,3,9], 11)
print(answer)