// Repeat a String
// Free Code Camp Exercise
// Note: Times out in console with a while loop

function repeatStringNumTimes(str, num) {
  var repeatString = "";
  for (var i = 0; i < num; i++){
    repeatString += str;
  }
  return repeatString;
}

repeatStringNumTimes("abc", 3);

// returns "abcabcabc"
