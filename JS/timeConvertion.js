function timeConvert(s){
    let arr = s.split("")
    let zone = arr.splice(-2).join("")

    console.log(zone)


}

console.log(timeConvert('07:05:45PM'))