require 'pry'

def to_camel_case(str)

  if str.length === 0
    return str
  elsif arr = str.split(/[-,_]/)
    fw = arr[0]
    if fw === fw.capitalize
    arr.each do |word|
      word.capitalize
    end
    arr.join
  else arr = str.split(/[-,_]/)
    arr[1..arr.length].each do |wrd|
        wrd.capitalize!
    end
    return arr.join
  end
end
end

puts to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"
puts to_camel_case("The_Stealth_Warrior")