<template>
  <div class="upload-tab">
    <input
      class="upload-tab-fileinput z-50"
      multiple
      type="file"
      @change="loadTextFromFiles"
      title="Click to Add Files"
    />
    <div class="upload-tab-text">&plus;</div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "upload-tab",
  computed: {
    ...mapGetters(["config"])
  },
  methods: {
    ...mapActions(["importLogFile"]),
    loadTextFromFiles(ev) {
      const files = ev.target.files;
      for (var i = 0; i < files.length; i++) {
        this.commitFile(files[i]);
      }
    },
    commitFile(file) {
      const reader = new FileReader();
      const { name, size } = file;
      reader.onload = e => {
        this.importLogFile({
          name,
          size,
          logs: e.target.result.trim().split(/\n/g)
        });
      };
      reader.readAsText(file);
    }
  }
};
</script>

<style lang="postcss">
.upload-tab {
    @apply w-8;
}

.upload-tab-fileinput {
  @apply cursor-pointer;
  @apply block;
  @apply opacity-0;
  @apply absolute;
  @apply inset-0;
  @apply w-full;
  @apply h-full;
}
.upload-tab-text {
  @apply absolute;
  @apply inset-0;
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply justify-center;
}
</style>
