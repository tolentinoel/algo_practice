require 'pry'

def missingNum(num)
  allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  p (allNums - num)[0]
end
p missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])
