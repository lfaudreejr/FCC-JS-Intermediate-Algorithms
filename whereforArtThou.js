
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  
  //iterate over two arrays and return matching prop/value pairs

  var keys = Object.keys(source);
  
  var filtered = collection.filter(function(obj){
    for(var i = 0; i < keys.length; i++){
      if(!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]){
        return false;
      }
    }
    return true;
  });
  
  filtered.forEach(function(obj) {
    arr.push(obj);
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });