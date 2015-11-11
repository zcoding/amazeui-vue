var defaultNames = {
  "article": "amArticle"
  , "lead": "lead"
  , "amAlert": "amAlert"
  , "badge": "badge"
  , "breadcrumb": "breadcrumb"
  , "button": "amButton"
  , "buttonGroup": "buttonGroup"
  , "grid": "grid"
  , "column": "column"
  , "form": "amForm"
  , "input": "amInput"
  , "checkbox": "amCheckbox"
  , "radio": "amRadio"
  , "select": "amSelect"
  , "list": "list"
  , "icon": "icon"
  , "modal": "modal"
  , "alert": "alert"
  , "confirm": "confirm"
  , "prompt": "prompt"
  , "pagination": "pagination"
  , "panel": "panel"
};

// 将amazeui-vue组件注册到全局
exports.install = function(Vue, options) {

  options = options || {};

  for (var p in options) {
    defaultNames[p] = options[p];
  }

  Vue.component(defaultNames['article'], function(resolve) {
    require(['./article/article.vue'], resolve);
  });

  Vue.component(defaultNames['lead'], function(resolve) {
    require(['./article/lead.vue'], resolve);
  });

  Vue.component(defaultNames['amAlert'], function(resolve) {
    require(['./alert/alert.vue'], resolve);
  });

  Vue.component(defaultNames['badge'], function(resolve) {
    require(['./badge/badge.vue'], resolve);
  });

  Vue.component(defaultNames['breadcrumb'], function(resolve) {
    require(['./breadcrumb/breadcrumb.vue'], resolve);
  });

  Vue.component(defaultNames['button'], function(resolve) {
    require(['./button/button.vue'], resolve);
  });

  Vue.component(defaultNames['buttonGroup'], function(resolve) {
    require(['./button/button-group.vue'], resolve);
  });

  Vue.component(defaultNames['grid'], function(resolve) {
    require(['./grid/grid.vue'], resolve);
  });

  Vue.component(defaultNames['column'], function(resolve) {
    require(['./grid/column.vue'], resolve);
  });

  Vue.component(defaultNames['form'], function(resolve) {
    require(['./form/form.vue'], resolve);
  });

  Vue.component(defaultNames['input'], function(resolve) {
    require(['./form/input.vue'], resolve);
  });

  Vue.component(defaultNames['checkbox'], function(resolve) {
    require(['./form/checkbox.vue'], resolve);
  });

  Vue.component(defaultNames['radio'], function(resolve) {
    require(['./form/radio.vue'], resolve);
  });

  Vue.component(defaultNames['select'], function(resolve) {
    require(['./form/select.vue'], resolve);
  });

  Vue.component(defaultNames['list'], function(resolve) {
    require(['./list/list.vue'], resolve);
  });

  Vue.component(defaultNames['icon'], function(resolve) {
    require(['./icon/icon.vue'], resolve);
  });

  Vue.component(defaultNames['modal'], function(resolve) {
    require(['./modal/modal.vue'], resolve);
  });

  Vue.component(defaultNames['alert'], function(resolve) {
    require(['./modal/alert.vue'], resolve);
  });

  Vue.component(defaultNames['confirm'], function(resolve) {
    require(['./modal/confirm.vue'], resolve);
  });

  Vue.component(defaultNames['prompt'], function(resolve) {
    require(['./modal/prompt.vue'], resolve);
  });

  Vue.component(defaultNames['pagination'], function(resolve) {
    require(['./pagination/pagination.vue'], resolve);
  });

  Vue.component(defaultNames['panel'], function(resolve) {
    require(['./panel/panel.vue'], resolve);
  });

};
