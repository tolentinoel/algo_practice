require 'pry'

def palindrome(str)
  arr = str.chars
  new_arr = []
  arr.length.times {new_arr << arr.pop}
  if new_arr.join === str
    true
  else
    false
  end
end

puts palindrome("racecar")
puts palindrome("hello")