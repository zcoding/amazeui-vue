<template>

<grid>
  <column v-bind:sm="12">
    <div class="am-padding">
      <tab v-bind:items="tabs" justify></tab>
    </div>
    <div class="am-padding">
      <tab v-bind:items="tabs"></tab>
    </div>
  </column>
</grid>

</template>

<script>

export default {

  data() {
    return {
      tabs: [{
        title: 'Page A',
        content: 'ah hahahaha~'
      }, {
        title: 'Page B',
        content: 'what the fuck ?'
      }, {
        title: 'Page C',
        content: '欧漏。。。'
      }]
    };
  }

};

</script>
