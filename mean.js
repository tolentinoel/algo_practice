function mean(num) {
    let sum = 0
    let numDigits = 0
    while (num > 0) {
        const add = num%10
        sum += add
        num = (num - add) / 10
        numDigits++
    }
    return sum/numDigits
}
mean(12345)
