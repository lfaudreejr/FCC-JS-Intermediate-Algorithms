function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(array, toFlat) {
    return array.concat(
      Array.isArray(toFlat) ? steamrollArray(toFlat) : toFlat
    );
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
