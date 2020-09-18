<template>
  <q-page class="column">
    <div class="row">
      <q-select outlined v-model="productName" :options="productNames" label="project" />
      <q-input outlined v-model="productId" label="barcode" />

    </div>
  </q-page>
</template>


<script>
import { getCollection } from '../utils/mongodb'
import VMdDateRangePicker from 'v-md-date-range-picker'
import { getDB } from '../utils/lowdb'

const project = getDB('project')

console.log(project)

export default {
  name: 'History',
  components: {
    VMdDateRangePicker
  },
  data: () => ({
    productId: '',
    period: null,
    page: 1,
    limit: 10,
    productNames: project.map(p => p.productName),
    productName: this.productNames[0]
  }),
  mounted () {
    console.log(this.productNames)
  },
  computed: {
    dataSource() {
      if (!this.productName) return
      const collection = getCollection(this.productName)
      collection.createIndex(
        {productId: 'text'}
      )
      const query = {}
      if (this.productId !== '') query.productId = {'$regex': this.productId}

      collection.find(query).sort({createdAt: -1}).limit(this.limit)
      .skip((page - 1) * 10).toArray((err, completes) => {
        if (completes.length > 0) {
          return completes
        } else {
          return []
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
