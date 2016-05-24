var amAlert        = require('./alert/alert.vue');
var amArticle      = require('./article/article.vue');
var lead           = require('./article/lead.vue');
var badge          = require('./badge/badge.vue');
var breadcrumb     = require('./breadcrumb/breadcrumb.vue');
var amButton       = require('./button/button.vue');
var buttonGroup    = require('./button/button-group.vue');
var amForm         = require('./form/form.vue');
var amInput        = require('./form/input.vue');
var checkbox       = require('./form/checkbox.vue');
var radio          = require('./form/radio.vue');
var amSelect       = require('./form/select.vue');
var grid           = require('./grid/grid.vue');
var column         = require('./grid/column.vue');
var container      = require('./grid/container.vue');
var icon           = require('./icon/icon.vue');
var list           = require('./list/list.vue');
var modal          = require('./modal/modal.vue');
var alert          = require('./modal/alert.vue');
var confirm        = require('./modal/confirm.vue');
var prompt         = require('./modal/prompt.vue');
var panel          = require('./panel/panel.vue');
var pagination     = require('./pagination/pagination.vue');
var dateTimePicker = require('./datetimepicker/datetimepicker.vue');
var dateTimeInput  = require('./datetimepicker/datetimeinput.vue');
var amNav          = require('./nav/nav.vue');
var topbar         = require('./topbar/topbar.vue');
var tab            = require('./tab/tab.vue');

var components = {
  amAlert: amAlert,
  amArticle: amArticle,
  lead: lead,
  badge: badge,
  breadcrumb: breadcrumb,
  amButton: amButton,
  buttonGroup: buttonGroup,
  amForm: amForm,
  amInput: amInput,
  checkbox: checkbox,
  radio: radio,
  amSelect: amSelect,
  grid: grid,
  column: column,
  container: container,
  icon: icon,
  list: list,
  modal: modal,
  alert: alert,
  confirm: confirm,
  prompt: prompt,
  panel: panel,
  pagination: pagination,
  dateTimePicker: dateTimePicker,
  dateTimeInput: dateTimeInput,
  amNav: amNav,
  topbar: topbar,
  tab: tab
};

module.exports = function install(Vue) {
  for (var name in components) {
    Vue.component(name, components[name]);
  }
};
