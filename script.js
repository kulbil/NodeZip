var fs = require("fs");

function stringRead(str) {
  var stringArray = [];
  var newString = "";
  var k;
  for (var i = 0; i < str.length; i++) {
    stringArray.push(str.charAt(i));
  }

  for (var j = 0; j < stringArray.length; j++) {
    if(stringArray[j] == " " || j == stringArray.length - 1) {
      newString += (k - 1) + stringArray[j - 1] + stringArray[j];
      k = 0;
      console.log(newString); 
    }
    k++
    
  }
  return newString;
}

fs.readFile('LongDoc.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log(stringRead(data));

  /*
  fs.writeFile('mynewfile1.txt', data, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
  */
});