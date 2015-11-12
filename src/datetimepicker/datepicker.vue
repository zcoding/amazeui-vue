<template>

<div class="am-datepicker-body">
  <days-picker
    selectedDate={this.state.selectedDate}
    viewDate={this.state.viewDate}

    subtractMonth={this.subtractMonth}
    addMonth={this.addMonth}
    setSelectedDate={this.setSelectedDate}
    showMonths={this.showMonths}

    locale={this.state.locale}
    weekStart={this.props.weekStart}
    daysOfWeekDisabled={this.props.daysOfWeekDisabled}
    minDate={this.props.minDate}
    maxDate={this.props.maxDate}>
  <months-picker
    locale={this.state.locale}
    addYear={this.addYear}
    subtractYear={this.subtractYear}
    viewDate={this.state.viewDate}
    selectedDate={this.state.selectedDate}
    showYears={this.showYears}
    setViewMonth={this.setViewMonth}>
  <years-picker
    viewDate={this.state.viewDate}
    selectDate={this.state.selectedDate}
    setViewYear={this.setViewYear}
    addDecade={this.addDecade}
    subtractDecade={this.subtractDecade}>
</div>

</template>

<script>

import daysPicker from './dayspicker.vue';
import monthsPicker from './monthpicker.vue';
import yearsPicker from './yearpicker.vue';

export default {
  components: {
    daysPicker,
    monthsPicker,
    yearsPicker
  }
};

</script>
