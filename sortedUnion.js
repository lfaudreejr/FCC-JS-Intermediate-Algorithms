
function uniteUnique(arr) {
  var args = [].slice.call(arguments);
  
  var flatten = args.reduce ( function(acc, val) {
      return acc.concat ( val.filter( function(x) {
        return acc.indexOf( x ) === -1;
        })
      );
    });
  
  return flatten;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
