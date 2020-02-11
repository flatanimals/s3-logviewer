<template>
  <table class="log-table">
    <thead>
      <tr>
        <th>#</th>
        <th v-for="(header,h) in headers" :key="h">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,r) in rows" :key="r" class="even:bg-gray-100" v-on:dblclick="handleRowClick(r)">
        <th>{{r+1}}</th>
        <td v-for="(cell,c) in row" :key="c">{{cell}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "log-table",
  props: ["headers", "logs"],
  computed: {
    rows() {
      return this.logs.map(x => {
        var row = [];
        this.headers.forEach(h => row.push(x[h]));
        return row;
      });
      // return []
    }
  },
  methods: {
    handleRowClick(idx) {
      this.$emit("selected", idx);
    }
  }
};
</script>

<style lang="postcss" scoped>
.log-table thead tr {
  @apply bg-gray-100;
}

.log-table tbody tr {
  @apply bg-white;
  @apply cursor-pointer;
}

.log-table tbody tr:hover {
  @apply bg-orange-200;
}

.log-table th {
  @apply p-1;
  @apply text-xs;
  @apply whitespace-no-wrap;
  @apply border;
  @apply border-gray-300;
}

.log-table td {
  @apply p-1;
  @apply text-xs;
  @apply whitespace-no-wrap;
  @apply border;
}
</style>
