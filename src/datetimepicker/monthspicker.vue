<template>

<div class="am-datepicker-days" style={this.props.style}>
  <table class="am-datepicker-table">
    <thead>
    <tr class="am-datepicker-header">
      <th class="am-datepicker-prev" @click="subtractMonth">
        <i class="am-datepicker-prev-icon"></i>
      </th>
      <th class="am-datepicker-switch" colSpan="5" @click="showMonths">
        <div class="am-datepicker-select">
          {{ viewDate.getMonth() }}
          {{ viewDate.getFullYear() }}
        </div>
      </th>
      <th class="am-datepicker-next" @click="addMonth">
        <i class="am-datepicker-next-icon"></i>
      </th>
    </tr>
    <tr>
      <th class="am-datepicker-dow" v-for="day in weeks">{{ day | locale }}</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="row in days">
        <td v-for="day in row" @click="setSelectedDate(day)">{{ day }}</td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>

export default {};

</script>
