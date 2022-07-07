// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const numsSet = new Set();

  for (let i = nums?.length - 1; i >= 0; i--) {
    let num = nums[i];
    if (numsSet.has(num)) {
      nums.splice(i, 1);
    } else {
      numsSet.add(num);
    }
  }
  return nums?.length;
};
