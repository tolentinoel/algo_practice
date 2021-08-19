// function findLast(seq, query){
//     return seq.lastIndexOf(query)
// }

// console.log(findLast("Hi, My name is Ellaine. What's your name?", "name"))
// 36
// console.log(findLast([1,55,2,6,0,3,4,6,1,9,10,12,5], 10))
// 10
// returns the index of the LAST OCCURENCE of the query


// const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// const regExp = /[A-C]/gi;
// const matches_array = str.match(regExp);

// console.log(matches_array);
// [ 'A', 'B', 'C', 'a', 'b', 'c' ]




// let arr = [ 'A', 'B', 'C', 'x', 'y', 'z', [1,2,3,4,5]].flat()
// let arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(2)
// let arr3 = [ 'A', 'B', 'C',['a', 'b', 'c',['X', 'Y', 'Z', [0,0,0]]]].flat(2)


// console.log(arr)
// [ 'A', 'B', 'C', 'x', 'y', 'z', 1, 2, 3, 4, 5 ]
// console.log(arr2)
// [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]
// console.log(arr3)
// [ 'A', 'B', 'C', 'a', 'b', 'c', 'X', 'Y', 'Z', [ 0, 0, 0 ] ]

// ### Array.of()
// Array initialization. Same principle with `.fill()`. More about `.fill()` from my last [blog](https://dev.to/tolentinoel/string-array-methods-i-recently-learned-50ec),

// let numArr = [11,55,23,6,10,3,4,6,16,9,10,12,5]
// const condition = (value) => value > 1

// console.log(numArr.every(condition))
//true
// EVERY element in numArray is more than 1

// let numArr2 = [0, 55, 0, 6, 10, 3, 4, 6, 0, 9, 10, 12, 5]
// const condition2 = (element) => element == 0

// console.log(numArr2.some(condition2))
//true
// SOME elements in numArr2 is equal to 0

let array = [ 1, 2, 3, 4, 5 ]
console.log(array.copyWithin(4))
//copy elements from index 4 where in the new array the copied starts on index 4
// [ 1, 2, 3, 4, 1 ]

let array2 = [ "banana", "apple", "melon", "strawberry" ]
console.log(array2.copyWithin(3,0))
// the new array should have array2[0] at index 3
// [ 'banana', 'apple', 'melon', 'banana' ]

console.log(array2.copyWithin(2,1))
// [ 'banana', 'apple', 'apple', 'melon' ]
// the new array should have array2[1] at index 2



// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)