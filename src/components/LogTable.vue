<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th v-for="(header,h) in headers" :key="h">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row,r) in rows" :key="r" @click="handleRowClick(r)">
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
      console.dir(this.logs[idx]);
    }
  }
};
</script>

<style lang="postcss" scoped>
thead tr {
  @apply bg-gray-100;
}

tbody tr:hover {
  @apply bg-orange-200;
}

th {
  @apply p-1 border border-gray-300 whitespace-no-wrap text-xs;
}

td {
  @apply p-1 border whitespace-no-wrap text-xs;
}
</style>
