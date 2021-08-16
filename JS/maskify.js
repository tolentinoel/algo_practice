function maskify(cc) {
   let arr = cc.split("")
   let result = []
   if (arr.length <= 1){
       return String(arr)
   }else {
        for(let i = 0; i < arr.length-4; i++){
           arr[i]= "#"
       }
           console.log(arr.join(""))

   }
}

maskify("4556364607935616")
// == "############5616"
// maskify("64607935616")
// ==      "#######5616"
// maskify("1")
// ==                "1"
// maskify("")
// ==                 ""