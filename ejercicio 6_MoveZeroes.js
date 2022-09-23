/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.*/
function moveZeroes(nums){
    let i=0;
    let j=0;
    while (j<nums.length){
      if(nums[i]===0){
        nums.splice(i,1);
        nums.push(0)
      }else i++
      j++;
    }
    return nums;
  }
  nums=[0,1,0,3,12]
  console.log(moveZeroes(nums))
  nums=[0]
  console.log(moveZeroes(nums))