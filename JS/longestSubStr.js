function longestSubStr(s) {
    let str = []
    let count = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] !== s[i+1] && !str.includes(s[i]) ){
            str.push(s[i])
            count += 1
        } else {
            str.length = 0
            str.push(s[i])
        }
        // console.log(str)
    }
    return count
}
console.log(longestSubStr("abcabcbb"))