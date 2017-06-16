function convertToRoman(num) {
  //store decimal and romans for comparison
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var decimalNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  //string to return
  var romanNumber = "";
  //iterate over romans
  for(var i = 0; i < decimalNumeral.length; i++)
  {
    //subtract matching decimal values and add corresponding roman to string
    while(num >= decimalNumeral[i])
      {
        romanNumber += romanNumeral[i];
        num -= decimalNumeral[i];
      }
    
  }
  
 return romanNumber;
}

convertToRoman(36);