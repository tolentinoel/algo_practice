
function longestCommonPrefix(strs){
    let dfault = '';
    if (!strs.length) return dfault; //checks if arr is empty.
    let word = strs[0]; //if array is not empty, declare variable for first word.
    for (let i=0; i< word.length; i++) {
        let x = strs.map((eachWord) => {
            return eachWord.length > i && eachWord !== "" && eachWord[i] === word[i];
        }); 
        // creating a new array with conditionals:
        // if eachWord's length is more than 1
        // & its not an empty string
        // & its first letter is equal to the first word's first letter.
        if (x.includes(false)) { return dfault; } //if the x array includes false, return empty array. else,
        dfault += word[i]; //add the letter index i to empty string
    }
    return dfault;
    
    if (!arr.length || arr.length === 1){
        return '';
    }

    let obj = {}

    for(let i= 0; i < arr.length; i++){
      let a = arr[i].split("")
      for(let j= 0; j <= 1; j++){
          if(obj[a[j]]){
              obj[a[j]] += 1
          } else {
              obj[a[j]] = 1
          }
      }
    }
    let rr = Object.values(obj)
    if(rr[0] === 1){
        return rr;
    }
        return Object.keys(obj).filter(key => obj[key] === rr[0] && obj[key] > 1).join("")
}

let strings = ["flower","flow","flight"]
let strings = ["dog","racecar","car"]
console.log(longestCommonPrefix(strings))