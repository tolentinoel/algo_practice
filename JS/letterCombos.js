function letterCombos (n){
    let num = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz"
      }

    let arr = []

    if (n.length <= 1 || n.startsWith("0")){

        n.split("").map(nmb => {
            arr = num[nmb]
        })
        return arr.split('')
    }

    let combo = []
    let digits = n.split("")
    for (let i = 0; i < digits.length; i++){
        arr.push(num[digits[i]])

    }

    for (let j = 0; j < arr.length; j++){
        // [ 'abc', 'def' ]
    

        for (let k = 0; k < arr[j].length; k++){
            //  [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ]

        }
    }


    return combo


}

console.log(letterCombos("23"))
// console.log(letterCombos("2"))