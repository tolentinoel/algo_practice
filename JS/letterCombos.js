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
        // num[digits[i]].split("").map(ltr => {
        //     arr.push(ltr)
        // }) [ 'a', 'b', 'c', 'd', 'e', 'f' ]

        arr.push(num[digits[i]].split(""))

    }

    

    return arr


}

console.log(letterCombos("23"))
