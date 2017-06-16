function sumAll(arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  for(i = max - 1; i >= min; i--){
    max += i; 
  }
  return max;
}

sumAll([1, 4]);