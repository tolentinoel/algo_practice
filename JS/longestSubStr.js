function longestSubStr(s) {
    let str = []
    let count = str.length
    for (let i = 0; i < s.length; i++){
        // if current element is not equal to the one next to it & if it's not included in str array.
        // use count as score of the longest substring without repeating characters
        if (s[i] !== s[i+1] && !str.includes(s[i])){
            str.push(s[i])
            count = str.length
            console.log(count, "IN LOOP")
        } else {
            str.length = 0
            str.push(s[i])
        }

    }
    console.log(str)
    console.log(count, "AFTER LOOP")
}
console.log(longestSubStr("abcabcbb"))
console.log(longestSubStr("pwwkew"))
console.log(longestSubStr("bbbbb"))