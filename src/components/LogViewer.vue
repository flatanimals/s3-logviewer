<template>
  <div class="absolute inset-0 flex flex-col items-stretch pt-2">
    <!-- <header class="menubar">
      <div>{{ selectedLogFile.name }}</div>
    </header> -->
    <div class="datatable flex-grow overflow-scroll border-t">
      <log-table :headers="config.visible" :logs="selectedLogFile.logs"></log-table>
    </div>
    <footer class="statusbar">
      <div>{{(selectedLogFile.size/1000).toFixed(2)+"KB"}}</div>
      <div>{{selectedLogFile.logs.length}} Rows</div>
      <div class="flex-grow"></div>
    </footer>
  </div>
</template>

<script>
import LogTable from "@/components/LogTable";
import { mapGetters } from "vuex";

export default {
  name: "log-viewer",
  components: {
    LogTable
  },
  computed: {
    ...mapGetters(["selectedLogFile", "config"])
  }
};
</script>

<style lang="postcss">
.menubar {
  @apply px-2;
  @apply py-1;
  @apply text-sm;
  @apply border-b;
  @apply border-gray-200;
}
.statusbar {
  @apply flex;
  @apply flex-row;
  @apply p-1;
  @apply text-xs;
  @apply bg-teal-800;
  @apply border-t;
  @apply border-gray-200;
  @apply text-white;
}
.statusbar > div {
  @apply mr-1;
  @apply px-2;
  @apply py-1;
  @apply shadow-inner;
  @apply bg-teal-900;
}
.statusbar > div:last-child {
  @apply mr-0;
}
</style>
