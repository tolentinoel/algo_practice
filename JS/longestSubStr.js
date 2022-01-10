function longestSubStr(s) {

    if (!s) {
        return 0
    }
    if (s.length === 1) {
        return 1
    }

    let checked = []
    let count = 0


    for (let i = 0; i < s.length; i++){

        // if current element is not same as the next & if it's not included in checked array,
        // push into checked array to keep track & add score using count
        // if it exists in checked array, empty out array and start new sequence of elements using checked array.
        // console.log(s[i])

        if (s[i] !== s[i+1] && !checked.includes(s[i])){
            checked.push(s[i])
            count = checked.length

        } else if (s[i] === s[i+1] && !checked.includes(s[i])){
            checked.push(s[i])
            count = checked.length

        } else if (s[i] !== s[i+1] && checked.includes(s[i])){
            checked.length = 0
            checked.push(s[i])

        } else {

            checked.length = 0
            checked.push(s[i])
        }
    }

    console.log(checked)
    // if count is higher than the length of the checked array, we found our length!
    // else, we'll return the length of the checked array
    return count >= checked.length ? count : checked.length
}

// console.log(longestSubStr("abcabcbb"))
console.log(longestSubStr("dvdf"))
// console.log(longestSubStr("cdd"))



