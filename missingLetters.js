function fearNotLetter(str) {
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var returnStr;
  
  //iterate through str and check each index against abc index
  for(var i = 0; i < str.length; i++){
    if(str[0] !== 'a'){return undefined;} 
    if(str[i] !== abc[i]){
      returnStr = abc[i];
      return returnStr;
    }
  }
  
  
  return str;
}

fearNotLetter("abce");