var Vue = require('vue');
var VueRouter = require('vue-router');
var routes = require('./routes');

Vue.config.debug = true;

Vue.use(require('amazeui-vue').install);
Vue.use(VueRouter);

var router = new VueRouter();

var App = Vue.extend({});

router.map(routes);

router.start(App, '#app-main');
