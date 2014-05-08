"use strict";

var Mocha, exec, fs, mocha, path;

Mocha = require('mocha');

fs = require('fs');

path = require('path');

exec = require('child_process').exec;

mocha = new Mocha({
  ui: 'tdd',
  globals: ['logger']
});

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
  files = ['test/init.coffee'];
  getDirectoryFiles('.', function(testFilePath) {
    var filePath;
    if ('_test.coffee' !== testFilePath.slice(-12)) {
      return;
    }
    filePath = testFilePath.slice(0, -12) + '.coffee';
    return files.push(testFilePath);
  });
  return files;
};

exports.run = function(callback) {
  var command, testFiles;
  testFiles = getTestFiles();
  command = "node node_modules/mocha/bin/mocha --ui tdd --globals logger --colors " + (testFiles.join(' '));
  return exec(command, function(err, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
      console.error(stderr);
    }
    return callback(err, stdout, stderr);
  });
};
