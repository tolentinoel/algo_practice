
function removeElement(nums,val){
    // SOLUTION 1 76ms 38MB
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1)
            i-= 1
            }
        }
    return nums.length
    // SOLUTION 2 80ms 38MB
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === val) {
          nums.splice(i, 1);
        }
      }
}
let n = [0,1,2,2,3,0,4,2]
let v = 2
console.log(removeElement(n,v))