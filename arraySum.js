function arraySum(inputs, tests) {

    //return TRUE if any 2 num from inputs array add up to any num from tests array
    //return FALSE if none
    //does not need to distinguish multiple match

    if (inputs.length < 2 ){
        return false
    }

    // for (let i = 0; i < inputs.length; i++){
    //      let curr = inputs[i]
    //      for (let j = inputs.length-1; j >= 0 ; j-- ){
    //         let sum = curr + inputs[j]
    //      return tests.includes(sum)
    //     }
    // }

    // - - - - - - - - - - - - - - - - - 2ND SOLUTION-- DICTIONARY ROUTE - - - - - - -

    let lib = {}
    for (let i = 0; i < inputs.length; i++){
        for (let j = i+1; j < inputs.length; j++ ){
            lib[inputs[i] + inputs[j]] = true
        }
    }
   for (let x = 0; x < tests.length; x++){
       if (lib[tests[x]]){
         return  true
       }
    }
    return false
}

let a = [ -1, 4]
let b = [ 3]

// let a = [
//     7565, -13092,  -2947,  -3034,
//    -9578, -15197,  -5482,   5205,
//    15327,   6905, -16184, -11380,
//    15194, -11155,  14413,   1771,
//    14653,  13466,  14322,   -424,
//    -3370,  13564,  -4997, -11163,
//    -6749
//  ]

//  let b= [
//     -4293,    212,  11942, -12584,
//      1286,   8864,   2731,   5239,
//    -14998, -11248,   8574,  -3992,
//      4062, -11805,  12427,   6388,
//     -1632,  10001, -16225, -16220,
//     11542,    758, -15617,   7994,
//      6717
//  ]

console.log(arraySum(a, b))
