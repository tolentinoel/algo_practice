def single_number(nums)

  for num in nums do
    result = nums.count(num)
    if result === 1
       return num
    end
  end

end

arr= [4,1,2,1,2]
arr2 = [2,2,1]
arr3 = [1]
p single_number(arr3)