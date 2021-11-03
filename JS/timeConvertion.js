function timeConvert(s){
    let arr = s.split("")
    let zone = arr.splice(-2).join("")
    let nums = arr.join("").replaceAll(':', ' ').split(" ")

    let converted = []
    let lib = {
        'hh': 0,
        'mm': 0,
        'ss': 0
    }
    for (let i = 0; i < nums.length; i++){
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
        if (hour === 0){
            converted.push('00')
        } else {
            converted.push(hour)
        }
        converted.push(':' + nums[1] + ':')
        converted.push(nums[2])
    }

    return converted.join("")
}

console.log(timeConvert('12:05:45AM'))

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// Return '12:01:00PM'.

// Return '00:01:00'.