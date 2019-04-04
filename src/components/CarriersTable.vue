<template>
  <table>
    <caption>Monthly savings</caption>
    <tr>
      <th v-for="(header, index) in columnHeading" :key="index">{{ header }}</th>
    </tr>
    <tr v-for="row in tableData" :key="row.name">
      <td v-for="(data, key) in row" :key="data + '=' + key">
        <span v-if="data instanceof Array">{{ data.join(', ') }}</span>
        <span v-else>{{ data }}</span>
      </td>
    </tr>
  </table> 
</template>

<script>
export default {
  name: 'CarriersTable',
  props: {
    columnHeading: {
      type: Array,
      required: true
    },
    tableData:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
table {
  border: 1px solid black;
  border-collapse: collapse;
  width: 50%;
  min-width: 550px;
}
th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}
</style>
