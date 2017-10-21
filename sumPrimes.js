function sumPrimes(num) {
  var count = 0;
  var primes = 0;
  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        count++;
      } else if (i === j && count === 0) {
        primes += i;
      }
    }
    count = 0;
  }
  return primes;
}

sumPrimes(10);
