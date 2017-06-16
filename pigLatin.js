function translatePigLatin(str) {
  //store vowels
  var vowels = ['a','e','i','o','u'];
  //split the str to an array to iterate over and make changes
  var strArray = str.split("");  
  
  //iterate over each char in strArray
  for(var i = 0; i < strArray.length; i++){
    //search over each vowel to check if it matches i'th char of strArray
    for(var j = 0; j < vowels.length; j++){
      //is the current index of strArray a vowel?
      if(strArray[0] === vowels[j]){
        //then return the strArray with way added to the end
        strArray.push("w", "a", "y");
        return strArray.join("");
      } else if(strArray[i] === vowels[j]) {
        //does the current strArray position equal a vowel?
          var final = str.substr(i, str.length-1) + str.substr(0, i) + 'ay';
          return final;
      }
    }
  }
  
  return str;
}

translatePigLatin("consonant");