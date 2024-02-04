/*
You are given an array nums consisting of positive integers.

You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

Return the number of distinct integers in the final array.

Example 1:
Input: nums = [1,13,10,12,31]
Output: 6
Explanation: 
- array with included reversed integers - [1,13,10,12,31,1,31,1,21,13].
- for the integer 10, after reversing it, it becomes 01 which is just 1.
- the number of distinct integers in this array is 6 ([1, 10, 12, 13, 21, 31]).






Example 2:
Input: nums = [2,2,2]
Output: 1
Explanation: 
- array with included reversed integers - [2,2,2,2,2,2].
- the number of distinct integers in this array is 1 (The number 2).

*/
let countDistinctIntegers = function (nums) {
let newArray = [];
newArray.push(nums)
  
for(let i = 0; i < nums.length; i++) {

  if(nums[i]>=10) {
    
  let n = nums[i].toString();
  let m = n.split("").reverse().join("").parseInt();
  // console.log(n)
  // console.log(m)

  } else {

    
  }
}
  console.log(newArray)
  
};

countDistinctIntegers([1,21,9,56,10,3])
