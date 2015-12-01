import amAlert        from './alert/alert.vue';
import amArticle      from './article/article.vue';
import lead           from './article/lead.vue';
import badge          from './badge/badge.vue';
import breadcrumb     from './breadcrumb/breadcrumb.vue';
import amButton       from './button/button.vue';
import buttonGroup    from './button/button-group.vue';
import amForm         from './form/form.vue';
import amInput        from './form/input.vue';
import checkbox       from './form/checkbox.vue';
import radio          from './form/radio.vue';
import amSelect       from './form/select.vue';
import grid           from './grid/grid.vue';
import column         from './grid/column.vue';
import container      from './grid/container.vue';
import icon           from './icon/icon.vue';
import list           from './list/list.vue';
import modal          from './modal/modal.vue';
import alert          from './modal/alert.vue';
import confirm        from './modal/confirm.vue';
import prompt         from './modal/prompt.vue';
import panel          from './panel/panel.vue';
import pagination     from './pagination/pagination.vue';
import dateTimePicker from './datetimepicker/datetimepicker.vue';
import dateTimeInput  from './datetimepicker/datetimeinput.vue';
import amNav          from './nav/nav.vue';
import topbar         from './topbar/topbar.vue';
import tab            from './tab/tab.vue';

let components = {
  amAlert,
  amArticle,
  lead,
  badge,
  breadcrumb,
  amButton,
  buttonGroup,
  amForm,
  amInput,
  checkbox,
  radio,
  amSelect,
  grid,
  column,
  container,
  icon,
  list,
  modal,
  alert,
  confirm,
  prompt,
  panel,
  pagination,
  dateTimePicker,
  dateTimeInput,
  amNav,
  topbar,
  tab
};

export default function(Vue) {

  for (let name in components) {
    Vue.component(name, components[name]);
  }

}
