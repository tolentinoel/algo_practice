
function merge(nums1, m, nums2, n){
    nums1.splice(m, n)
    nums2.map(num => {
       nums1.push(num)
    })
    return nums1.sort((b,a)=> b-a)
}
let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

console.log(merge(nums1,m,nums2,n))
// MEMORY 38.8MB
// RUNTIME 80ms
