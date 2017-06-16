function diffArray(arr1, arr2) {
  var newArr = [];
  var length = arr1.length;
  
  if(arr1.length < arr2.length){
    length = arr2.length;
  }
  // Same, same; but different.
  for(var i = 0; i < length; i++)
  {
    if(~(arr1.indexOf(arr2[i])) == false && arr2[i] !== undefined){
        newArr.push(arr2[i]);
    }
    if(~(arr2.indexOf(arr1[i])) == false && arr1[i] !== undefined){
        newArr.push(arr1[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
