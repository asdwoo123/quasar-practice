<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import Mongod from 'mongod'
const server = new Mongod(27017)

console.log(server.isRunning)

export default {
  name: 'App'
}
</script>
