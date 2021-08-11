function frameGen(n){

    let frame = Array(n)
    let str = "*"

    for (let i = 0; i < n; i++){
        if (i === 0 || i === frame.length-1){
            // checks if it's the first or last element
            frame[i] = "*".repeat(n) // "******"
        } else {
            // if it's not the first and last element, we initialize a string with white spaces
            // "*       *"
            frame[i] = str.padEnd(n) + "*"
        }
    }
    return frame
    //[
    //   '**********',
    //   '*         *',
    //   '*         *',
    //   '*         *',
    //   '*         *',
    //   '*         *',
    //   '*         *',
    //   '*         *',
    //   '*         *',
    //   '**********'
    //] <-- 10 elements, frame goes big or small depending on n
}


console.log(frameGen(10))
