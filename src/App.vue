<template>
  <div id="app" class="relative">
    <router-view />
  </div>
</template>

<style lang="postcss">
@import "assets/styles/tailwind.postcss";

html,
body {
  @apply h-screen;
  @apply min-h-screen;
  @apply max-h-screen;
}

#app {
  @apply h-screen;
  @apply min-h-screen;
  @apply max-h-screen;
  overflow:  hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
