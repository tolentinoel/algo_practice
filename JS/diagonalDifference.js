function diagonalDifference(arr) {
    //SQUARE MATRIX ARR
    // console.log(arr)
    //[ 11, 2, 4 ]
    // [ 4, 5, 6 ]
    //[ 10, 8, -12 ]

    //GOAL : 11 + 5 -12 = 4
    //       4 + 5 + 10 = 19
    //    ____________________
    //      19 - 4 = 15

    let arrayA = []
    let arrayB = []
    for (let i = 0; i < arr.length; i++){
        arrayA.push(arr[i][0 + i])
        arrayB.push(arr[i][(arr[i]).length-i -1])
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let resultA = arrayA.reduce(reducer)
    let resultB = arrayB.reduce(reducer)

    if (resultA > resultB){
        return resultA - resultB

    }else {
        return resultB - resultA
    }

}