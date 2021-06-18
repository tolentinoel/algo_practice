function adjacentElementsProduct(inputArray){
let theProduct = inputArray[0]*inputArray[1]
    for(let i = 0; i < inputArray.length; i++){
        let product
        product = inputArray[i]*inputArray[i+1]
        if(product > theProduct){
            theProduct = product
        }
    }
        console.log("THE PRODUCT =>", theProduct)
}
adjacentElementsProduct([3, 6, -2, -5, 7, 3])