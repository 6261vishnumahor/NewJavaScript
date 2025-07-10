let arr=[250,645,350,900,50]
let i=0
let sum=0
for(let val of arr){
sum=val/10
arr[i]=arr[i]-sum
console.log(arr[i])
i++
}
console.log(arr)
