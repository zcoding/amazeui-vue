<template>

<div class="am-datepicker-months">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" v-on:click="prevYear">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" v-on:click="showYears">
        <div class="am-datepicker-select">
          {{ viewDate.getFullYear() }} 年
        </div>
      </th>
      <th class="am-datepicker-next" v-on:click="nextYear">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="7">
          <span class="am-datepicker-month" v-for="month in months" v-bind:class="{'am-active': month.isActive}" v-on:click="setViewMonth(month)">
            {{ month.show | localMonth }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {

  props: {
    selectedDate: {
      twoWay: true,
      required: true
    },
    viewDate: {
      twoWay: true,
      required: true
    }
  },

  methods: {
    prevYear() {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.valueOf());
      newDate.setFullYear(viewDate.getFullYear() - 1);
      this.viewDate = newDate;
    },

    showYears() {
      this.$dispatch('view-change', {
        days: false,
        months: false,
        years: true
      });
    },

    nextYear() {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.valueOf());
      newDate.setFullYear(viewDate.getFullYear() + 1);
      this.viewDate = newDate;
    },

    setViewMonth(month) {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setMonth(month.show);
      this.viewDate = newDate;

      this.$dispatch('view-change', {
        days: true,
        months: false,
        years: false
      });
    }
  },

  computed: {
    months() {
      var month = this.selectedDate.getMonth();
      var year = this.selectedDate.getFullYear();
      var months = [];
      // var minDate = this.props.minDate && fecha.parse(this.props.minDate);
      // var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);
      var prevMonth = new Date(year, month);

      for (var i = 0; i < 12; ++i) {
        var month = {
          show: i,
          isActive: false
        };

        if (this.viewDate.getFullYear() === year && i === month) {
          month.isActive = true;
        }

        // set className disabled
        // if ((minDate && prevMonth.valueOf() < minDate)
        //   || (maxDate && prevMonth.valueOf() > maxDate)) {
        //   classes[this.setClassNamespace('disabled')] = true;
        // }

        months.push(month);

      }

      return months;
    }
  },

  filters: {
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
  }

};

</script>
