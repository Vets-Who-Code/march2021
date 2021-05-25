let testVal = 2017;

// First option, pretty intuitive
function isPrime(k) {
  if (k < 2) {
    return "Not Prime";
  }

  // why start at 2?

  for (let i = 2; i < k; i++) {
    if (k % i == 0) return "Not Prime";
  }

  return "Prime!";
}

// 36 - [2 * 18], [6 * 6], [18 * 2]

let str = isPrime(testVal);
console.log(`Testing ${testVal}... ${str}\n`);

// First 'n' primes:
// A simple loop using our optimized version!
function first_N_Primes(n, opt) {
  let num = 2;
  let countPrimes = 0;
  let str;
  let func;

  // optimization or not
  if (opt) primeFunc = isPrimeOptimize;
  else primeFunc = isPrime;

  while (countPrimes < n) {
    str = primeFunc(num);

    if (str == "Prime!") {
      // console.log(num);
      countPrimes++;
    }
    // Check next number
    num++;
  }
}

let n = 20000;

// Test speeds
// Original
console.log(`Testing with first ${n} primes\n`);

console.time("N primes - original");
first_N_Primes(n);
console.timeEnd("N primes - original");

// Optimized
console.time("N primes - OPTIMIZED!!");
first_N_Primes(n, true);
console.timeEnd("N primes - OPTIMIZED!!");

function isPrimeOptimize(k) {
  if (k < 2) {
    return "Not Prime";
  }
  const sqrt = Math.floor(Math.sqrt(k));

  //i.e., k = 30
  // 1, 2, 3, 5, ----- 6, 10, 15, 30
  // 1 * 30, 23  * 15, * 10, 5 * 6,  ----- 6 * 5 , 10 * 3, 15 * 2, 30 * 1

  // n ^ (1/2)
  for (let i = 2; i < sqrt; i++) {
    if (k % i == 0) return "Not Prime";
  }

  return "Prime!";
}

// dynamic programming
