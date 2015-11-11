var defaultNames = {
  "article": "amArticle"
};

// 将amazeui-vue组件注册到全局
exports.install = function(Vue, options) {

  Vue.component(defaultNames['article'], function(resolve) {
    require(['./article/article.vue'], resolve);
  });

  Vue.component('lead', function(resolve) {
    require(['./article/lead.vue'], resolve);
  });

};
