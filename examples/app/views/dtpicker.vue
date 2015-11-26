<template>

<grid>
  <column :sm="12">
    <p>{{ myDate | formatDate 'yyyy-MM-dd hh:mm:ss' }}</p>
  </column>
  <column :sm="12">
    <date-time-picker :date-time.sync="myDate"></date-time-picker>
  </column>
  <column :sm="12">
    <date-time-input></date-time-input>
  </column>
</grid>

</template>

<script>

export default {

  data() {
    return {
      myDate: new Date(2010, 2, 3, 4, 5, 6)
    };
  },

  filters: {
    formatDate(d, format) {
      var dateString = format.replace(/yyyy/gi, d.getFullYear())
        .replace(/MM/g, d.getMonth()+1)
        .replace(/dd/gi, d.getDate())
        .replace(/hh/gi, d.getHours())
        .replace(/mm/g, d.getMinutes())
        .replace(/ss/gi, d.getSeconds());
        return dateString;
    }
  }

};

</script>
