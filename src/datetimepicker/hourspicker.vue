<template>

<div class="am-datepicker-hours">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" v-on:click="prevHour">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5">
        <div class="am-datepicker-select">{{ showText.hour + ':' + showText.minute }}</div>
      </th>
      <th class="am-datepicker-next" v-on:click="nextHour">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="7">
        <span class="am-datepicker-hour" v-for="h in hours" v-bind:class="{'am-active': h.isActive}" v-on:click="setSelectedHour(h)" v-text="h.show < 10 ? '0' + h.show + ':00' : h.show + ':00'"></span>
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
    showText() {
      var hour = this.viewDate.getHours();
      var minute = this.viewDate.getMinutes();
      if (minute < 10) {
        minute = '0' + minute;
      }
      if (hour < 10) {
        hour = '0' + hour;
      }
      return {
        hour: hour,
        minute: minute
      };
    },

    hours() {
      var hour = this.selectedDate.getHours();
      var hours = [];
      for (var i = 0; i < 24; ++i) {
        var _hour = {
          show: i,
          isActive: false
        };
        if (i === hour) {
          _hour.isActive = true;
        }
        hours.push(_hour);
      }
      return hours;
    }
  },

  methods: {
    prevHour() {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setHours(newDate.getHours() - 1);
      this.viewDate = newDate;
      this.selectedDate = new Date(newDate.valueOf());
    },

    nextHour() {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setHours(newDate.getHours() + 1);
      this.viewDate = newDate;
      this.selectedDate = new Date(newDate.valueOf());
    },

    setSelectedHour(hour) {
      var newDate = new Date(this.viewDate.valueOf());
      newDate.setHours(hour.show);
      this.viewDate = newDate;
      this.selectedDate = new Date(newDate.valueOf());
      this.$dispatch('view-change', {
        wrapper: true,
        hours: false,
        minutes: false
      });
    }
  }

};

</script>
