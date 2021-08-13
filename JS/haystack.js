function strStr(h, n) {
    if (n === "") {
        // return 0 if empty
        return 0
    } else if (h.match(n)){
        return h.match(n).index
        // [ 'll', index: 2, input: 'hello', groups: undefined ]
        // return indexOf othe first occurence
    } else {
        return -1
        // return -1 if false
    }
    // <--- beats 34%

    // ______SOLUTION 2__________
    // return h.indexOf(n) <--- Runtime: 72 ms - Memory Usage: 39.6 MB- beats 84%


}

console.log(strStr("hello", "ll"))