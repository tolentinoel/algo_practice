// Your task is to check whether it is possible to erase at most one digit from firstnum, so that the resulting string contains at least one digit, has no leading zeros and the value of thirdnum is equal to the sum of the values of firstnum and secondnum.
// Return true if it's possible, otherwise return false.
// Note: All three strings are provided without leading zeros.

function eraseOneDigit(firstnum, secondnum, thirdnum) {
    // return true or false
            let sum
            let newFnum
            let first = parseInt(firstnum)
            let second = parseInt(secondnum)
            let third = parseInt(thirdnum)
            console.log(first, "<--FIRST")
            console.log(second, "<--SECOND")

        if (firstnum[0] !== 0 && first + second !== third ){

                newFnum1 = first.toString().slice(0, firstnum.length-1) //slicing last num
                newFnum2 = first.toString().slice(1, firstnum.length) //slicing first num
                console.log(newFnum1)
                console.log(newFnum2)
                if (parseInt(newFnum1) + second !== third){
                    return false
                } else if (newFnum2[0] === 0 && parseInt(newFnum2) + second !== third){
                    return false
                }

        }
        return true

    }
