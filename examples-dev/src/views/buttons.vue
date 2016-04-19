<template>

<grid>
  <column v-bind:sm="12" v-bind:md="12" v-bind:lg="12">
  <h1>button组件总是使用button标签，而且type总是为button，如果要使用a标签的button，需要自定义</h1>
  </column>
  <column v-bind:sm="12" v-bind:md="12" v-bind:lg="12">
    <am-button></am-button>
    <am-button am-style="primary" v-on:click="alert" lg>主色按钮</am-button>
    <am-button am-style="secondary" radius xs>次色小圆角按钮</am-button>
    <am-button am-style="success" disabled round sm>绿色禁用椭圆按钮</am-button>
    <am-button am-style="warning" round v-bind:loading.sync="isLoading" v-on:click="submitNow">{{ isLoading ? '正在提交……' : '橙色椭圆按钮' }}</am-button>
    <am-button am-style="danger" active xl>红色大激活按钮</am-button>
    <am-button am-style="primary" block>Block Style Button</am-button>
  </column>
  <column v-bind:sm="12" v-bind:md="12" v-bind:lg="12">
    <button-group>
      <am-button>button1</am-button>
      <am-button>button2</am-button>
      <am-button>button3</am-button>
      <am-button>button4</am-button>
      <am-button>button5</am-button>
    </button-group>
  </column>
</grid>

</template>

<script>

module.exports = {

  data: function() {
    return {
      isLoading: false
    };
  },

  methods: {
    "alert": function() {
      alert('yeah~');
    },
    "submitNow": function() {
      this.isLoading = true;
      var vm = this;
      setTimeout(function() {
        vm.isLoading = false;
      }, 3000);
    }
  }

};

</script>
