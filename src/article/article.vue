<template>

<article class="am-article">
  <div class="am-article-hd">
    <h1 class="am-article-title">{{ title }}</h1>
    <p class="am-article-meta">{{ meta }}</p>
  </div>
  <div class="am-article-bd">
    <slot></slot>
  </div>
</article>

</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    meta: {
      type: String,
      default: ''
    }
  }
};

</script>
