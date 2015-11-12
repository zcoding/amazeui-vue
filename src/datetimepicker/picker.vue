<template>

<div>
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="prev">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" @click="show">
        <div class="am-datepicker-select">{{ text }}</div>
      </th>
      <th class="am-datepicker-next" @click="next">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td colspan="7"><slot></slot></td>
    </tr>
    </tbody>
  </table>
</div>

</template>

<script>

import utils from '../utils';

export default {

  props: {
    text: {
      type: String,
      required: true
    },
    show: {
      type: Function,
      required: true
    },
    prev: {
      type: Function,
      required: true
    },
    next: {
      type: Function,
      required: true
    }
  }

};

</script>
