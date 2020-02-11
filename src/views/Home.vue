<template>
  <div class="absolute inset-0 flex flex-col">
    <site-header></site-header>
    <tab-bar v-if="filenames.length"></tab-bar>
    <section v-if="filenames.length" class="flex-grow relative">
      <log-viewer></log-viewer>
    </section>
    <div v-if="!filenames.length" class="h-full">
      <file-dropzone />
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import TabBar from "@/components/TabBar";
import LogViewer from "@/components/LogViewer";
import FileDropzone from "@/components/FileDropzone";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    SiteHeader,
    TabBar,
    LogViewer,
    FileDropzone
  },
  computed: {
    ...mapGetters(["filenames", "selectedIndex"])
  }
};
</script>
