const fs = require('fs-extra');
const path = require('path');
const { exec } = require("child_process");
let rt = require('./treefy').root;

function createStruct(root,foldername) {
  if(root.isFile == true) {
    fs.writeFileSync(foldername+"/"+root.fileName, root.fileData);
    console.log(foldername+"/"+root.fileName);
  }
  else {
    fs.mkdirSync(foldername);
    console.log(foldername);
    if(root.children!==undefined){
      for(let i = 0;i<root.children.length;i++) {
        if(root.children[i].isFile == false)
          createStruct(root.children[i],foldername+"/"+root.children[i].folderName);
        else
        createStruct(root.children[i],foldername);
      }
    }
    else {
      createStruct(root,foldername);
    }
  }
}
let folderName = rt.folderName;
createStruct(rt,folderName);