function frameGen(n){

    let frame = Array(n)
    frame.fill()

    let str = "*"
    for (let i = 0; i < n; i++){
        if (i === 0 || i === frame.length-1){
            frame[i] = "*".repeat(n)
        } else {
            frame[i] = str.padEnd(n) + "*"
        }

    }
    return frame
}


console.log(frameGen(10))