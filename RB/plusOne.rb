require 'pry'



def plusOne(digits)
 
  num = digits.join('').to_i + 1
  num.to_s.split('').map{|e| e.to_i}

end

arr = [9, 9]
arr2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
p plusOne(arr)
