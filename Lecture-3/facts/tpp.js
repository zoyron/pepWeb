const viewFile = require('./commands/view');
const treefyFile = require('./commands/treefy');
const untreefyFile = require('./commands/untreefy');
const helpFile = require('./commands/help');
const monitorFile = require('./commands/monitor');

switch(process.argv[2]) {
  case "view" :
    viewFile.myFunc(process.argv[3], process.argv[4]);
    break;
  case "untreefy" :
    treefyFile.myFunc();
    break;
  case "treefy" :
    untreefyFile.myFunc();
    break;
  case "monitor" :
    monitorFile.myFunc();
    break;
  case "help":
    helpFile.myFunc();
    break;
  default :
    console.log("wrong command");
    break;
}