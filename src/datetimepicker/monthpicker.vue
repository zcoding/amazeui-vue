<template>

<SubPicker displayName="months"
        style={this.props.style}
        subtract={this.props.subtractYear}
        add={this.props.addYear}
        showFunc={this.props.showYears}
        showText={this.props.viewDate.getFullYear()}
        body={this.renderMonths()}>

</template>

<script>

module.exports = {};

</script>
