var fs = require("fs");

function stringRead(str) {
  var newString = "";
  var k = 1;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i - 1)) {
      k++
      if (str.charAt(i + 1) == " " || str.charAt(i + 1) == "") {
        newString += k + str.charAt(i) + " ";
        k = 1;
      }
    }
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

  
  fs.writeFile('mynewfile1.txt', stringRead(data), function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
});