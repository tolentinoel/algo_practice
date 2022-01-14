function searchRange(nums, target) {
    console.time("Runtime");
    let positions = []

    for (let i = 0; i <= nums.length; i++){
        if (nums[i] == target){
            positions.push(i)
        }
    }

    if (positions.length == 1){
        console.timeEnd("Runtime");
        return [positions[0], positions[0]]
    }else if (positions.length == 0){
        console.timeEnd("Runtime");
        return [-1, -1]
    } else if (positions.length > 2){
        console.timeEnd("Runtime");
        return [positions[0], positions[positions.length-1]]
    } else {
        console.timeEnd("Runtime");
        return positions
    }
}

console.log(searchRange([5,7,7,8,8,10], 8))

console.log(searchRange([3, 3, 3], 3))

console.log(searchRange([ ], 1))


// 88 / 88 test cases passed.
// Runtime: 100 ms
// Memory Usage: 40.8 MB