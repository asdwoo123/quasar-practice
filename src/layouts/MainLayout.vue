<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <img width="100" src="~assets/seojuneng-logo.png" alt="logo"/>
        <q-space/>
        <q-tabs>
          <q-route-tab :to="menu" exact :label="menu" :key="index" v-for="(menu, index) in pages"/>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container style="background-color: #a9cec2;">
      <q-page padding>
        <router-view/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import '../utils/mongodb'
import routes from '../router/routes'

export default {
  name: 'MainLayout',
  data () {
    return {
      pages: routes[0].children.slice(1).map(v => v.path),
      menu: 'monitor'
    }

  },
  mounted () {

  }
}
</script>

