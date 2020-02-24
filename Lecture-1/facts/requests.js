const opn = require('opn');
const {exec} = require("child_process");
function takeRequest(data, success, failure) {
  if(data == 'fb') {
    success();
  }
  else
    failure();
}

function success() {
  console.log("your request was completed");
  //opn('https://www.facebook.com/');
  exec('google-chrome https://www.facebook.com/')
}

function failure() {
  console.log("some error occured");
}

takeRequest('fb', success, failure);