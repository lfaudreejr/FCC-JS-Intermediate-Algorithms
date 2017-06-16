
function pairElement(str) {

  var returnArr = [];
  
  for(var i = 0; i < str.length; i++) {
    switch (str[i]){
      case 'G':
        returnArr.push(['G', 'C']);
        break;
      case 'C':
        returnArr.push(['C', 'G']);
        break;
      case 'A':
        returnArr.push(['A', 'T']);
        break;
      case 'T':
        returnArr.push(['T', 'A']);
        break;
    }
  }  
  return returnArr;
}

pairElement("GCG");