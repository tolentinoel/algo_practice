function consecutiveOne(nums){
    let list = []
    let score = 0
    console.time("Runtime");

    for (let i = 0; i < nums.length; i++){

        if (nums[i] === 1){
            score += 1
        } else {
            //pushing recent score to the list before resetting it back to zero
            list.push(score)
            score = 0
        }
    }
    list.push(score)
    // Once the loop ends, we have our collection of scores, next thing is to find the largest score from list.
    
    console.timeEnd("Runtime");
    return list.sort((a,b)=> b-a)[0]
}
console.log(consecutiveOne([1,1,0,1,1,1]))

// Runtime: 92 ms
// 42/42 testcases
// Memory Usage: 43.1 MB