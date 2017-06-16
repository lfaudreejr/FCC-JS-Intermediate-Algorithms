
function convertHTML(str) {
  // &colon;&rpar;
  var regex = /[(&)(<)(>)(")(')]/g;
  
  var newStr = "";
  
  for(var i = 0; i < str.length; i++){
    if (str.match(regex)) {
     
      switch( str[i] ){
        case '&':
          newStr += str.replace(regex, '&amp;');
          break;
        case '<':
          newStr += str.replace(regex, '&lt;');
          break;
        case '>':
          newStr += str.replace(regex, '&gt;');
          break;
        case '"':
          newStr += str.replace(regex, '&quot;');
          break;
        case "'":
          newStr += str.replace(regex, '&apos;');
          break;
          
      }
    } else {
      newStr = str;
    }
    
  }
  
  return newStr;
}

convertHTML("Dolce & Gabbana");
