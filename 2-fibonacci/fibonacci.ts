function isFibonacciNumber(num: number): boolean {
  let prevFib = 0;
  let currFib = 1;

  while (currFib < num) {
    const nextFib = prevFib + currFib;
    prevFib = currFib;
    currFib = nextFib;
  }

  return currFib === num;
}
