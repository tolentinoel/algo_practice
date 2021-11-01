function timeConvert(s){
    let arr = s.split("")
    let zone = arr.splice(-2).join("")

    console.log(zone)


}

console.log(timeConvert('07:05:45PM'))

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// Return '12:01:00PM'.

// Return '00:01:00'.