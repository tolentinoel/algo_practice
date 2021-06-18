function twoSum(nums, target){
    result = []
      for (let i = 0; i < nums.length ; i++){
          let num = nums[i]
          let item = target - num
        if (nums.includes(item) && nums.indexOf(item) != i){
            result.push(nums.indexOf(num), nums.indexOf(item, i))
            return result
        }
    }
    i += 1
}

nums = [2,7,11,15]
target = 9
nums = [3,2,4]
target = 6
nums = [3,3]
target = 6
console.log(twoSum(nums,target))