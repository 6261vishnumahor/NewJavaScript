// let a=2;
// for(let i=1;i<=10; i++){
//     b=a*i
//     console.log(a,"*",i,"=",b)
// }



for(let i=1; i<=100; i++){
    if(i%3==0){
        console.log("fizz",i)
    }
     else if(i%5==0){
        console.log("buss",i)
     }
     else if(i%3==0&& i%5==0){
        console.log("fizzbuss",i)
     }
     else{
console.log("not fizz or buss",i)
     }

}