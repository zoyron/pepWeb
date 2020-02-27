const fs = require('fs-extra');
const path = require('path');

function treefy(src) {
  let tempObj = {};
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    tempObj[path.basename(src)] = "temp data";
  }
  else {
    let tempChildren = fs.readdirSync(src);
    tempObj.children = [];
    tempObj.folderName = path.basename(src);
    for(let i = 0;i<tempChildren.length;i++) {
      tempObj.children.push(treefy(path.join(src,tempChildren[i])));
    }
  }
  // console.log(tempObj);
  return tempObj;
}

function displayTreefy(rt) {
  console.log(rt.folderName + " and children folders are : " );
  if(rt.children !== undefined) {
    for(let i = 0;i<rt.children.length;i++) {
      console.log(rt.children[i].folderName);
    }
    for(let i = 0;i<rt.children.length;i++) {
      displayTreefy(rt.children[i]);
    }
  }
}

let root = treefy('/home/teddy/pepCoding/web/Lecture-3/src/d10');
//console.log(root);
displayTreefy(root);