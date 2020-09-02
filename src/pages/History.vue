<template>
  <div>
  <q-btn />
  </div>
</template>

<script>
import connect from '../schema'

export default {
  name: 'History',
  async mounted () {
    await connect()
  }
}
</script>

<style scoped>

</style>
