var fs = require('fs');
var path = require('path');

function emptydir(dirpath) {
  fs.readdir(dirpath, (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach((file) => {
        var _path = path.resolve(dirpath, `./${file}`);
        fs.unlink(_path, (err) => {
          if (err) {
            throw err;
          }
        });
      });
    }
  });
}

return emptydir(path.resolve(__dirname, '../examples/public/app'));
