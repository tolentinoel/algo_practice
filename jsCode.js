function lastOccurence(word, q){
    return word.lastIndexOf(q)
}

console.log(lastOccurence("Hi, My name is Ellaine. What's your name?", "name"))
// 36
// returns the index of the LAST OCCURENCE of the query


const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regExp = /[A-C]/gi;
const matches_array = str.match(regExp);

console.log(matches_array);
// [ 'A', 'B', 'C', 'a', 'b', 'c' ]