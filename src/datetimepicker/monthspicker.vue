<template>

<div class="am-datepicker-months">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="prevYear">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" @click="showYears">
        <div class="am-datepicker-select">
          {{ showYear }}
        </div>
      </th>
      <th class="am-datepicker-next" @click="nextYear">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="7">
          <span class="am-datepicker-month" v-for="month in months" :class="{'am-active': month.isActive}">{{ month.show }}</span>
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
      default() {
        return new Date();
      }
    }
  },

  data() {
    return {
      viewDate: new Date()
    };
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
    },

    showYear() {
      var year = parseInt(this.viewDate.getFullYear() / 10, 10) * 10;
      var addYear = year + 9;
      return year + '-' + addYear;
    }
  }

};

</script>
