// let n = 3;   // nth prime
// let count = 0;
// let num = 2;
// let nthPrime = 0;

// // find nth prime
// while (count < n) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     count++;
//     nthPrime = num; 
//   }
//   num++;
// }

// // print next n non-composite (prime) numbers
// count = 0;
// num = nthPrime + 1;

// console.log(`Next ${n} non-composite numbers after ${nthPrime}:`);

// while (count < n) {
//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//     count++;
//   }
//   num++;
// }

let n = 3;

let count = 0;
let num = 2;

while (true) {
    if (isPrime(num)) {
        count++;

        if (count === n) {
            console.log("Nth Prime:", num);
            break;
        }
    }
    num++;
}

function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
