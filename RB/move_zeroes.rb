def move_zeroes(nums)
  zero_count = nums.count(0)
  nums.delete(0)

  zero_count.times do
    nums << 0
  end
  nums
end
arr = [0,1,0,3,12]
arr2 = [0,0,1]
p moveZeroes(arr)