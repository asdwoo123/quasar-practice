<template>
<div>
  <q-table :data="logs" :columns="columns" :pagination.sync="pagination" hide-pagination />
  <div>
    <q-pagination :max="4" v-model="pagination.page" color="grey-8" />
  </div>
</div>
</template>

<script>
import { range } from 'lodash'

export default {
  name: 'Log',
  data: () => ({
    pagination: {
      sortBy: 'desc',
      descending: false,
      page: 1
    },
    columns: ['index', 'stationName', 'time', 'message']
    .map(name => ({
      name,
      label: name.toUpperCase(),
      field: name
    })),
    logs: range(3000).map(n => ({
      index: n.toString(),
      stationName: `stationName${n}`,
      time: new Date().toString(),
      ip: `192.168.1.${n}`,
      message: 'hello, test'
    }))
  })
}
</script>

<style scoped>

</style>
