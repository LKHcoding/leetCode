// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // return nums
  //   .map((item) => {
  //     return item * item;
  //   })
  //   .sort((a, b) => a - b);

  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  let resultArr = new Array(rightIdx + 1);

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    let leftCursor = nums[leftIdx] ** 2;
    let rightCursor = nums[rightIdx] ** 2;

    if (leftCursor >= rightCursor) {
      resultArr[idx] = leftCursor;
      leftIdx++;
    } else {
      resultArr[idx] = rightCursor;
      rightIdx--;
    }
  }
  return resultArr;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));

// 아래는 속도 빠른 로직
// var sortedSquares = function (nums) {
//   var left = 0;
//   var right = nums.length - 1;
//   var arr = new Array(right + 1);
//   for (let i = nums.length - 1; i >= 0; i--) {
//     var leftCursor = nums[left] ** 2;
//     var rightCursor = nums[right] ** 2;
//     if (leftCursor >= rightCursor) {
//       arr[i] = leftCursor;
//       left++;
//     } else {
//       arr[i] = rightCursor;
//       right--;
//     }
//   }
//   return arr;
// };
