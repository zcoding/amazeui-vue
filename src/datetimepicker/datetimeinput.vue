<template>

<div class="am-form-group" v-el:pos-obj>
  <input type="text" class="am-form-field" v-on:focus="handleClick" v-on:blur="show=false">
</div>
<date-time-picker v-if="show" v-bind:caret-displayed="true" v-bind:style="pos"></date-time-picker>

</template>

<script>

import dateTimePicker from './datetimepicker.vue';

export default {
  components: {
    dateTimePicker
  },

  data() {
    return {
      show: false,
      pos: {
        "top": '',
        "left": '',
        "position": 'absolute',
        "z-index": 1120
      }
    };
  },

  methods: {

    handleClick() {

      var posObj = this.$els.posObj;

      this.pos.top = posObj.offsetTop + posObj.offsetHeight + 'px';
      this.pos.left = posObj.offsetLeft + 'px';

      this.$log('pos');

      this.show = true;
    }
  }

};

</script>
