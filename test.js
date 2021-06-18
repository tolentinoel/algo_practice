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

// ===========================================================

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

// ===========================================================

// function longestCommonPrefix(strs){
//     let dfault = '';
//     if (!strs.length) return dfault; //checks if arr is empty.
//     let word = strs[0]; //if array is not empty, declare variable for first word.
//     for (let i=0; i< word.length; i++) {
//         let x = strs.map((eachWord) => {
//             return eachWord.length > i && eachWord !== "" && eachWord[i] === word[i];
//         }); // creating a new array with conditionals:
        // if eachWord's length is more than 1
        // & its not an empty string
        // & its first letter is equal to the first word's first letter.
//         if (x.includes(false)) { return dfault; } //if the x array includes false, return empty array. else,
//         dfault += word[i]; //add the letter index i to empty string
//     }
//     return dfault;
    // if (!arr.length || arr.length === 1){
    //     return '';
    // }

    // let obj = {}

    // for(let i= 0; i < arr.length; i++){
    //   let a = arr[i].split("")
    //   for(let j= 0; j <= 1; j++){
    //       if(obj[a[j]]){
    //           obj[a[j]] += 1
    //       } else {
    //           obj[a[j]] = 1
    //       }
    //   }
    // }
    // let rr = Object.values(obj)
    // if(rr[0] === 1){
    //     return rr;
    // }
    //     return Object.keys(obj).filter(key => obj[key] === rr[0] && obj[key] > 1).join("")
// }

// let strings = ["flower","flow","flight"]
// let strings = ["dog","racecar","car"]
// console.log(longestCommonPrefix(strings))

// ===========================================================

// function removeElement(nums,val){
    // SOLUTION 1 76ms 38MB
    // for (let i = 0; i < nums.length; i++){
    //     if(nums[i] === val){
    //         nums.splice(i, 1)
    //         i-= 1
    //         }
    //     }
    // return nums.length
    // SOLUTION 2 80ms 38MB
//     for (let i = nums.length; i >= 0; i--) {
//         if (nums[i] === val) {
//           nums.splice(i, 1);
//         }
//       }
// }
// let n = [0,1,2,2,3,0,4,2]
// let v = 2
// console.log(removeElement(n,v))

// ===========================================================

// function merge(nums1, m, nums2, n){
//     nums1.splice(m, n)
//     nums2.map(num => {
//        nums1.push(num)
//     })
//     return nums1.sort((b,a)=> b-a)
// }
// let nums1 = [1,2,3,0,0,0]
// let m = 3
// let nums2 = [2,5,6]
// let n = 3

// console.log(merge(nums1,m,nums2,n))
// MEMORY 38.8MB
// RUNTIME 80ms

// ===========================================================


// function test(numbers){
    // console.log(numbers)
//     if (numbers.length < 2){
//         return true
//     }

//     for (let i = 0; i < numbers.length; i++){
//         let base = numbers.sort()
//         if (numbers === base){
//             console.log(base, numbers)
//             return true
//         }

//         let swap = []
//         swap = parseInt(numbers[i].toString().split('').reverse().join(''))
//         console.log(swap)
//         if (swap[i] < swap[i++]){
//             return true
//         }
//         return false

//     }
// }

// console.log(test([13, 31, 30]))
// SOLVED 150/300

// ===========================================================

// function removingPairsGame(numbers){
//     let player = "Alice"
//     let lib = {}

//     for (let i = 0; i < numbers.length; i++){
//         if(lib[numbers[i]]){
//             lib[numbers[i]] += 1
//         } else {
//             lib[numbers[i]] = 1
//         }
//     }

//     let keys = Object.keys(lib)
//     let filtered = keys.filter(key => lib[key] != 1)
//     console.log(lib)
//     console.log(filtered)
//     if (filtered.length%2 === 0) {

//         player = "Bob"
//     }
//     return player
// }

// console.log(removingPairsGame([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]))
// SOLVED 218/300

// ===========================================================


// function divide(n, k){
    // let x = 0
    // while(x != nums.length){
        //     arr.push(nums.toString().substring(x, 2))
        //     x += 1
        // }
    //     for (let i = 0; i < n.length; i++){

    //         console.log(arr.push(n.toString().substr(i,2)))
    // }

    // return arr
// }

// console.log(divide(120, 2))

// ===========================================================
// function simpleArraySum(ar) {

//     let total = ar.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)
//     return total
// }
// let array = [1, 2, 3, 4, 10, 11]
// console.log(simpleArraySum(array))

// ===========================================================

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++){
    //     if (i%3 !== 0 && i%5 !== 0){
    //         console.log(i)
    //     } else if (i%3 === 0 && i%5 === 0){
    //         console.log('FizzBuzz')
    //     } else if (i%3 === 0){
    //         console.log('Fizz')
    //     } else if (i%5 === 0){
    //         console.log('Buzz')
    //     }
// }

// ===========================================================
// function fizzBuzz(input) {

//     for (let i = 1; i <= input; i++){
//         console.log((i%3 === 0 && i%5 === 0)? "FizzBuzz":(i%3 === 0) ? "Fizz" : (i%5 === 0)?"Buzz" : i);
//     }
// }
// console.log(fizzBuzz(15))
// ===========================================================

// function arraySum(inputs, tests) {

    //return TRUE if any 2 num from inputs array add up to any num from tests array
    //return FALSE if none
    //does not need to distinguish multiple match

    // if (inputs.length < 2 ){
    //     return false
    // }

    // for (let i = 0; i < inputs.length; i++){
    //      let curr = inputs[i]
    //      for (let j = inputs.length-1; j >= 0 ; j-- ){
    //         let sum = curr + inputs[j]
    //      return tests.includes(sum)
    //     }
    // }

    // - - - - - - - - - - - - - - - - - 2ND SOLUTION-- DICTIONARY ROUTE - - - - - - -

//     let lib = {}
//     for (let i = 0; i < inputs.length; i++){
//         for (let j = i+1; j < inputs.length; j++ ){
//             lib[inputs[i] + inputs[j]] = true
//         }
//     }
//    for (let x = 0; x < tests.length; x++){
//        if (lib[tests[x]]){
//          return  true
//        }
//     }
//     return false
// }

// let a = [ -1, 4]
// let b = [ 3]

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

// console.log(arraySum(a, b))
