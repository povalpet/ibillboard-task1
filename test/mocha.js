var exec, fs;

fs = require('fs');
exec = require('child_process').exec;

var getDirectoryFiles, getTestFiles;

getDirectoryFiles = function(directory, callback) {
  var file, filePath, files, stats, _i, _len;
  files = fs.readdirSync(directory);
  for (_i = 0, _len = files.length; _i < _len; _i++) {
    file = files[_i];
    filePath = directory + '/' + file;
    stats = fs.statSync(filePath);
    if (stats.isFile()) {
      callback(filePath);
    }
    if (stats.isDirectory()) {
      getDirectoryFiles(filePath, callback);
    }
  }
};

getTestFiles = function() {
  var files;
  files = ['test/init.js'];
  getDirectoryFiles('.', function(testFilePath) {
    var filePath;
    if ( testFilePath.indexOf('./node_modules') === 0 ||'_test.js' !== testFilePath.slice(-8)) {
      return;
    }
    files.push(testFilePath);
  });
  return files;
};

exports.run = function(callback) {
  var command, testFiles;
  testFiles = getTestFiles();
  command = "node node_modules/mocha/bin/mocha --ui bdd --globals logger --colors " + (testFiles.join(' '));
  return exec(command, function(err, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
      console.error(stderr);
    }
    return callback(err, stdout, stderr);
  });
};
