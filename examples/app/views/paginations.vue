<template>

<grid>
  <column :sm="12">
    <pagination :page="2" :total="10" :link="createLink" left></pagination>
  </column>
  <column :sm="12">
    <pagination :page="5" :total="10" :link="createLink" centered></pagination>
  </column>
  <column :sm="12">
    <pagination :page="8" :total="10" :link="createLink" right></pagination>
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
