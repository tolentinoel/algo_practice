require 'pry'

def reverse_string(s)
    nums = s.length
    nums.times do
      moved = nums.pop()
      nums.unshift(moved)
    end
    nums
  end
  
  arr1 = ["h","e","l","l","o"]
  arr2 = ["H","a","n","n","a","h"]
  
  p reverse_string(arr1)