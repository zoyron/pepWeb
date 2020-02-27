const fs = require('fs-extra');
const path = require('path');

function treefy(src) {
  let tempObj = {};
  tempObj.isFile = false;
  let ans = fs.lstatSync(src).isDirectory();
  if(ans == false) {
    tempObj.fileName = path.basename(src);
    tempObj.fileData = "temp data";
    tempObj.isFile = true;
  }
  else {
    let tempChildren = fs.readdirSync(src);
    tempObj.folderName = path.basename(src);
    tempObj.children = [];
    for(let i = 0;i<tempChildren.length;i++) {
      tempObj.children.push(treefy(path.join(src,tempChildren[i])));
    }
  }
  console.log(tempObj);
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

let root;
module.exports.root = treefy('/home/teddy/pepCoding/web/Lecture-3/src/d10');
// console.log(root);
// displayTreefy(root);