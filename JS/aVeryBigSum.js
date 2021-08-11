function aVeryBigSum(ar) {
    console.log(ar) // [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return ar.reduce(reducer)
}

//print total saum of each element in array ar