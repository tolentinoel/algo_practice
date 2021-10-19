function makeArrayConsecutive2(statues) {
    if (statues.length === 1){
        return 0
    }
    
    let max = Math.max(...statues)
    let min = Math.min(...statues)
    //deducting the lowest number to the highest number of the array
    //then deducting the arr length from the difference, adding 1
    
    return 1 + max - min - statues.length
}

console.log(makeArrayConsecutive2([5, 4, 6]))