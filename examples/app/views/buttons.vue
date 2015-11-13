<template>

<grid>
  <column :sm="12" :md="12" :lg="12">
  <h1>button组件总是使用button标签，而且type总是为button，如果要使用a标签的button，需要自定义</h1>
  </column>
  <column :sm="12" :md="12" :lg="12">
    <am-button></am-button>
    <am-button am-style="primary" v-on:click="alert" lg>主色按钮</am-button>
    <am-button am-style="secondary" radius xs>次色小圆角按钮</am-button>
    <am-button am-style="success" disabled round sm>绿色禁用椭圆按钮</am-button>
    <am-button am-style="warning" round :loading.sync="isLoading" v-on:click="submitNow">{{ isLoading ? '正在提交……' : '橙色椭圆按钮' }}</am-button>
    <am-button am-style="danger" active xl>红色大激活按钮</am-button>
    <am-button block am-style="primary">块状按钮</am-button>
  </column>
  <column :sm="12" :md="12" :lg="12">
    <button-group>
      <am-button></am-button>
      <am-button></am-button>
      <am-button></am-button>
      <am-button></am-button>
      <am-button></am-button>
    </button-group>
  </column>
  <column :sm="12" :md="12" :lg="12">
    <a v-link="{ path: '/' }">返回首页</a>
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
