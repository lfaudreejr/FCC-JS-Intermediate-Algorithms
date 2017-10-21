function dropElements(arr, func) {
  // Drop them elements.
  var index = arr.findIndex(func);

  if (index > -1) {
    var output = arr.splice(index, arr.length);
    return output;
  } else {
    return [];
  }
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
