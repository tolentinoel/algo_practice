def contains_duplicate(nums)
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    result = nums.detect{ |e| nums.count(e) > 1 }
    result ? true : false
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    # if nums.length <= 1
    #   return false
    # else
    #   nums.length.times do
    #     for num in nums do
    #       nums.count(num) > 1 ? true : false
    #     end
    #   end
    # end
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    # nums.uniq.length < nums.length ? true : false

end

p contains_duplicate([3,1])
p contains_duplicate([2,14,18,22,22])
