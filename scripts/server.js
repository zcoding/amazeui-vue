var koa = require('koa');
var serve = require('koa-static');
var route = require('koa-route');
var fs = require('fs');
var chalk = require('chalk');
var open = require("open");

var path = require('path');

var app = koa();

app.use(serve(path.resolve(__dirname, '../examples/public')));

app.use(route.get('/', function *(next) {

  this.type = 'text/html';
  this.body = fs.createReadStream(path.resolve(__dirname, '../examples/index.html'));

}));

app.listen(10240, function() {
  console.log(chalk.green('Now have a look at the examples...'));
  open('http://localhost:10240');
});
