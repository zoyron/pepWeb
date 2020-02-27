let chokidar = require('chokidar');

let watcher = chokidar.watch('/home/teddy/pepCoding/web/Lecture-3/', {ignored: /^\./, persistent: true});

watcher.on('add', function(path) {console.log('File', path, 'has been added');})
watcher.on('change', function(path) {console.log('File', path, 'has been changed');})
watcher.on('unlink', function(path) {console.log('File', path, 'has been removed');})
watcher.on('error', function(error) {console.error('Error happened', error);})