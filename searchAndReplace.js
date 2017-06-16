
function myReplace(str, before, after) {

  var re = /[A-Z]/g;
  var newAfter = "";
  var newStr = "";
  
  if(before[0].search(re) !== -1) {
    for(var i = 0; i < after.length; i++){
      if(i === 0){
        newAfter += after[0].toUpperCase();
      } else {
        newAfter += after[i];
      }
    }
    newStr = str.replace(before, newAfter);
    
  } else {
     newStr = str.replace(before, after); 
  }
  
  
  return newStr;
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");