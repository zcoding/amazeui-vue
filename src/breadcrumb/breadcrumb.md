# Breadcrumb

## props

+ `slash` use slash `/` to separate items, optional

## children

+ breadcrumbItem

## examples

```javascript
<template>

<breadcrumb>
  <breadcrumb-item v-for="item in menus" :link="item.link">{{ item.name }}</breadcrumb-item>
</breadcrumb>

<breadcrumb slash>
  <breadcrumb-item v-for="item in menus" :link="item.link">{{ item.name }}</breadcrumb-item>
</breadcrumb>

</template>

<script>

import {breadcrumb} from 'amaze';

export default {
  components: {
    "breadcrumb": breadcrumb,
    "breadcrumbItem": breadcrumb.item
  },
  data() {
    return {
      menus: [{
        "name": "Home",
        "link": "/"
      }, {
        "name": "articles",
        "link": "/articles"
      }, {
        "name": "about"
      }]
    };
  }
};

</script>
```
