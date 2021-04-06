require 'pry'

# def to_camel_case(str)

#   if str.length === 0
#     return str
#   elsif arr = str.split(/[-,_]/)
#     fw = arr[0]
#     if fw === fw.capitalize
#     arr.each do |word|
#       word.capitalize
#     end
#     arr.join
#   else arr = str.split(/[-,_]/)
#     arr[1..arr.length].each do |wrd|
#         wrd.capitalize!
#     end
#     return arr.join
#   end
# end
# end

# puts to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"
# puts to_camel_case("The_Stealth_Warrior")




# def palindrome(str)
#   arr = str.chars
#   new_arr = []
#   arr.length.times {new_arr << arr.pop}
#   if new_arr.join === str
#     true
#   else
#     false
#   end
# end

# puts palindrome("racecar")
# puts palindrome("hello")


# def palindrome(str)
#   arr = str.chars
#   arr.sort! {|first,last| last <=> first}
#   arr.join == str ? true : false
# end

# def time?(string)
#   old_arr = string.split(':')
#   arr = old_arr.map{|num| num.to_i}

  # hour = ("00".."23").to_a
  # min = ("00".."59").to_a

  # if hour.include?(arr[0]) && min.include(arr[1])
  #   return true
  # else
  #   return false
  # end
#   arr[0] < 24 && arr[1] < 60 ? true : false
# end
# p time?("2:76")


# def missingNum(num)
#   allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#   p (allNums - num)[0]
# end
# p missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])

# def move_zeroes(nums)
#   zero_count = nums.count(0)
#   nums.delete(0)

#   zero_count.times do
#     nums << 0
#   end
#   nums
# end
# arr = [0,1,0,3,12]
# arr2 = [0,0,1]
# p moveZeroes(arr)

# ______________________________________________________________
# def single_number(nums)

#   for num in nums do
#     result = nums.count(num)
#     if result === 1
#        return num
#     end
#   end

# end

# arr= [4,1,2,1,2]
# arr2 = [2,2,1]
# arr3 = [1]
# p single_number(arr3)
# ____________________________________________________________

# def rotate(nums, k)
#   k.times do
#       moved = nums.pop

#      nums.unshift(moved)
#   end
#   nums
# end

# arr = [-1,-100,3,99]
# key = 2
# p rotate(arr, key)

# ________________________________________________________________

# def contains_duplicate(nums)
# # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#   # result = nums.detect{ |e| nums.count(e) > 1 }
#   # result ? true : false
# # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#   # if nums.length <= 1
#   #   return false
#   # else
#   #   nums.length.times do
#   #     for num in nums do
#   #       nums.count(num) > 1 ? true : false
#   #     end
#   #   end
#   # end
# # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#     nums.uniq.length < nums.length ? true : false

# end

# p contains_duplicate([3,1])
# p contains_duplicate([2,14,18,22,22])

# ________________________________________________________________
# def plusOne(digits)
 
#   num = digits.join('').to_i + 1
#   num.to_s.split('').map{|e| e.to_i}

# end

# arr = [9, 9]
# arr2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
# p plusOne(arr)

# _________________________________________________________________

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