<template>

<div class="am-datepicker-body">
  <div class="am-datepicker-time-wrapper">
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
          <div class="am-datepicker-time-box">
            <strong @click="showHours">{time.hour}</strong><em>:</em><strong @click="showMinutes">{time.minute}</strong>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <hours-picker>
  <minutes-picker>
</div>

</template>

<script>

import minutesPicker from './minutespicker.vue';
import hoursPicker from './hourspicker.vue';

export default {

  components: {
    minutesPicker,
    hoursPicker
  },

  methods: {
    showHours() {},

    showMinutes() {}
  }

};

</script>
