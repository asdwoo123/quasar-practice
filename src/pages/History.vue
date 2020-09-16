<template>
  <div class="column">
    <div class="row">
      <q-select outlined v-model="project" :options="projects" label="project" />
      <q-input outlined v-model="barcode" label="barcode" />
      <v-md-date-range-picker />
    </div>
  </div>
</template>

<script>
import { getCollection } from '../utils/mongodb'
import VMdDateRangePicker from 'v-md-date-range-picker'

export default {
  name: 'History',
  components: {
    VMdDateRangePicker
  },
  data: () => ({
    project: null,
    projects: [
      'A/C', 'CSD', 'DSD'
    ],
    barcode: ''
  }),
  mounted () {
    const collection = getCollection()
    collection.find({}).sort({ createdAt: -1 }).toArray((err, result) => {
      console.log(result)
    })
  }
}
</script>

<style scoped>

</style>
