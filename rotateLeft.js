function rotateLeft(d, arr) {
    let left = arr.slice(d)
    let sliced = arr.slice(0, d)

    for (let i = 0; i < sliced.length; i++){
        left.push(sliced[i])
    }
    return left
}
console.log(rotateLeft(4, [ 1, 2, 3, 4, 5 ]))