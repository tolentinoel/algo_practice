function missingNum(array){
    let arr = array.sort((a, b) => a-b)
    for(let i = 0; i < arr.length; i++){
        if (arr[i] != (i+1)){
            return (i+1)
        }
    }
}
missingNum(arr1)