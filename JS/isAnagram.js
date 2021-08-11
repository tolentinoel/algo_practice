function isAnagram(s,t){

    if (s.length !== t.length){
        return false
    }
    let lib = {}
    for (let i=0; i < s.length; i++){
        if(lib[s[i]]){
            lib[s[i]] += 1
        } else {
            lib[s[i]] = 1
        }
    }
// this is to check if the key value pair exist on 2nd string using library object.
    for (let i = 0; i < t.length; i++) {
        if (lib[t[i]]) {
          lib[t[i]] -= 1;
        } else {
          return false;
        }
    }
    return true;
}
let str = "anagram"
let test = "nagaram"
console.log(isAnagram(str, test))