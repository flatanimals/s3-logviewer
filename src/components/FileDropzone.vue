<template>
  <div class="relative bg-orange-400 h-full">
    <input
      class="fileinput z-50"
      multiple
      type="file"
      @change="loadTextFromFile"
      title="Click to Select Files"
    />
    <div class="dropzone">
      <div class="dropzone-brand text-center">
        {{ config.siteName }}
      </div>
      <div class="dropzone-cta">
        <p class="text-2xl font-semibold">Drag &amp; Drop S3 Logs Here</p>
        <p class="my-3">or</p>
        <p class="dropzone-faux-button">Click to Select Files</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "file-dropzone",
  computed: {
    ...mapGetters(["config"])
  },
  methods: {
    ...mapActions(["importLogFile"]),
    loadTextFromFile(ev) {
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
.fileinput {
  @apply cursor-pointer;
  @apply block;
  @apply opacity-0;
  @apply absolute;
  @apply inset-0;
  @apply w-full;
  @apply h-full;
}
.dropzone {
  @apply absolute;
  @apply inset-0;
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply justify-center;
}

.dropzone-brand {
  @apply font-light;
  @apply text-3xl;
  @apply text-teal-900;
  @apply px-6;
  @apply py-3;
  @apply rounded-lg;
  @apply bg-white;
}

.dropzone-cta {
  @apply p-12;
  @apply text-teal-900;
  @apply rounded-sm;
  @apply uppercase;
  @apply text-center;
}

.dropzone-faux-button {
  @apply p-3;
  @apply font-semibold;
  @apply rounded;
  @apply text-teal-900;
  @apply bg-orange-500;
  @apply shadow-md;
  @apply border-orange-600;
  @apply border-b-2;
}
</style>
