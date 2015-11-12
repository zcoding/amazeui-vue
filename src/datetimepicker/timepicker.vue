<template>

<div className={this.prefixClass('body')}>
  <div
    className={prefixClass(this.props.displayName)}
    style={this.props.style}>
    <table className={prefixClass('table')}>
      <thead>
      <tr className={prefixClass('header')}>
        <th className={prefixClass('prev')} onClick={this.props.subtract}>
          <i className={prefixClass('prev-icon')}></i>
        </th>
        <th
          className={prefixClass('switch')}
          colSpan="5"
          onClick={this.props.showFunc}
          >
          <div className={this.prefixClass('select')}>
            {this.props.showText}
          </div>
        </th>
        <th className={prefixClass('next')} onClick={this.props.add}>
          <i className={prefixClass('next-icon')}></i>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td colSpan="7">
          {this.props.body}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  {this.renderHours()}
  {this.renderMinutes()}
</div>

</template>

<script>

export default {};

</script>
