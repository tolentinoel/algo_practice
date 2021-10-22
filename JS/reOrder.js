function reOrderArr (arr, idx) {
// Given an array of objects A, and an array of indexes B, reorder the objects in array A with the given indexes in array B.

    let lib = {}

    for (let i = 0; i < arr.length; i++){
            lib[arr[i]] = idx[i]
    }

    let cloneArr = [...arr]

    for (let j = 0; j < cloneArr.length; j++){
        let index = lib[cloneArr[j]]
        let letter = cloneArr[j]
        arr.splice(index, 1, letter)
    }

    return arr

}


let a = ["C", "D", "E", "F", "G", "H"];
let b = [3, 0, 4, 1, 2, 5];
console.log(reOrderArr(a, b))
// a is now [D, F, G, C, E, H]