<template>
  <div class="row">

    <q-list bordered padding class="rounded-borders text-primary">
      <template v-for="(productName, index) in productNames">
        <q-item :key="index" clickable v-ripple :active="link === productName"
                @click="link = productName">
          {{ productName }}
        </q-item>
      </template>
    </q-list>


    <div class="column" style="flex: 1;">

      <div class="row">
        <h6>A/C</h6>
        <q-chip outline square color="red" text-color="white">
          All machine must be connected
        </q-chip>
      </div>

      <div class="row">
        <q-card class="col-sm-6 col-md-4 col-lg-3" :key="index" v-for="(product, index) in stationData[0]">
          <q-card-section class="row justify-between">
            <div class="text-h6">{{ product[0] }}</div>
            <div class="led led-red"/>
          </q-card-section>
          <q-separator/>
          <div style="padding: 16px;">
            <div class="row justify-between">
              <span class="text-weight-medium">barcode</span>
              <span class="text-weight-medium">1231111</span>
            </div>
          </div>
        </q-card>
      </div>

      <div>


      </div>
    </div>
  </div>
</template>

<script>
import { getDB } from '../utils/lowdb'
import { chain } from 'lodash'

export default {
  name: 'Monitor',
  data: () => ({
    productNames: getDB('project').map(v => v.productName),
    link: 'A/C'
  }),
  computed: {
    stationData () {
      return chain(this.$store.state.stationData).groupBy('productName').toPairs().value()
    }
  }
}
</script>

<style scoped>
.my-menu-link {
  color: white;
  background: #F2C037;
}

.led {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.led-red {
  background-color: #F00;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;
}

.led-green {
  background-color: #ABFF00;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;
}

</style>
