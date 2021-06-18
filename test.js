


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
