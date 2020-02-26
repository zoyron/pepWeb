const fs = require('fs');
function displayList(src) {
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    console.log(src + "*");
  }
  else {
    console.log("I am a directory");
  }
}

displayList('/home/teddy/pepCoding/web/Lecture-3/facts/fspos.js')