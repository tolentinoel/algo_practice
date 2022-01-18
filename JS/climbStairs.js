function climbStairs(n) {

    if (n == 1) {
        return 1
    }

    let first = 1
    let second = 2

    //  will only go on loop if n is more than of equal to 3
    for (let i = 3; i <= n; i++) {
        let third = first + second
        first = second
        second = third
    }
    return second
}

console.log(climbStairs(3))

// 45/45 testcases
// Runtime: 72 ms
// Memory Usage: 38.9 MB