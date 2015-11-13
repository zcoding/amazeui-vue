<template>

<div class="am-datepicker-years" v-show="showYears">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="subtractDecade">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" @click="showMonths">
        <div class="am-datepicker-select">
          {{ showYear }}
        </div>
      </th>
      <th class="am-datepicker-next" @click="addDecade">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="year in years">
        <span class="am-datepicker-year">{{ year }}</span>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {

  computed: {
    showYear() {}
  }

};

</script>
