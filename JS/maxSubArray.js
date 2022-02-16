function maxSubArr(nums) {

    // let maxSum = -Number.MAX_VALUE
    // let sum 
    // console.log(maxSum)

    //     for (let i = 0; i < nums.length; i++) {
    //         sum = 0;
    //         for (let j = i; j < nums.length; j++) {
    //     // 2nd loop is to add the current element of nums with sum
    //     // and compare the new sum with maxSum.
    //    // If new sum is higher than the maxSum at that point, it saves it as the new maxSum
    //             sum += nums[j];
    //             maxSum = Math.max(sum, maxSum);
    //         }
    //     }
    //     return maxSum;

    console.time("Runtime")
    let prev = 0;
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        max = Math.max(max, prev)

        console.log(prev, "PREV")
        console.log(max, "MAX")
    }


    console.timeEnd("Runtime")
    return max;
}

console.log(maxSubArr([-1, -2, 5, 8, -3]))

// Runtime: 7.242ms