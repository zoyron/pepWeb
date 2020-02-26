const fs = require('fs-extra');
const path = require('path');
let cnt = 0;
function untreefy(src,dest) {
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    fs.copySync(src,dest+'/dest'+cnt+'.txt');
    cnt++;
  }
  else {
    let children = fs.readdirSync(src);
    for(let i = 0;i<children.length;i++) {
      let newPath = path.join(src,children[i]);
      untreefy(newPath,dest);
    }
  }
}

untreefy('/home/teddy/pepCoding/web/Lecture-3/src/d10','/home/teddy/pepCoding/web/Lecture-3');