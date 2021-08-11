function fizzBuzz(n) {
    for (let i = 1; i <= n; i++){
        if (i%3 !== 0 && i%5 !== 0){
            console.log(i)
        } else if (i%3 === 0 && i%5 === 0){
            console.log('FizzBuzz')
        } else if (i%3 === 0){
            console.log('Fizz')
        } else if (i%5 === 0){
            console.log('Buzz')
        }
}
//HACKERRANK

//SOLUTION 2

// function fizzBuzz(input) {

//     for (let i = 1; i <= input; i++){
//         console.log((i%3 === 0 && i%5 === 0)? "FizzBuzz":(i%3 === 0) ? "Fizz" : (i%5 === 0)?"Buzz" : i);
//     }
// }
// console.log(fizzBuzz(15))