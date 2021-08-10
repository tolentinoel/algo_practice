
function matchingStrings(s, q){
    let arr = []

    for (let i = 0; i < q.length; i++){
        let toCount = s.filter(ele => ele === q[i]).length 
        arr.push(toCount)
    }
    return arr

}

console.log(matchingStrings([ 'aba', 'baba', 'aba', 'xzxb' ],[ 'aba', 'xzxb', 'ab' ]))