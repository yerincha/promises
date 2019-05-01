/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */


// var promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('foo');
//   }, 300);
// });

// promise1.then(function(value) {
//   console.log(value);
//   // expected output: "foo"
// });

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var { getGitHubProfileAsync } = require('./promisification.js');


var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  return fs.readFileAsync(readFilePath, 'utf8')
    .then((text) => {
      return getGitHubProfileAsync(text.split('\n')[0]);
    })
    .then((body) => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(body));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
