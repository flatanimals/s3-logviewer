<template>
  <div class="absolute inset-0 flex flex-col items-stretch pt-2">
    <!-- <header class="menubar">
      <div>{{ selectedLogFile.name }}</div>
    </header>-->
    <div class="datatable flex-grow overflow-scroll border-t">
      <log-table :headers="config.visible" :logs="selectedLogFile.logs" @selected="handleSelected"></log-table>
    </div>
    <footer class="statusbar">
      <div class="flex-grow">Double-click row to view full record</div>
      <div>{{selectedLogFile.logs.length}} Rows</div>
      <div>{{(selectedLogFile.size/1000).toFixed(2)+"KB"}}</div>
    </footer>
    <modal-dialog v-if="selectedRowIndex !== null" @close="handleModalClose">
      <key-value-table :obj="selectedRow"></key-value-table>
    </modal-dialog>
  </div>
</template>

<script>
import LogTable from "@/components/LogTable";
import ModalDialog from "@/components/ModalDialog";
import KeyValueTable from "@/components/KeyValueTable";
import { mapGetters } from "vuex";

export default {
  name: "log-viewer",
  data() {
    return {
      selectedRowIndex: null
    };
  },
  components: {
    LogTable,
    ModalDialog,
    KeyValueTable
  },
  computed: {
    ...mapGetters(["selectedLogFile", "config"]),
    selectedRow() {
      if (this.selectedRowIndex !== null) {
        return this.selectedLogFile.logs[this.selectedRowIndex];
      }
      return {};
    }
  },
  methods: {
    handleSelected(idx) {
      this.selectedRowIndex = idx;
    },
    handleModalClose() {
      this.selectedRowIndex = null;
    }
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
