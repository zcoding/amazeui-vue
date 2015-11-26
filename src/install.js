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
  , "dateTimeInput": "dateTimeInput"
  , "dateTimePicker": "dateTimePicker"
};

// 将amazeui-vue组件注册到全局
exports.install = function(Vue, options) {

  options = options || {};

  for (var p in options) {
    defaultNames[p] = options[p];
  }

  Vue.component(defaultNames['article'], require('./article/article.vue'));

  Vue.component(defaultNames['lead'], require('./article/lead.vue'));

  Vue.component(defaultNames['amAlert'], require('./alert/alert.vue'));

  Vue.component(defaultNames['badge'], require('./badge/badge.vue'));

  Vue.component(defaultNames['breadcrumb'], require('./breadcrumb/breadcrumb.vue'));

  Vue.component(defaultNames['button'], require('./button/button.vue'));

  Vue.component(defaultNames['buttonGroup'], require('./button/button-group.vue'));

  Vue.component(defaultNames['grid'], require('./grid/grid.vue'));

  Vue.component(defaultNames['column'], require('./grid/column.vue'));

  Vue.component(defaultNames['form'], require('./form/form.vue'));

  Vue.component(defaultNames['input'], require('./form/input.vue'));

  Vue.component(defaultNames['checkbox'], require('./form/checkbox.vue'));

  Vue.component(defaultNames['radio'], require('./form/radio.vue'));

  Vue.component(defaultNames['select'], require('./form/select.vue'));

  Vue.component(defaultNames['list'], require('./list/list.vue'));

  Vue.component(defaultNames['icon'], require('./icon/icon.vue'));

  Vue.component(defaultNames['modal'], require('./modal/modal.vue'));

  Vue.component(defaultNames['alert'], require('./modal/alert.vue'));

  Vue.component(defaultNames['confirm'], require('./modal/confirm.vue'));

  Vue.component(defaultNames['prompt'], require('./modal/prompt.vue'));

  Vue.component(defaultNames['pagination'], require('./pagination/pagination.vue'));

  Vue.component(defaultNames['panel'], require('./panel/panel.vue'));

  Vue.component(defaultNames['panel'], require('./panel/panel.vue'));

  Vue.component(defaultNames['dateTimePicker'], require('./datetimepicker/datetimepicker.vue'));

  Vue.component(defaultNames['dateTimeInput'], require('./datetimepicker/datetimeinput.vue'));

};
