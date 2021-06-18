
arr1 = [3, 5, 1, 2, 2]
arr2 = [2, 3, 5, 2, 2, 5]

function reduceArray(arr1, arr2){
    return arr1.filter(els => !arr2.includes(els))
}

console.log(reduceArray(arr1, arr2))
