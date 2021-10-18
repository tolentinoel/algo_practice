function adjacentElementsProduct(inputArray){
let theProduct = inputArray[0]*inputArray[1]
    for(let i = 0; i < inputArray.length; i++){
        let product = inputArray[i]*inputArray[i+1]
        if(product > theProduct){
            theProduct = product
        }
    }
    return theProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))