const factorial = (n: number) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

//recursiveFactorial

const recirsiveFactorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * recirsiveFactorial(n - 1);
};

const fibonancci = (n: number) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const fibonancci1 = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const factorial2 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

const primeNumber1 = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const powerOfTwo = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const potwo = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOfTwo1 = (n: number) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOfTowBitWise = (n: number) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

const factorial3 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

const primeNumber2 = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
};

const fibonancci2 = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const powerOftwo = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOFTwoBitwise = (n: number) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; // binary + binary === 0 //
};

const recirsiveFibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return recirsiveFibonacci(n - 1) + recirsiveFibonacci(n - 2);
};

const factorial4 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

const primeNumber3 = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const fibonacci = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const pot2 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOfTwo3 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const pot1 = (n: number) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const pot4 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 0; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const potBwise = (n: number) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

const recursiveFib = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};

const factorial5 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

const fibonacci5 = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const primeNumber4 = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const powerOfTwo5 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOfTowBitWise3 = (n: number) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

const recursiveFib4 = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return recursiveFib4(n - 1) + recursiveFib4(n - 2);
};

const factorial1 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

const fibonacci1 = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const primeNumber = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const powerOfTwo2 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOfTowBitWise2 = (n: number) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; // binary  + bianry
};

const recursiveFib3 = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return recursiveFib3(n - 1) + recursiveFib3(n - 2);
};
// n! = n * (n - 1)!

const recursiveFactorial = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

//Big-O => O(n)

//factorial Number
// 4 = 1*2*3*4
const factorial6 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

// console.log(factorial6(4)); //120

// Prime Number greater than 1 => 2 ,3,5,7 modules is not zero whatever int divdi

const primeNumber5 = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//fibonancci Sequence => 3! = 0,1,1,2, !1= 0,1,
const fibonacci6 = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

//powerOF Two  => 2^2 = 4 2^4 = 16 greater than 1

const powerOFTwo4 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

//powerOFtwobitwise
const potbitWise4 = (n: number) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

// recursiveFiboNancci ==>   step by step solve the problem ==>
// 1! = 0, 1 = 1
//2! =   0!+ 1! = 1
//3! =   1! + 2! ==> 1 + 1 = 2
//4! = 2! + 3! ==>2 + 1 => 4
//5! = 3 + 2 = 5
//6 = 5 + 3 = 8

const recursiveFiboNancci = (n: number): number => {
  return recursiveFiboNancci(n - 1) + recirsiveFibonacci(n - 2);
};

//fibonancciSequence => start => [0,1]  0! = 0 , 1 = [0,1] , 2 = [0,1,1]

const fibonancciSequence5 = (n: number) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

//fibonancciRecursive

const fibonancciRecursive = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return fibonancciRecursive(n - 1) + fibonancciRecursive(n - 2);
};

//primeNumber ==> greaterthan 1 => no int can divid to zero //

const primeNumber6 = (n: number) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//powerOfTwo => 2^2 = 4 2^3 =8 // divide by 2 must be zero;
const powerOfTwo4 = (n: number) => {
  if (n < 1) {
    return false;
  }
  for (let i = 0; i <= n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

//bitWisePowerOfTwo

const bitWisePowerOfTwo = (n: number) => {
  if (n < 2) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

//factorial ==> f 4! = 4*3*2*1

const factorial7 = (n: number) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
};

//factorialRecursive

const factorialRecursive = (n: number): number => {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
};

console.log(factorialRecursive(4));
