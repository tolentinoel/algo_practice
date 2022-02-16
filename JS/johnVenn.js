
function johnVenn(set1, set2){
    // based on test3 order doesnt matter on the returned value? or ascending?
    // if no common return NULL

    let results = []

    for (let i = 0; i < set1.length; i++){
      if (set2.includes(set1[i])){
        results.push(set1[i])
      }

    // OR
    // let match = set2.filter(ele => ele === set1[i])

    // if (match.length > 0){
    //  results.push(match[0])
    // }

    }

    return results.length === 0 ? 'NULL' : results

  }

  //console.log(johnVenn([1, 2, 3,'A','B','C'], ['X', 11, 'G', 'M', 2, 9, 3, 'C', 'N', 'R'] ))
  console.log(johnVenn([6, 0, 2, 4, 7, 1, 8, 3, 9, 5], ['A1', 3, 'G', 'DOG', 18, 3, 9, 'E', 'BIRD', 'ONE', 5, 'U', 'J', 'X2'] ))
  console.log(johnVenn([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ['A', 'B', 'C', 'D', 'E', 'F', 'G'] ))
