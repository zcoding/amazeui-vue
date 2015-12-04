<template>

<div class="am-datepicker-years">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" v-on:click="prevDecade">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5">
        <div class="am-datepicker-select">
          {{ showYear }}
        </div>
      </th>
      <th class="am-datepicker-next" v-on:click="nextDecade">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="7">
          <span class="am-datepicker-year" v-for="year in years" v-bind:class="{'am-datepicker-old': year.isOld, 'am-datepicker-new': year.isNew, 'am-active': year.isActive}" v-on:click="setViewYear(year)">
            {{ year.show }}
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

  computed: {
    years() {

      var years = [];
      var i = -1;
      var year = parseInt(this.viewDate.getFullYear() / 10, 10) * 10;

      year--;

      while (i < 11) {

        var _year = {
          show: year,
          isOld: false,
          isNew: false,
          isActive: false
        };

        if (i === -1) {
          _year.isOld = true;
        } else if (i === 10) {
          _year.isNew = true;
        }

        if (this.selectedDate.getFullYear() === year) {
          _year.isActive = true;
        }

        years.push(_year);

        year++;
        i++;
      }

      return years;
    },

    showYear() {
      var year = parseInt(this.viewDate.getFullYear() / 10, 10) * 10;
      var addYear = year + 9;
      return year + '-' + addYear;
    }
  },

  methods: {
    prevDecade() {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.valueOf());
      newDate.setFullYear(viewDate.getFullYear() - 10);
      this.viewDate = newDate;
    },

    nextDecade() {
      var viewDate = this.viewDate;
      var newDate = new Date(viewDate.valueOf());
      newDate.setFullYear(viewDate.getFullYear() + 10);
      this.viewDate = newDate;
    },

    setViewYear(year) {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setFullYear(year.show);
      this.viewDate = newDate;

      this.$dispatch('view-change', {
        days: false,
        months: true,
        years: false
      });
    }

  }

};

</script>
