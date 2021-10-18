
// Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. 
// An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.

// Example:
// For n = 2, the output should be
// shapeArea(n) = 5;

//   x
//  xXx
//   x

// For n = 3, the output should be
// shapeArea(n) = 13.

//    x
//   xxx
//  xxXxx
//   xxx
//    x

function area(n) {
    if (n === 1){ 
        return 1 
    } else {
        return n * (n-1) * 2 + 1
    }   
}

console.log(area(2))