<template>
  <nav class="tab-bar">
    <upload-tab class="tab"></upload-tab>
    <div
      v-for="(filename,i) in filenames"
      :key="filename"
      @click="handleTabClick(i)"
      :class="tabClasses(i)"
    >
      <span>{{filename}}</span>
      <button @click.stop="handleTabCloseClick(i)">&times;</button>
    </div>
  </nav>
</template>

<script>
import UploadTab from "./UploadTab";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "tab-bar",
  components: {
      UploadTab
  },
  computed: {
    ...mapGetters(["filenames", "selectedIndex"])
  },
  methods: {
    tabClasses(i) {
      return {
        tab: true,
        active: i === this.selectedIndex
      };
    },
    handleTabClick(index) {
      this.setSelectedIndex(index);
    },
    handleTabCloseClick(index) {
      this.removeLogFile(index);
    },
    ...mapActions(["setSelectedIndex", "removeLogFile"])
  }
};
</script>

<style lang="postcss">
.tab-bar {
  @apply flex;
  @apply flex-row;
  @apply px-1;
  @apply pt-1;
  @apply bg-teal-700;
  @apply border-b-2;
  @apply border-t-2;
  @apply border-teal-900;
  @apply shadow-inner;
}
.tab {
  @apply flex;
  @apply flex-row;
  @apply items-baseline;
  @apply relative;
  @apply mr-1;
  @apply p-1;
  @apply font-thin;
  @apply text-center;
  @apply text-sm;
  @apply bg-teal-500;
  @apply border;
  @apply border-teal-900;
  @apply rounded-t;
  @apply cursor-pointer;
  margin-bottom: -2px;
}
.tab.add {
  @apply px-3;
}
.tab.active {
  @apply flex;
  @apply items-baseline;
  @apply font-semibold;
  @apply text-teal-900;
  @apply bg-white;
  @apply border-2;
  @apply border-b-0;
}
.tab > button {
  @apply hidden;
  @apply w-4 h-4;
  @apply ml-1;
  @apply font-semibold;
  @apply text-xs;
  @apply text-center;
  @apply text-white;
  @apply leading-none;
  @apply bg-teal-700;
  @apply rounded-full;
  @apply opacity-25;
}
.tab.active > button {
  @apply block;
}
.tab.active > button:hover {
  @apply opacity-100;
}
</style>
