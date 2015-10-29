# Alert
显示可关闭的页内警告信息。

## props

### closed
决定关闭行为。这个函数将在调用组件销毁函数之后调用。

### closeable
决定是否可通过点击关闭按钮关闭

## methods

### close
触发关闭Alert，如果有closed，则在关闭之后调用closed。调用这个函数表示Alert的生命周期已经结束。

### style
决定外观颜色，'secondary', 'success', 'warning', 'danger'
