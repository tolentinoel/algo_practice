function restoreArray(adjacentPairs) {
    let a = []
    for (let i = 0; i < adjacentPairs.length; i++){

        for (let j = 0; j < adjacentPairs[i].length; j++){

                if (!a.includes(adjacentPairs[i][j])){
                    a.push(adjacentPairs[i].sort()[j])
                }
        }

    }
    return Array.from(new Set(a))



}

// console.log(restoreArray([[4,-10],[-1,3],[4,-3],[-3,3]])) <-- doesnt work with this test case
console.log(restoreArray([[2,1],[3,4],[3,2]]))
