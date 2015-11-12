<template>

<div class="am-datepicker-days" style={this.props.style}>
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="subtractMonth">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colSpan="5" @click="showMonths">
        <div class="am-datepicker-select">
          {{ viewDate.getMonth() }}
          {{ viewDate.getFullYear() }}
        </div>
      </th>
      <th class="am-datepicker-next" @click="addMonth">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    <tr>
      <th class="am-datepicker-dow" v-for="day in weeks">{{ day | locale }}</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="row in days">
        <td v-for="day in row" @click="setSelectedDate(day)">{{ day }}</td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {

  props: {
    weekStart: {
      type: Number,
      default: 7
    }

  },

  data() {
    return {
      viewDate: new Date(),
      days: [],
      weeks: [7, 1, 2, 3, 4, 5, 6]
    };
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
    }
  },

  methods: {

    renderDays() {
      var row;
      var i;
      var _ref;
      var _i;
      var _len;
      var prevY;
      var prevM;
      var classes = {};
      var html = [];
      var cells = [];
      var weekStart = this.props.weekStart || this.props.locale.weekStart;

      var weekEnd = ((weekStart + 6) % 7);

      var d = this.props.viewDate;
      var year = d.getFullYear();
      var month = d.getMonth();
      var selectedDate = this.props.selectedDate;

      var currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0, 0).valueOf();

      var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
      var day = dateUtils.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

      prevMonth.setDate(day);
      prevMonth.setDate(day - (prevMonth.getDay() - weekStart + 7) % 7);

      var nextMonth = new Date(prevMonth);

      nextMonth.setDate(nextMonth.getDate() + 42);
      nextMonth = nextMonth.valueOf();

      var minDate = this.props.minDate && fecha.parse(this.props.minDate);
      var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);

      while (prevMonth.valueOf() < nextMonth) {
        classes[this.prefixClass('day')] = true;

        prevY = prevMonth.getFullYear();
        prevM = prevMonth.getMonth();


        // set className old new
        if ((prevM < month && prevY === year) || prevY < year) {
          classes[this.prefixClass('old')] = true;
        } else if ((prevM > month && prevY === year) || prevY > year) {
          classes[this.prefixClass('new')] = true;
        }

        // set className active
        if (prevMonth.valueOf() === currentDate) {
          classes[this.setClassNamespace('active')] = true;
        }

        // set className disabled
        if ((minDate && prevMonth.valueOf() < minDate)
            || (maxDate && prevMonth.valueOf() > maxDate)) {
          classes[this.setClassNamespace('disabled')] = true;
        }

         // week disabled
        if (this.props.daysOfWeekDisabled) {
          _ref = this.props.daysOfWeekDisabled;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            if (prevMonth.getDay() === this.props.daysOfWeekDisabled[i]) {
              classes[this.setClassNamespace('disabled')] = true;
              break;
            }
          }
        }

        cells.push(
          `<td
            key={prevMonth.getMonth() + '-' + prevMonth.getDate()}
            className={classNames(classes)}
            onClick={this.props.setSelectedDate}>
            {prevMonth.getDate()}
          </td>`
        );

        // add tr
        if (prevMonth.getDay() === weekEnd) {
          row = `<tr key={prevMonth.getMonth() + '-' + prevMonth.getDate()}>{cells}</tr>`;
          html.push(row);
          cells = [];
        }

        classes = {};
        prevMonth.setDate(prevMonth.getDate() + 1);
      }

      return html;
    },

    subtractMonth() {},

    showMonths() {},

    addMonth() {}
  }
};

</script>
