
function removingPairsGame(numbers){
    let player = "Alice"
    let lib = {}

    for (let i = 0; i < numbers.length; i++){
        if(lib[numbers[i]]){
            lib[numbers[i]] += 1
        } else {
            lib[numbers[i]] = 1
        }
    }

    let keys = Object.keys(lib)
    let filtered = keys.filter(key => lib[key] != 1)
    console.log(lib)
    console.log(filtered)
    if (filtered.length%2 === 0) {

        player = "Bob"
    }
    return player
}

console.log(removingPairsGame([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]))
// SOLVED 218/300
