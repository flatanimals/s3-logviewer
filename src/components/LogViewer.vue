<template>
  <div class="absolute inset-0 flex flex-col items-stretch">
    <header class="p-3 bg-blue-200 border-b border-blue-400">{{ filename }}</header>
    <template v-if="groupBy == null">
      <div class="datatable flex-grow overflow-scroll">
        <log-table :headers="config.visible" :logs="preparedLogs"></log-table>
      </div>
    </template>
    <template v-else>
      <div class="flex-grow overflow-y-scroll">
        <div v-for="entry in Object.entries(preparedLogs)" :key="entry[0]">
          <collapsable-panel :title="`${groupBy}: ${entry[0]}`">
            <div class="overflow-x-scroll">
              <log-table :headers="config.visible" :logs="entry[1]"></log-table>
            </div>
          </collapsable-panel>
        </div>
      </div>
    </template>

    <footer class="p-3 bg-blue-200 border-t border-blue-400">
      <div>{{logs.length}} Rows</div>
    </footer>
  </div>
</template>

<script>
import groupBy from "lodash.groupby";
import LogTable from "@/components/LogTable";
import CollapsablePanel from "@/components/CollapsablePanel";
import config from "@/config";
import parse from "@/lib/log-parser";
import toObj from "@/lib/log-object";

export default {
  name: "log-viewer",
  props: {
    logfile: {
      type: Object,
      required: true
    }
  },
  watch: {
    logfile(logfile) {
      this.filename = logfile.name;
      this.logs = this.prepareLogs(logfile.logs);
    }
  },
  data() {
    return {
      filename: this.logfile.name,
      logs: this.prepareLogs(this.logfile.logs),
      config: Object.assign({}, config),
      groupBy: null//"remote-ip"
    };
  },
  components: {
    LogTable,
    CollapsablePanel
  },
  computed: {
    preparedLogs() {
      var coll = [...this.logs];
      coll = coll.filter(x => x["operation"].startsWith("WEBSITE"));
      if (this.groupBy) {
        coll = groupBy(coll, this.groupBy);
      }

      return coll;
    }
  },
  methods: {
    prepareLogs(logs) {
      return logs.map(x => toObj(config.headers, parse(x)));
    }
  }
};
</script>

<style>
</style>
