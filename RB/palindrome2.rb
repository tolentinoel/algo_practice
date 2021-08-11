require 'pry'


def palindrome(str)
  arr = str.chars
  arr.sort! {|first,last| last <=> first}
  arr.join == str ? true : false
end