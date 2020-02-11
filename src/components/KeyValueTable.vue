<template>
  <table class="kv-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in entries" :key="entry[0]" class="even:bg-gray-100">
        <th class="text-left">{{entry[0]}}</th>
        <td>{{entry[1]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "key-value-table",
  props: ["obj"],
  computed: {
    entries() {
      return Object.entries(this.obj);
    }
  }
};
</script>

<style lang="postcss">
.kv-table {
}
.kv-table thead tr {
  @apply bg-gray-100;
}

.kv-table tbody tr {
  @apply bg-white;
  @apply cursor-pointer;
}

.kv-table tbody tr:hover {
  @apply bg-orange-200;
}

.kv-table th {
  @apply p-1;
  @apply text-xs;
  @apply whitespace-no-wrap;
  @apply border;
  @apply border-gray-300;
}

.kv-table td {
  @apply p-1;
  @apply text-xs;
  @apply border;
}
</style>
