function maxSubArr(nums) {

    let maxSum = 0;
    let sum

        for (let i = 0; i < nums.length; i++) {
            sum = 0;
            for (let j = i; j < nums.length; j++) {
                // 2nd loop is to add the current element of nums with sum
                // and compare the new sum with maxSum.
                // If new sum is higher than the maxSum at that point, it saves it as the new maxSum
                sum += nums[j];
                maxSum = Math.max(sum, maxSum);

            }
        }
        return maxSum;
}

console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]))