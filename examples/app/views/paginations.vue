<template>

<grid>
  <column :sm="12" :md="8" :lg="6">
    <pagination :page="2" :total="10" :link="createLink" centered></pagination>
  </column>
  <column :sm="12" :md="8" :lg="6">
    <a v-link="'/'">返回首页</a>
  </column>
</grid>

</template>

<script>

module.exports = {

  methods: {
    createLink: function(p) {
      return '/paginations?page=' + p;
    }
  }
};

</script>
