function firstUniqChar(s) {

    for (i = 0; i < s.length; i++) {
        console.log(s.indexOf(s[i]))
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            console.log(s.lastIndexOf(s[i]))
          return i
        }
      }s
     return -1
  };
  console.log(firstUniqChar("cc"))

