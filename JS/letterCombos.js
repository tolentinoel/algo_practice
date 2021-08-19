function letterCombos (digits){
    let num = {
        "2" : ["a", "b", "c"],
        "3" : ["d", "e", "f"],
        "4" : ["g", "h", "i"],
        "5" : ["j", "k", "l"],
        "6" : ["m", "n", "o"],
        "7" : ["p", "q", "rs"],
        "8" : ["t", "u", "v"],
        "9" : ["w", "x", "y", "z"]
      }

    let arr = []

    if (digits.length <= 1){

        digits.split("").map(nmb => {
            arr = num[nmb]
        })
        return arr.split('')
    }

    let combo = []
    let nums = digits.split("")

    for (let i = 0; i < nums.length; i++){
        // num[digits[i]].split("").map(ltr => {
        //     arr.push(ltr)
        // }) [ 'a', 'b', 'c', 'd', 'e', 'f' ]

        arr.push(num[nums[i]].split(""))
        // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

    }
    let x = 0

    for (let j = 0; j <= arr.length; j++){
        // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
        for (let k = 1; k <= arr.length; k++){
        // need to work on getting a result of variations of characters
        // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
        }
    }

    return arr

}

// console.log(letterCombos("23"))
console.log(letterCombos("2"))