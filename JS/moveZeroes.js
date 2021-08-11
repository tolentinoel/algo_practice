function moveZeroes(arr){
  for (let i = 0; i < arr.length; i++){
    do {
      let x = arr[i]
      arr.splice(i, 1)
      arr.push(0)
      i += 1
    } while (arr[i] === 0)
    return arr
  }
}

let arr = [0,0,1,0,3,12]
let arr2 = [0,0,1]
console.log(moveZeroes(arr))