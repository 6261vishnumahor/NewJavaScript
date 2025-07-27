num=100;
function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) {
        return false;
    }
    // Check for divisibility from 2 up to the square root of the number
    // If a number has a divisor greater than its square root, it also has one smaller than its square root.
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false; // If divisible, it's not prime
        }
    }
    return true; // If no divisors found, it's prime
}

function printPrimesUpTo(limit) {
    console.log(`Prime numbers from 1 to ${ limit }:`);
    for (let i = 2; i <= limit; i++) { // Start from 2 as 1 is not prime
        if (isPrime(i)) {
            console.log(i);
        }
    }
}