<template>

<div class="am-form-group" v-el:pos-obj>
  <input type="text" class="am-form-field" v-model="dateTime" v-on:click="handleClick">
</div>
<date-time-picker v-if="show" v-bind:date-time.sync="dateTimeDate" caret-displayed v-bind:style="pos"></date-time-picker>

</template>

<script>

import dateTimePicker from './datetimepicker.vue';

export default {

  props: {
    dateTime: {
      type: String,
      twoWay: true,
      required: true
    }
  },

  components: {
    dateTimePicker
  },

  data() {
    var dateTimeDate = new Date(this.dateTime);
    return {
      show: false,
      pos: {
        "top": '',
        "left": '',
        "position": 'absolute',
        "z-index": 1120
      },
      dateTimeDate: dateTimeDate
    };
  },

  watch: {
    dateTimeDate(date) {
      this.dateTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
      this.show = false;
    }
  },

  methods: {

    handleClick() {
      var posObj = this.$els.posObj;
      this.pos.top = posObj.offsetTop + posObj.offsetHeight + 'px';
      this.pos.left = posObj.offsetLeft + 'px';
      this.show = true;
    }
  }

};

</script>
