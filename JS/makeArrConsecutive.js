function makeArrayConsecutive2(statues) {
    if (statues.length === 1){
        return 0
    }

    let counter = 0
    let arr = statues.sort() //sorting the array in ascending order

    for (let i = 0; i <= arr.length-1; i++){
        // iterate thru the array and use counter
        // If the next num - the current num is not equal 1
        // & that it is not the last element of the array, add 1 on counter
        if (!arr.includes(arr[i] + 1)){
            counter += 1
        }
    }

    return counter
}

console.log(makeArrayConsecutive2([5, 4, 6]))