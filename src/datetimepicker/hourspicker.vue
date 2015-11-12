<template>

<div class="am-datepicker-hours">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="subtract">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" @click="showFunc">
        <div class="am-datepicker-select">{{ showText }}</div>
      </th>
      <th class="am-datepicker-next" @click="add">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="7">
        <span class="am-datepicker-hour" v-for="h in hours" @click="setSelectedHour">{{ h < 10 ? '0' + h + ':00' : h + ':00' }}</span>
      </td>
    </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {

  data() {
    return {
      showText: '',
      hours: []
    };
  },

  methods: {
    subtract() {},

    showFunc() {},

    add() {},

    setSelectedHour() {}
  }

};

</script>
