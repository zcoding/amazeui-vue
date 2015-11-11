var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

var handle = {};

var methods = ['unlink', 'rmdir'];

methods.forEach((m, i) => {
  handle[m] = (_path) => {
    return new Promise((_resolve, _reject) => {
      fs[m](_path, (err) => {
        if (err)
          _reject(err);
        else
          _resolve(_path);
      });
    });
  };
});

handle.readFile = (filename) => {
  return new Promise((_resolve, _reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        _reject(err);
      } else {
        _resolve(data);
      }
    });
  });
};

handle.mkdir = (_path) => {
  return new Promise((_resolve, _reject) => {
    fs.mkdir(_path, (err) => {
      if (err && err.code !== 'EEXIST')
        _reject(err);
      else
        _resolve(_path);
    });
  });
};

handle.stat = (path) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stat) => {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
};

handle.readdir = (dirpath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirpath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

handle.emptydir = (dirpath) => {
  return handle.readdir(dirpath)
    .then((files) => {
      return Promise.all(files.map((file) => {
        var _path = path.resolve(dirpath, `./${file}`);
        return handle
          .stat(_path)
          .then((stat) => {
            if (stat.isDirectory()) {
              return handle.emptydir(_path)
                .then(() => {
                  return handle.rmdir(_path);
                });
            } else {
              return handle.unlink(_path);
            }
          });
      }));
    })
    .then(dirpath)
    .catch((err) => {
      console.error(chalk.red(err));
    });
};

handle.rmdirp = (dirpath) => {
  return handle.emptydir(dirpath).then(handle.rmdir);
};

handle.mkdirp = (dirpath) => {
  return new Promise((_resolve, _reject) => {
    fs.mkdir(dirpath, (err) => {
      if (!err) {
        _resolve(dirpath);
      } else {
        switch(err.code) {
          case 'EEXIST':
            _resolve(dirpath);
            break;
          case 'ENOENT':
            handle.mkdirp(path.dirname(dirpath)).then(() => {
              return handle.mkdirp(dirpath);
            }).then(() => {
              _resolve(dirpath);
            });
            break;
          default:
            _reject(err);
        }
      }
    });
  });
};

handle.copy = (src, dest) => {
  return new Promise((_resolve, _reject) => {
    var reader = fs.createReadStream(src);

    reader.on('error', (err) => { _reject(err); });

    var writer = fs.createWriteStream(dest);

    writer.on('error', (err) => { _reject(err); });

    writer.on('finish', () => { _resolve(dest); });

    reader.pipe(writer);
  });
}

handle.createFile = (_path) => {
  return new Promise((_resolve, _reject) => {
    fs.open(_path, 'w', (err, fd) => {
      if (err) {
        _reject(err);
      } else {
        fs.write(fd, '', 0, 'utf8', (err) => {
          if (err) {
            _reject(err);
          } else {
            _resolve(_path);
          }
        });
      }
    });
  });
};

handle.writeFile = (_path, data) => {
  return new Promise((_resolve, _reject) => {
    fs.writeFile(_path, data, 'utf8', (err) => {
      if (err) {
        _reject(err);
      } else {
        _resolve(data);
      }
    });
  });
};

export default handle;
