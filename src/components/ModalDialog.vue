<template>
  <div class="modal">
    <div class="modal-overlay" @click="handleClose"></div>
    <div class="modal-panel z-10">
      <div class="border-2 border-teal-900 rounded overflow-hidden">
        <slot></slot>
      </div>
      <div class="text-center pt-4">
        <button class="modal-closer" @click="handleClose">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-dialog",
  methods: {
    handleClose() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="postcss">
.modal {
  @apply fixed;
  @apply inset-0;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply p-24;
}
.modal-overlay {
  @apply absolute;
  @apply inset-0;
  @apply bg-teal-900;
  @apply opacity-25;
}
.modal-panel {
  @apply relative;
  @apply p-4;
  @apply bg-teal-700;
  @apply rounded-md;
  @apply text-sm;
}
.modal-closer {
  @apply px-6;
  @apply py-2;
  @apply font-semibold;
  @apply rounded;
  @apply text-white;
  @apply bg-teal-900;
  @apply shadow-md;
}
.modal-closer:hover {
  @apply text-teal-900;
  @apply bg-orange-400;
}
</style>
