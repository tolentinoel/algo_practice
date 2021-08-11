require 'pry'

def time?(string)
  old_arr = string.split(':')
  arr = old_arr.map{|num| num.to_i}

  hour = ("00".."23").to_a
  min = ("00".."59").to_a

  if hour.include?(arr[0]) && min.include(arr[1])
    return true
  else
    return false
  end
  arr[0] < 24 && arr[1] < 60 ? true : false
end
p time?("2:76")