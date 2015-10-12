<template>

<grid>
  <column sm="12" md="8" lg="6">

    <panel header="面板标题" style="success">
      <div class="am-panel-bd">面板内容</div>
    </panel>

    <panel header="面板+表格" style="primary">
      <table class="am-table am-table-bordered">
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </panel>

    <panel header="面板+列表" style="warning">
      <list>
        <li><a v-link="{ path: '/' }">首页</a></li>
        <li><a v-link="{ path: '/buttons' }">按钮</a></li>
        <li><a v-link="{ path: '/forms' }">表单</a></li>
      </list>
    </panel>

  </column>
</grid>

</template>

<script>

var amaze = require('amaze');

module.exports = {

  components: {
    "grid": amaze.grid.grid,
    "column": amaze.grid.column,
    "panel": amaze.panel,
    "list": amaze.list
  },

  data: function() {
    return {
      items: [[1, 2, 3, 4, 5], [3, 4, 5, 6, 7]]
    };
  }

};

</script>
