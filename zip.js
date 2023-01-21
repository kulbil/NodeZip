var fs = require("fs");

function stringRead(str) {
  var newString = "";
  var k = 1;
  for (var i = 0; i < str.length; i++) {
<<<<<<< HEAD:zip.js
    if (str.charAt(i) == str.charAt(i - 1)) {
      k++
      if (str.charAt(i + 1) == " " || str.charAt(i + 1) == "") {
        newString += k + str.charAt(i) + " ";
        k = 1;
      }
    }
=======
    stringArray.push(str.charAt(i));
  }

  for (var j = 0; j < stringArray.length; j++) {
    if(stringArray[j] == " " || j == stringArray.length - 1) {
      newString += (k - 1) + stringArray[j - 1] + stringArray[j];
      k = 0;
      console.log(newString); 
    }
    k++
    
>>>>>>> 3536ef2495787049d6e18427571cf99c62f050c2:script.js
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