/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/
function twoSum(nums,target){
    for (i=0;i<=nums.length;i++){
      for(j=0;j<=nums.length;j++){
        if ((nums[i]+nums[j])==target && i !==j){
          return [i,j];
          break;
        }
      }
    }
  }
  nums=[2,7,11,15]
  target = 9
  console.log (twoSum(nums,target))
  nums=[3,2,4]
  target = 6
  console.log (twoSum(nums,target))