<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <img width="100" src="~assets/seojuneng-logo.png" alt="logo" />
        <q-space />
        <q-tabs>
          <q-route-tab :to="menu" exact :label="menu" :key="index" v-for="(menu, index) in ['monitor', 'history', 'setting', 'log']" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container style="height: 100%;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      menu: 'monitor'
    }
  },
  mounted () {
    this.$root.$on('event_test', console.log)
  }
}
</script>
