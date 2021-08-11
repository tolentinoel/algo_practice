function simpleArraySum(ar) {

    let total = ar.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)
    return total
}
let array = [1, 2, 3, 4, 10, 11]
console.log(simpleArraySum(array))
//HACKERRANK