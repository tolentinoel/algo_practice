arr1 =[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
arr2 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]

function findBigNum(array){
    let result = []
    array.forEach(arr => {
        result.push(Math.max(...arr))
    })
    console.log(result)
}

findBigNum(arr1)
findBigNum(arr2)
