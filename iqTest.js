
function iqTest(numbers){
    let arr = numbers.split(' ')
    for (let i=0; i < arr.length; i++){
        if (arr[i]%2 !== 0){
        return arr.indexOf(arr[i]) + 1
        }
    }
}

iqTest("1 2 1 1 1") // expected answer 1
iqTest("2 4 7 8 10") //expected 3
let arr1 = [1, 2, 3, 4, 6, 7, 8, 9, 10]
let arr2 = [7, 2, 3, 6, 5, 9, 1, 4, 8]
let arr3 = [10, 5, 1, 2, 4, 6, 8, 3, 9]