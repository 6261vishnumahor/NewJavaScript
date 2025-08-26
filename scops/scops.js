
//=============global scops================================

// var name="vishnu";
// function abc(){
//     console.log(name)
// }
// abc()



//=============local scops==============

// function abc(){
// var name="vishnu"
//     console.log(name)
// }
// abc()



// =========block scops=======================

// {
//     var name="vishnu"
// }

// console.log(name)


// {
//     let name="vishnu"
// }

// console.log(name)



//===========laxical scops=====================

// function abc() {
// var name="vishnu"
//   function xyz(){
//     console.log(name)
//   }
//     console.log(name)
//     xyz()
// }
// abc()


const arr = [2, 3, 4, 1, 4, 5, 4, 3, 6]
let b=3
let n=arr.length
let i=0 ,j=n-1
let sum=0 ,b2=b
while(b){
    sum+=a[i]
    i++
        b--
}
let ans=sum
while(b2){
    sum -= a[--i]
    sum += a[j--]
    ans=Math.max(ans,sum)
    b2--
}
console.log(ans)
//  let a=0
// for (var i = 0; i < arr.length; i++) {
//     index = i - 3
//     // a=i-index
//     if (i < 4) {
//         count += arr[i]
//     }
//     else if (i > 4) {
//         lastCount += arr[i]
//     }
//     else if (i > index) {
//         sum += arr[i]
//     }
// }
// console.log(sum)

// console.log(lastCount)