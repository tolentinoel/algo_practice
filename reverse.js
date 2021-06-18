function reverse(x) {
    if(Math.sign(x) === 1) {
        let num = Number(x.toString().split('').reverse().join(''))
        non_neg_range = 4294967295
        signed_range = 2147483647
        if (num > non_neg_range || num > signed_range){
            return 0
        } else {
            return num
        }
    } else if (Math.sign(x) === -1){
        let num = parseInt(x.toString().split('').reverse().join(''))* -1
        range = -2147483648
      if(num < range){
            return 0
        } else {
            return num
        }
    }else {
        return 0
    }
};

x = 1563847412
console.log(reverse(x))