# vue.js 0.12 vs 1.0
vuejs从0.12升级到1.0需要注意的几个地方

## List Rendering
列表渲染有以下几个变化
+ `v-repeat` VS `v-for` [more about v-for](http://vuejs.org/guide/list.html)

## events
DOM事件监听有以下几个变化
+ `v-on="click:onClick"` VS `v-on:click="onClick"`

## transition
过渡系统有以下几个变化
+ `v-transition` VS `transition`

## components
组件系统有以下几个主要变化
+ `v-ref="child"` VS `v-ref:child`

## attributes binding
属性绑定有以下几个变化
+ `v-class` VS `class` [more about class binding](http://vuejs.org/guide/class-and-style.html)
