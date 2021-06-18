function findDisappearedNumbers(nums){
    a = []
    num = 1
    while (num <= nums.length && nums.length !== 0){
        if (nums.includes(num)){
            num += 1
        } else {
            a.push(num)
            num += 1
        }
    }
  return a
}
console.log(findDisappearedNumbers([1,1]))