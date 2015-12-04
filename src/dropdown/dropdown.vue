<template>

<div class="am-dropdown">
  <button class="am-btn am-btn-primary am-dropdown-toggle" v-on:click="toggleDropdown">{{ title }} <span class="am-icon-caret-down"></span></button>
  <ul class="am-dropdown-content">
    <slot></slot>
  </ul>
</div>

</template>

<script>

module.exports = {

  props: ['title'],

  data: function() {
    return {
      status: 'close'
    };
  };

  methods: {
    toggleDropdown: function() {
      this.status = this.status === 'open' ? 'close' : 'open';
    }
  }

};

</script>
