const fs = require('fs');
const path = require('path');

module.exports.myFunc = function() {
  let src = arguments[0];
  let mode = arguments[1];
  if(mode == "-t")
    viewAsTree(src, "");
  else if(mode == "-f")
    viewAsFlatFile(src);
  else
    console.log("Wrong mode entered");
}

function viewAsTree(src, emp) {
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
      viewAsTree(newPath,emp+ "\t");
    }
  }
}

function viewAsFlatFile(src) {
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    console.log(src + "*");
  }
  else {
    console.log(src);
    let children = fs.readdirSync(src);
    for(let i = 0;i<children.length;i++) {
      let newPath = path.join(src,children[i]);
      viewAsFlatFile(newPath);
    }
  }
}