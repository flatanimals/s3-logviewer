<template>
  <label class="text-reader">
    <input type="file" @change="loadTextFromFile" />
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      console.dir(file);
      const reader = new FileReader();
      const { name, size } = file;
      reader.onload = e => {
        this.$emit("load", {
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
