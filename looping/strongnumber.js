let i = 1;
let count = 1;
let digit = 0;
let sum = 0;
let number = 145;
let n = number;

for (let j=1; j<=n; i++){
    digit = n % 10;
    for (i = 1; i <= digit; i++) {
        count = count * i;
    }
    sum = sum + count;
    n = n / 10;
}

if (number == sum) {
    console.log("Enter number is a strong", sum)
}

else {
    console.log("Enter number is not a strong", sum)
}