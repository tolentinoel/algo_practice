numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
    let part1 = numbers.slice(0, 3).join("")
    let part2 = numbers.slice(3, 6).join("")
    let part3 = numbers.slice(6).join("")
    return `(${part1}) ${part2}-${part3}`
  }

"(123) 456-7890"
// =======================================================

// function createPhoneNumber(arr){
//     let format = '(xxx) xxx-xxxx'
//     for(let i=0; i<arr.length; i++){
//       format = format.replace('x', arr[i])
//     }
//     return format
//    }