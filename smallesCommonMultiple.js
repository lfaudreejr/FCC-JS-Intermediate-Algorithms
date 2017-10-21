function smallestCommons(arr) {
  var largest = arr[0] < arr[1] ? arr[1] : arr[0];
  var smallest = arr[0] < arr[1] ? arr[0] : arr[1];
  var numbers = [];

  for (var i = smallest; i <= largest; i++) {
    numbers.push(i);
  }

  var score = 0;
  var bool = false;
  for (var j = 1; !bool; j++) {
    score = largest * j;
    var evens = numbers.every(function(n) {
      return score % n === 0;
    });
    if (evens) {
      bool = true;
    }
  }

  return score;
}

smallestCommons([1, 5]);
