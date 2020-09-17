<template>
  <div id="q-app">
    <MainLayout v-if="mongoState" />
  </div>
</template>
<script>
import MainLayout from 'layouts/MainLayout'
import { mongodbConnect } from './utils/mongodb'
import { connectOPC } from './utils/opcua'
import bus from './utils/bus'

export default {
  name: 'App',
  components: { MainLayout },
  data: () => ({
    mongoState: false
  }),
  mounted () {
    bus.$on('mongodb', (state) => this.mongoState = state)
    mongodbConnect()
    connectOPC()
  }
}
</script>
