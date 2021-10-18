function isPalindrome(input){

    let s = input.toLowerCase().replace(/[^a-zA-Z0-9]/g,''); //negate characters which are not a-z, A-z or 0-9
    let i = 0
    let j = s.length-1
    while(i < j){
        if (s[i++]!== s[j--]){
            return false
        }
    }
    return true;
}
let str = "race a car"
console.log(isPalindrome(str))