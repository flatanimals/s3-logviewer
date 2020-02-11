<template>
  <header class="site-header">
    <h1 class="site-header-brand">{{config.siteName}}</h1>
    <a :href="config.siteRepo" class="site-header-github" target="_blank" rel="nofollow">
      <img src="imgs/github-logo.svg" alt="View on Github" />
    </a>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "site-header",
  computed: mapGetters(["config"])
};
</script>

<style lang="postcss">
.site-header {
  @apply relative;
}
.site-header-brand {
  @apply font-light;
  @apply text-2xl;
  @apply text-teal-900;
  @apply bg-orange-400;
  /* @apply border-orange-600; */
  /* @apply border-b-2; */
  @apply p-3;
}
.site-header-github {
  @apply absolute;
  @apply top-0;
  @apply right-0;
  @apply w-8;
  @apply h-8;
  @apply mt-3;
  @apply mr-3;
}
</style>
