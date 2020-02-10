<template>
  <div class=" absolute inset-0 flex flex-col ">
    <div class="p-3 bg-blue-200 border-b border-blue-400">
      <file-reader @load="handleFileLoad" />
    </div>
    <nav class="flex flex-row p-2">
      <button v-for="(logfile,i) in logfiles" :key="logfile.name" @click="handleTabClick(i)">{{logfile.name}}</button>
    </nav>
    <section class="flex-grow relative">
    <log-viewer v-if="logfiles.length && selectedIndex != null" :logfile="selectedLogFile"></log-viewer>
    </section>
  </div>
</template>

<script>
import FileReader from "@/components/FileReader";
import LogViewer from "@/components/LogViewer";
import config from "@/config";

export default {
  name: "Home",
  data() {
    return {
      logfiles: [],
      selectedIndex: 0,
      config: Object.assign({}, config)
    };
  },
  components: {
    FileReader,
    LogViewer
  },
  computed: {
    selectedLogFile() {
      return this.logfiles[this.selectedIndex];
    }
  },
  methods: {
    handleFileLoad(logfile) {
      this.logfiles.push(logfile);
      this.selectedIndex = this.logfiles.length - 1;
    },
    handleTabClick(index) {
      this.selectedIndex = index;
    }
  }
};
</script>
