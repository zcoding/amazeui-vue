# upgrade vue.js 0.12 to 1.0

## List Rendering

+ `v-repeat` changes to `v-for` [more](http://vuejs.org/guide/list.html)
+ alias is required in v-for
+ alias for the index(key) is available

## Events

+ `v-on="click:onClick"` changes to `v-on:click="onClick"`
+ `@click="onClick` is available
+ event modifiers and key modifiers are available [more](http://vuejs.org/guide/events.html#Event_Modifiers)

## transition

+ `v-transition` changes to `transition`

## components

+ `v-ref="child"` changes to `v-ref:child`

## attributes binding

+ `v-class` changes to `:class` [more](http://vuejs.org/guide/class-and-style.html)

## Form Input Bindings
+ [bind the value to a dynamic property](http://vuejs.org/guide/forms.html#Value_Bindings)
