<template>

<div class="am-datepicker-minutes">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="subtractMinute">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5">
        <div class="am-datepicker-select">{{ showText }}</div>
      </th>
      <th class="am-datepicker-next" @click="addMinute">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="7">
        <span class="am-datepicker-minute" v-for="m in minutes" @click="setSelectedMinute">{{ m < 10 ? hour + ':0' + m : hour + ':' + m }}</span>
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
      hour: '',
      minutes: []
    };
  },

  methods: {
    subtractMinute() {},

    addMinute() {},

    setSelectedMinute() {}
  }

};

</script>
