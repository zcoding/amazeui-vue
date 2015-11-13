<template>

<div class="am-datepicker-months" v-show="showMonths">
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="subtractYear">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colspan="5" @click="showYears">
        <div class="am-datepicker-select">
          {{ viewDate.getFullYear() }}
        </div>
      </th>
      <th class="am-datepicker-next" @click="addYear">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="month in months">
        <span class="am-datepicker-month">{{ month }}</span>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {};

</script>
