require 'pry'

def rotate(nums, k)
  k.times do
      moved = nums.pop

     nums.unshift(moved)
  end
  nums
end

arr = [-1,-100,3,99]
key = 2
p rotate(arr, key)
