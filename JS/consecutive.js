//The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.
//Example: 'leetcode' maxPower is 2 (ee = 2)
//Example: 'abbcccddddeeeeedcba' maxPower is 5 (eeeee = 5)


function maxPower(s){
    let high = 0
    let count = 0
    let prev = ' '

    for (let i = 0; i < s.length; i++){
        let c = s.charAt(i) // saving the letter in a variable
        if (c == prev){     // checking if prev ltr is same with current one
            count += 1      // if true, add count
        } else {
            count = 1       // if false, reset counter to 1 (1 instead of zero = the current ltr)
            prev = c        // set prev as that ltr to be checked on next loop
        }

        high = Math.max(high, count) // comparing the two and setting variable to be returned

    }
    return high
}

// console.log(maxPower('leetcode'))
console.log(maxPower('abbcccddddeeeeedcba'))