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

   if (n === ""){
       return []
   } else if (n.length === 1){
        let arr = []
        n.split("").map(nmb => {
            arr = num[nmb]
        })
        return  arr.split('')
   }




}

console.log(letterCombos("2"))
