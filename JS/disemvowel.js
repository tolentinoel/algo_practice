function disemvowel(str) {
  vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let arr = str.split(" ")
  arr.forEach(word => {
    return word.split("").filter(letter => !vowels.includes(letter)).join("")
  })
}

string = "This website is for losers LOL!"
console.log(disemvowel(string))