<template>

<grid>
  <column v-bind:sm="12">
    <p>{{ myDate | formatDate 'yyyy年MM月dd日 hh:mm:ss' }}</p>
  </column>
  <column v-bind:sm="12">
    <date-time-picker v-bind:date-time.sync="myDate"></date-time-picker>
  </column>
  <column v-bind:sm="12">
    <date-time-input></date-time-input>
  </column>
</grid>

</template>

<script>

export default {

  data() {
    return {
      myDate: new Date(2010, 0, 3, 4, 5, 6)
    };
  },

  filters: {
    formatDate(_date, format) {
      if (isNaN(_date.getTime())) {
        return '';
      }

      var map = {
          "M": _date.getMonth() + 1
        , "d": _date.getDate()
        , "h": _date.getHours()
        , "m": _date.getMinutes()
        , "s": _date.getSeconds()
      };

      format = format.replace(/([yMdDhms])+/g, function(all, t) {
        var v = map[t];
        if(v !== undefined){
          if(all.length > 1){
            v = '0' + v;
            v = v.substr(v.length - 2);
          }
          return v;
        } else if(t === 'y') {
          return (_date.getFullYear() + '').substr(4 - all.length);
        } else if (t === 'D') {
          return ['日', '一', '二', '三', '四', '五', '六'][_date.getDay()];
        }
        return all;
      });

      return format;
    }
  }

};

</script>
