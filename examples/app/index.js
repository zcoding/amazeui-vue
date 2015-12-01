import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import amazeuiVue from 'amazeui-vue';

Vue.config.debug = true;

Vue.use(amazeuiVue);
Vue.use(VueRouter);

var router = new VueRouter();

var App = Vue.extend({});

router.map(routes);

router.start(App, '#app-main');
