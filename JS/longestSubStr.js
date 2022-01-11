function longestSubStr(s) {
// Given a string s, find the length of the longest substring without repeating characters.

    if (!s) {
        return 0
    }

    if (s.length === 1) {
        return 1
    }

    let checked = ""
    let count = 1

    for (let i = 0; i < s.length; i++){

        if (checked.includes(s[i])) {
            // if it exist in the checked pile, compare num of checked vs. score, the higher value will be count
            count = count > checked.length ? count : checked.length
            // as for checked pile, split it to remove existing element then add the current element as checked
            // ex. (if s = 'dvdf')--[ 'd', 'v' ] -- 'd' is existing, so we split then add to make it 'vd'
            checked = checked.split(s[i])[1] + s[i]
        } else {
            // if it doesnt exist in the checked pile, add s[i]
            checked += s[i]
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


// Runtime: 243 ms
// Memory Usage: 44.3 MB