
arr1 = ["h","e","l","l","o"]
arr2 = ["H","a","n","n","a","h"]

function reverseString(arr){
  NUM = arr.length
  for (let i = 0; i < arr.length ; i++){

      arr.unshift(arr[i])
      i += 1
    }
    arr.splice(NUM, NUM)
    return arr
}

console.log(reverseString(arr1))
console.log(reverseString(arr2))
