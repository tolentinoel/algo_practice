function timeConvert(s){
    let zone = s.split("").splice(-2).join("")
    let str = s.split("").slice(0, s.length-2)

    for (let i = 0; i < str.length; i ++){
        if (str[i] === ":"){
            str[i] = " "
        }
        
    }
    let nums = str.join('').split(" ")

    let converted = []
    let lib = {
        'hh': 0,
        'mm': 0,
        'ss': 0
    }

    
    for (let i = 0; i < nums.length-1; i++){
        if (!lib[nums[i]] && i === 0){
            lib.hh = parseInt(nums[i])
        } else if (!lib[nums[i]] && i === 1){
            lib.mm = parseInt(nums[i])
        } else if (!lib[nums[i]] && i === 2) {
            lib.ss = parseInt(nums[i])
        }
      
    }

    if (zone === "PM"){
        converted.push(12 + lib.hh)
        converted.push(':' + nums[1])
        converted.push(':' + nums[2])
    } else {
        let hour = 12 - lib.hh
        if (hour < 9){
            converted.push('0' + `${hour}`)
        } else {
            converted.push(hour)
        }
        converted.push(':' + nums[1])
        converted.push(':' + nums[2])

    }
    return converted.join("")

}

console.log(timeConvert('11:05:45PM'))

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// Return '12:01:00PM'.

// Return '00:01:00'.