module.exports.myFunc = function() {
  let src = arguments[0];
  let mode = arguments[1];
  if(mode == "-t")
    viewAsTree(src);
  else if(mode == "-f")
    viewAsFlatFile(src);
  else
    console.log("Wrong mode entered");
}

function viewAsTree() {
  console.log("view as tree is working");
}

function viewAsFlatFile() {
  console.log("view as flat file is working");
}