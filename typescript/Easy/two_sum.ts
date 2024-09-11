// * Create class
class Solution {
    // ? Create two_sum method
  two_sum(nums: number[], target: number) {
    // Loop indexes to get every element of the list
    for (let i = 0; i < nums.length; i++) {
        // Loop again but to get a next element of the list
      for (let j = i + 1; j < nums.length; j++) {
        // Check --> target = nums[i] + nums[j]
        if (nums[j] === target - nums[i]) {
            // return right answer as list which includes indexes
          return [i, j];
        }
      }
    }
    // if no answer, just return empty list
    return [];
  }
}

/* 
Now, We can test our solution model
*/
const nums: number[] = [1, 22, -4, 6, 9, 11, 5, 4];
const target: number = 23;

const solution = new Solution();
const answer = solution.two_sum(nums, target);
console.log(answer);

// =========== Saidkdodirov Tolibjon ==============