function isFibonacciNumber(num) {
  let prevFib = 0;
  let currFib = 1;

  while (currFib < num) {
    const nextFib = prevFib + currFib;
    prevFib = currFib;
    currFib = nextFib;
  }

  return currFib === num;
}

console.log(isFibonacciNumber(5));
console.log(isFibonacciNumber(7));
console.log(isFibonacciNumber(13));
console.log(isFibonacciNumber(34));
