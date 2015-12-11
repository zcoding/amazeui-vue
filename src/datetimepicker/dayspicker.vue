<template>

<div class="am-datepicker-days">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" v-on:click="prevMonth">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" v-on:click="showMonths">
        <div class="am-datepicker-select">
          {{ viewDate.getFullYear() }} 年 {{ viewDate.getMonth() | localMonth }}
        </div>
      </th>
      <th class="am-datepicker-next" v-on:click="nextMonth">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    <tr>
      <th class="am-datepicker-dow" v-for="day in weeks">{{ day | locale }}</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="row in days">
        <td class="am-datepicker-day" v-for="day in row"
        v-bind:class="{
          'am-disabled': day.isDisabled,
          'am-active': day.isActive,
          'am-datepicker-old': day.isOld,
          'am-datepicker-new': day.isNew
        }"
        v-on:click="setSelectedDate(day)">{{ day.show }}</td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>

import {dateUtils} from '../utils';

export default {

  props: {
    selectedDate: {
      type: Date,
      twoWay: true,
      required: true
    },
    viewDate: {
      type: Date,
      twoWay: true,
      required: true
    },
    weekStart: {
      type: Number,
      default: 7
    }
  },

  data() {
    return {
      weeks: [7, 1, 2, 3, 4, 5, 6]
    };
  },

  computed: {
    days() {

      var days = [];

      var weekStart = 7;

      var weekEnd = ((weekStart + 6) % 7);

      var d = this.viewDate;
      var year = d.getFullYear();
      var month = d.getMonth();
      var selectedDate = this.selectedDate;

      var currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0, 0).valueOf();

      var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
      var day = dateUtils.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

      prevMonth.setDate(day);
      prevMonth.setDate(day - (prevMonth.getDay() - weekStart + 7) % 7);

      var nextMonth = new Date(prevMonth);

      nextMonth.setDate(nextMonth.getDate() + 42);
      nextMonth = nextMonth.valueOf();

      // var minDate = this.props.minDate;
      // var maxDate = this.props.maxDate;

      var cells = [], prevY, prevM;

      while (prevMonth.valueOf() < nextMonth) {

        prevY = prevMonth.getFullYear();
        prevM = prevMonth.getMonth();

        var day = {
          show: prevMonth.getDate(),
          isActive: false,
          isOld: false,
          isNew: false
        };

        if ((prevM < month && prevY === year) || prevY < year) {
          day.isOld = true;
        } else if ((prevM > month && prevY === year) || prevY > year) {
          day.isNew = true;
        }

        if (prevMonth.valueOf() === currentDate) {
          day.isActive = true;
        }

        // set className disabled
        // if ((minDate && prevMonth.valueOf() < minDate) || (maxDate && prevMonth.valueOf() > maxDate)) {
        // }

        // week disabled
        // if (this.props.daysOfWeekDisabled) {
        //   _ref = this.props.daysOfWeekDisabled;
        //   for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        //     i = _ref[_i];
        //     if (prevMonth.getDay() === this.props.daysOfWeekDisabled[i]) {
        //       break;
        //     }
        //   }
        // }

        cells.push(day);

        // add tr
        if (prevMonth.getDay() === weekEnd) {
          days.push(cells);
          cells = [];
        }

        prevMonth.setDate(prevMonth.getDate() + 1);
      }

      return days;
    }
  },

  filters: {
    locale(num) {
      return {
        1: '一'
        , 2: '二'
        , 3: '三'
        , 4: '四'
        , 5: '五'
        , 6: '六'
        , 7: '日'
      }[num];
    },

    localMonth(num) {
      return {
        0: '一月',
        1: '二月',
        2: '三月',
        3: '四月',
        4: '五月',
        5: '六月',
        6: '七月',
        7: '八月',
        8: '九月',
        9: '十月',
        10: '十一月',
        11: '十二月'
      }[num];
    }
  },

  methods: {

    prevMonth() {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.valueOf());
      newDate.setMonth(viewDate.getMonth() - 1);
      this.viewDate = newDate;
    },

    showMonths() {
      this.$dispatch('view-change', {
        days: false,
        months: true,
        years: false
      });
    },

    nextMonth() {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.valueOf());
      newDate.setMonth(viewDate.getMonth() + 1);
      this.viewDate = newDate;
    },

    setSelectedDate(day) {
      if (day.isDisabled) {
        return false;
      }

      var viewDate = new Date(this.viewDate.valueOf());
      if (day.isNew) {
        viewDate.setMonth(viewDate.getMonth() + 1);
      } else if (day.isOld) {
        viewDate.setMonth(viewDate.getMonth() - 1);
      }
      viewDate.setDate(day.show);
      this.viewDate = viewDate;
      this.selectedDate = new Date(viewDate.valueOf());
    }
  }
};

</script>
