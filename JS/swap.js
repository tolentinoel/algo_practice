
function test(numbers){
    console.log(numbers)
    if (numbers.length < 2){
        return true
    }

    for (let i = 0; i < numbers.length; i++){
        let base = numbers.sort()
        if (numbers === base){
            console.log(base, numbers)
            return true
        }

        let swap = []
        swap = parseInt(numbers[i].toString().split('').reverse().join(''))
        console.log(swap)
        if (swap[i] < swap[i++]){
            return true
        }
        return false

    }
}

console.log(test([13, 31, 30]))
// SOLVED 150/300