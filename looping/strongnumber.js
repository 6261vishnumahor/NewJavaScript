//first methode in strong number
 
// let i = 1;
// let count = 1;
// let digit = 0;
// let sum = 0;
// let number = 145;
// let n = number;

// while (n!==0){
//     digit = n % 10;
//     for (i = 1; i <= digit; i++) {
//         count = count * i;
//     }
//     sum = sum + count;
//     count=1;
//     n = parseInt(n / 10) ;  // n change the integer number not change a floating number
// }

// if (number == sum) {
//     console.log("Enter number is a strong", sum)
// }

// else {
//     console.log("Enter number is not a strong", sum)
// }


//secound methode in strong number
let sum=0;
let number=145
let num=number
while(num>0){
    let x=num%10
    let factorial= findFact(x);
    sum=sum+factorial
    num=parseInt(num/10)
}


function findFact(x){
    let fact=1
    for(let i=1; i<=x; i++){
        fact=fact*1;
    }
    return fact;
}
if (num == sum) {
    console.log("Enter number is a strong", sum)
}
else {
    console.log("Enter number is not a strong", sum)
}

