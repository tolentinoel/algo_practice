function birthday(candles) {

    if (candles.length !== 0){
        let tallest = Math.max(...candles)
        console.log(tallest)
        return candles.filter(num => num === tallest).length
    }
}

console.log(birthday([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]))