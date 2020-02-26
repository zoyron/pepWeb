const fs = require('fs');
const path = require('path');
function displayList(src) {
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    console.log(src + "*");
  }
  else {
    console.log(src);
    let children = fs.readdirSync(src);
    for(let i = 0;i<children.length;i++) {
      let newPath = path.join(src,children[i]);
      displayList(newPath);
    }
  }
}

displayList('/home/teddy/pepCoding/web/Lecture-3/src/d10')