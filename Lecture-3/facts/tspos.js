const fs = require('fs');
const path = require('path');
let empStr = "";
function displayList(src, emp) {
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    let newSrc = src.split('/');
    console.log(emp+newSrc[newSrc.length - 1]+"*");
  }
  else {
    let newSrc = src.split('/');
    console.log(emp+newSrc[newSrc.length - 1]);
    let children = fs.readdirSync(src);
    for(let i = 0;i<children.length;i++) {
      let newPath = path.join(src,children[i]);
      displayList(newPath,emp+ "\t");
    }
  }
}

displayList('/home/teddy/pepCoding/web/Lecture-3/src/d10', empStr);