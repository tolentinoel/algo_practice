function isPalindrome(x){
    let i = 0
    let j = x.toString().length-1

    while(i < j){
        if (x.toString()[i++] !== x.toString()[j--]){
            return false
        }
    }
    return true;
};


console.log(isPalindrome(1000021))
console.log(isPalindrome(121))