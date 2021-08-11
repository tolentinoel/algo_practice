function addNum(n){
    let result = 0 
    for (let i = 0; i <= n ; i++){
        result += i
    }
    return result
}

var t1 = performance.now()
addNum(6)
var t2 = performance.now()
console.log((t2-t1)/1000)