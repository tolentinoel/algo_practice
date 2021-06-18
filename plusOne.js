function plusOne(digits){

    num = parseInt(digits.join('')) + 1
    return num.toString().split(',')[0].split('').map(Number)

}
arr = [9, 9]
arr2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(arr))
