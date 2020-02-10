<template>
  <div>
    <div class="px-2 py-1 font-semibold text-sm border-b" @click="open=!open">{{title}}</div>
    <div v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapsable-panel",
  props: ["title"],
  data() {
    return {
      open: false
    };
  }
};
</script>

<style>
</style>
