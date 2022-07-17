// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3270/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  nums.sort((a, b) => a - b);

  // let missedNumbers = [];
  console.log(nums);
  let count = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    if (!nums.includes(idx + 1)) {
      nums[count] = idx + 1;
      count++;
    }
  }

  nums.splice(count, nums.length);
  return nums;
};

findDisappearedNumbers([5, 4, 6, 7, 9, 3, 10, 9, 5, 6]);
