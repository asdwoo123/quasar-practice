<template>
  <q-dialog v-model="visible" persistent :maximized="true" transition-show="slide-up" transition-hide="slide-down">
    <q-card class="text-white">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section v-if="station">
          <q-input v-if="!Array.isArray(value)" outlined v-model="station[key]" :label="key" :key="infoIndex" v-for="([key, value], infoIndex) in stationInfo" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'stationModal',
  props: ['station'],
  data: () => ({
    visible: true
  }),
  computed: {
    stationInfo() {
      return Object.entries(this.station)
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style scoped>

</style>
