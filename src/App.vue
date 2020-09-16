<template>
  <div id="q-app">
    <MainLayout v-if="mongoState" />
  </div>
</template>
<script>
import Mongod from 'mongod'
import MainLayout from 'layouts/MainLayout'
import { mongodbConnect } from './utils/mongodb'
import bus from './utils/bus'
const server = new Mongod(27017)

export default {
  name: 'App',
  components: { MainLayout },
  data: () => ({
    mongoState: false
  }),
  mounted () {
    bus.$on('mongodb', (state) => this.mongoState = state)
    mongodbConnect()
  }
}
</script>
