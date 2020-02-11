<template>
  <header class="site-header">
    <h1 class="site-header-brand">{{config.siteName}}</h1>
    <a :href="config.siteRepo" class="site-header-github" target="_blank" rel="nofollow">
      <img src="imgs/github-logo.svg" class="w-8" alt="View on Github" />
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
  @apply flex;
  @apply items-stretch;
  @apply bg-orange-400;
}
.site-header-brand {
  @apply flex-grow;
  @apply font-light;
  @apply text-2xl;
  @apply text-teal-900;
  @apply px-3;
  @apply py-1;
}
.site-header-github {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply px-2;
}
</style>
