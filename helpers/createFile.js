var mkdirp = require('mkdirp');
var fs = require('fs');

function createFile(raw_path, contents, cb) {
  const dir = process.cwd()
  let correctPath = ''
  let file = ''
  raw_path
    .split('/')
    .map((el, i) => {
      if(i === raw_path.split('/').length - 1) {
        file = el
      }else{
        correctPath = correctPath+'/'+el
      }
    })
  const path = dir + '/' + correctPath
  mkdirp(path, function (err) {
    if (err) return cb(err);
    fs.writeFile(path + '/' + file, contents, cb);
  });
}

module.exports = createFile