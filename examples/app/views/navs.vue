<template>

<topbar title="Amaze UI vue">
  <am-nav v-bind:items="items" topbar pills></am-nav>
</topbar>

<topbar inverse title="Amaze UI vue">
  <am-nav v-bind:items="items" topbar pills></am-nav>
</topbar>

<grid>
  <column v-bind:sm="12">
    <div class="am-padding">
      <am-nav v-bind:items="items"></am-nav>
    </div>
    <div class="am-padding">
      <am-nav v-bind:items="items" pills></am-nav>
    </div>
    <div class="am-padding">
      <am-nav v-bind:items="items" tabs></am-nav>
    </div>
    <div class="am-padding">
      <am-nav v-bind:items="items" justify pills></am-nav>
    </div>
    <div class="am-padding">
      <am-nav v-bind:items="items" justify tabs></am-nav>
    </div>
  </column>
</grid>

</template>

<script>

export default {

  data() {
    return {
      items: [{
        text: 'Home',
        link: '/',
        active: true
      }, {
        text: 'components',
        link: '/components'
      }]
    };
  }

}

</script>
