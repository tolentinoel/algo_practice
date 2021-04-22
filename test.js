// function adjacentElementsProduct(inputArray){
// let theProduct = inputArray[0]*inputArray[1]
//     for(let i = 0; i < inputArray.length; i++){
//         let product
//         product = inputArray[i]*inputArray[i+1]
//         if(product > theProduct){
//             theProduct = product
//         }
//     }
//         console.log("THE PRODUCT =>", theProduct)
// }
// adjacentElementsProduct([3, 6, -2, -5, 7, 3])

// =======================================================

// function iqTest(numbers){
//     let arr = numbers.split(' ')
//     for (let i=0; i < arr.length; i++){
//         if (arr[i]%2 !== 0){
//         return arr.indexOf(arr[i]) + 1
//         }
//     }
// }

// iqTest("1 2 1 1 1") // expected answer 1
// iqTest("2 4 7 8 10") //expected 3
// let arr1 = [1, 2, 3, 4, 6, 7, 8, 9, 10]
// let arr2 = [7, 2, 3, 6, 5, 9, 1, 4, 8]
// let arr3 = [10, 5, 1, 2, 4, 6, 8, 3, 9]

// =======================================================
// function missingNum(array){
//     let arr = array.sort((a, b) => a-b)
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] != (i+1)){
//             return (i+1)
//         }
//     }
// }
// missingNum(arr1)

// =======================================================
// function mean(num) {
//     let sum = 0
//     let numDigits = 0
//     while (num > 0) {
//         const add = num%10
//         sum += add
//         num = (num - add) / 10
//         numDigits++
//     }
//     return sum/numDigits
// }
// mean(12345)

// =======================================================
// function mean(num){
//     let temp = num.toString().split("")
//     let result = 0
//     for(let i = 0; i < temp.length; i++){
//         const answer = parseInt(temp[i])
//         result += answer
//     }
//    console.log(result/temp.length)
// }

// mean(42)

// =======================================================
// function maskify(cc) {
//    let arr = cc.split("")
//    let result = []
//    if (arr.length <= 1){
//        return String(arr)
//    }else {
//         for(let i = 0; i < arr.length-4; i++){
//            arr[i]= "#"
//        }
//            console.log(arr.join(""))

//    }
// }

// maskify("4556364607935616")
// == "############5616"
// maskify("64607935616")
// ==      "#######5616"
// maskify("1")
// ==                "1"
// maskify("")
// ==                 ""

// =======================================================

// arr1 = [3, 5, 1, 2, 2]
// arr2 = [2, 3, 5, 2, 2, 5]

// function reduceArray(arr1, arr2){
// return arr1.filter(els => !arr2.includes(els))
// }
// console.log(reduceArray(arr1, arr2))

// =======================================================
// arr1 =[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// arr2 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]

// function findBigNum(array){
//     let result = []
//     array.forEach(arr => {
//         result.push(Math.max(...arr))
//     })
//     console.log(result)
// }

// findBigNum(arr1)
// findBigNum(arr2)

// =======================================================

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// function maskify(cc) {
//     let arr = cc.split("")
//     let result = []
//     if (arr.length <= 1){
//         return String(arr)
//     }else {
//          for(let i = 0; i < arr.length-4; i++){
//             arr[i]= "#"
//         }
//             return arr.join("")

//     }
//  }

// =======================================================


// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// function createPhoneNumber(numbers){
//     let part1 = numbers.slice(0, 3).join("")
//     let part2 = numbers.slice(3, 6).join("")
//     let part3 = numbers.slice(6).join("")
//     return `(${part1}) ${part2}-${part3}`
//   }

// "(123) 456-7890"
// =======================================================

// function createPhoneNumber(arr){
//     let format = '(xxx) xxx-xxxx'
//     for(let i=0; i<arr.length; i++){
//       format = format.replace('x', arr[i])
//     }
//     return format
//    }
// =======================================================

// function disemvowel(str) {
//   vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//   let arr = str.split(" ")
//   arr.forEach(word => {
//     return word.split("").filter(letter => !vowels.includes(letter)).join("")
//   })

// }


// string = "This website is for losers LOL!"
// console.log(disemvowel(string))
// =======================================================


// arr1 = ["h","e","l","l","o"]
// arr2 = ["H","a","n","n","a","h"]

// function reverseString(arr){
//   NUM = arr.length
//   for (let i = 0; i < arr.length ; i++){

//       arr.unshift(arr[i])
//       i += 1
//   }
//   arr.splice(NUM, NUM
// return arr
// }

// console.log(reverseString(arr1))
// console.log(reverseString(arr2))


// ========================================================
// function moveZeroes(arr){
//   for (let i = 0; i < arr.length; i++){
//     do {
//       let x = arr[i]
//       arr.splice(i, 1)
//       arr.push(0)
//       i += 1
//     } while (arr[i] === 0)
//     return arr
//   }
// }

// let arr = [0,0,1,0,3,12]
// let arr2 = [0,0,1]
// console.log(moveZeroes(arr))

// ==================================================

// function twoSum(nums, target){
//     result = []
//       for (let i = 0; i < nums.length ; i++){
//           let num = nums[i]
//           let item = target - num
//         if (nums.includes(item) && nums.indexOf(item) != i){
//             result.push(nums.indexOf(num), nums.indexOf(item, i))
//             return result
//         }
//     }
//     i += 1
// }

// nums = [2,7,11,15]
// target = 9
// nums = [3,2,4]
// target = 6
// nums = [3,3]
// target = 6
// console.log(twoSum(nums,target))

// =======================================================

// function plusOne(digits){

//     num = parseInt(digits.join('')) + 1
//     return num.toString().split(',')[0].split('').map(Number)


// }

// arr = [9, 9]
// arr2 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// console.log(plusOne(arr))


// =======================================================

// function reverse(x) {
//     if(Math.sign(x) === 1) {
//         let num = Number(x.toString().split('').reverse().join(''))
//         non_neg_range = 4294967295
//         signed_range = 2147483647
//         if (num > non_neg_range || num > signed_range){
//             return 0
//         } else {
//             return num
//         }
//     } else if (Math.sign(x) === -1){
//         let num = parseInt(x.toString().split('').reverse().join(''))* -1
//         range = -2147483648
//       if(num < range){
//             return 0
//         } else {
//             return num
//         }
//     }else {
//         return 0
//     }
// };

// x = 1563847412
// console.log(reverse(x))

// =======================================================
// function findDisappearedNumbers(nums){
//     a = []
//     num = 1
//     while (num <= nums.length && nums.length !== 0){
//         if (nums.includes(num)){
//             num += 1
//         } else {
//             a.push(num)
//             num += 1
//         }
//     }
//   return a
// }
// console.log(findDisappearedNumbers([1,1]))


// =======================================================

// function firstUniqChar(s) {

//     for (i = 0; i < s.length; i++) {
//         console.log(s.indexOf(s[i]))
//         if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
//             console.log(s.lastIndexOf(s[i]))
//           return i
//         }
//       }s
//      return -1
//   };


//   console.log(firstUniqChar("cc"))


// _________________________________________________________________

// function isPalindrome(s){
//     s = s.toLowerCase();
//     s = s.replace(/[^a-zA-Z0-9]/g,''); //says negate characters which are other than a-z, A-z or 0-9
//     let i = 0
//     let j = s.length-1

//     while(i < j){
//         if (s[i++]!== s[j--]){

//             return false
//         }
//     }
//     return true;
// }

// let str = "race a car"
// console.log(isPalindrome(str))

// _________________________________________________________________

// function isAnagram(s,t){

//     if (s.length !== t.length){
//         return false
//     }

//     let lib = {}

//     for (let i=0; i < s.length; i++){
//         if(lib[s[i]]){
//             lib[s[i]] += 1
//         } else {
//             lib[s[i]] = 1
//         }
//     }
// this is to check if the key value pair exist on 2nd string using library object.
//     for (let i = 0; i < t.length; i++) {
//         if (lib[t[i]]) {
//           lib[t[i]] -= 1;
//         } else {
//           return false;
//         }
//     }

//     return true;


// }

// let str = "anagram"
// let test = "nagaram"
// console.log(isAnagram(str, test))


function longestCommonPrefix(arr){
    let result = []
    let j = 0
    for(let i= 0; i < arr.length; i++){

    }

}

let strings = ["flower","flow","flight"]
console.log(longestCommonPrefix(strings))