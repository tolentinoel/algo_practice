
//Write a function that weill return an array of 216 websafe hexcode colors.
function hexCode(){
    const lib = ['00', '33', '66', '99', 'CC', 'FF']

    const arr = []

    for (let i=0; i < lib.length; i++){
        for (let j=0; j < lib.length; j++){
            for (let k=0; k < lib.length; k++){
                arr.push('#' + lib[i] + lib[j] + lib[k])
            }
        }
    }

    return arr
}
// console.log(hexCode())

// Write a function that takes a string of hexcode and returns the luminance value of it.
function luminance(hex) {

    const R = parseInt(hex[1] + hex[2], 16)
    const G = parseInt(hex[3] + hex[4], 16)
    const B = parseInt(hex[5] + hex[6], 16)


   return Math.round((0.2126 * R + 0.7152 * G + 0.0722 * B) / 255)

}

// console.log(luminance('#33FF99'))
// console.log(luminance('#663399'))
// console.log(luminance('#000000'))


// Write a function that sorts the colorArray based on luminance
function sortLum(colorArray){
    return colorArray.sort((a,b) => luminance(b) - luminance(a))
}

console.log(sortLum(hexCode()))