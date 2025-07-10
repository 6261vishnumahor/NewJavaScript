let arr =[4,45,65,2,24,35,45,65,56]
let max=0, max1=0
 let max2=0
for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i]
    }
}
    for(let i=0; i<arr.length; i++){
    if( max2<arr[i] && max1<arr[i]&&arr[i]!==max && arr[i]!==max1){
        max2=arr[i]
    }
}
console.log(max2)