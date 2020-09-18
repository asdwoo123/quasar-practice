<template>
  <q-page class="column">
    <div class="row reverse">
      <q-btn-group>
        <q-btn color="secondary" glossy label="ADD PRODUCT" @click="addProduct"/>
        <q-btn color="secondary" glossy label="SAVE"/>
        <q-btn color="secondary" glossy label="RESET"/>
        <q-btn color="secondary" glossy label="CHANGE PASSWORD" @click="passwordChangeVisible = true"/>
      </q-btn-group>
    </div>
    <div class="row">

      <q-card class="col-sm-6 col-md-4 col-lg-3" v-for="(product, productIndex) in project" :key="productIndex">
        <q-card-section>
          <div class="row justify-between">
            <div class="text-h6">{{ product.productName || 'Untitled' }}</div>
            <div class="column">
              <q-btn-group>
                <q-btn color="secondary" glossy label="ADD STATION" @click="addStation(productIndex)"/>
                <q-btn color="secondary" glossy label="RENAME"/>
                <q-btn color="secondary" glossy label="DELETE"/>
              </q-btn-group>
            </div>
          </div>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <div>
            <Container @drop="onDrop(productIndex)">
              <Draggable v-for="(station, stationIndex) in product.stations" :key="stationIndex">
                <div class="row justify-between draggable text-white"
                     style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
                  {{ station.stationName || 'Untitled' }}
                  <q-btn-group>
                    <q-btn color="secondary" label="edit" @click="showStationEditor(productIndex, stationIndex)"/>
                    <q-btn color="secondary" label="delete"/>
                  </q-btn-group>
                </div>
              </Draggable>
            </Container>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="stationEditVisible" persistent :maximized="true" transition-show="slide-up"
              transition-hide="slide-down">
      <q-card class="text-white">
        <q-bar>
          <q-space/>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section style="height: calc(100% - 32px);" class="row items-stretch q-gutter-sm">

          <div class="col-3 bg-amber-1">
            <q-input style="margin-bottom: 8px;" outlined v-model="station[key]" :label="key"  v-for="[key] in Object.entries(station).slice(0, -1)" :key="key">
              <template v-slot:append>
                <q-icon name="close" @click="station[key] = ''" class="cursor-pointer" />
              </template>
            </q-input>
          </div>
          <div class="col bg-amber-1">

            <div class="row q-gutter-sm items-center" v-for="data in station.data" :key="data.dataName">
              <q-input outlined v-model="data.dataName" label="Data name"  >
                <template v-slot:append>
                  <q-icon name="close" @click="data.dataName = ''" class="cursor-pointer" />
                </template>
              </q-input>
              <q-input outlined v-model="data.nodeId" label="Node id"  >
                <template v-slot:append>
                  <q-icon name="close" @click="data.nodeId = ''" class="cursor-pointer" />
                </template>
              </q-input>
              <!--<q-input outlined type="number" v-model.number="data.standard.maximum" label="Maximum" />-->
              <q-checkbox v-model="data.monitor" color="cyan" label="Monitoring" />
              <q-checkbox v-model="data.save" color="cyan" label="Save" />
              <q-btn style="height: 42px; margin-left: 16px;" round color="deep-orange" icon="delete" />
            </div>


          </div>
          <div class="col-2 bg-amber-1">

          </div>

          <q-page-sticky position="bottom-right" :offset="[78, 58]">
            <q-fab
              icon="add"
              color="accent"
            />
          </q-page-sticky>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { range, clone } from 'lodash'
import { getDB } from '../utils/lowdb'
import stationStruct from '../struct/station'
import productStruct from '../struct/product'

export default {
  name: 'Setting',
  components: {
    Container,
    Draggable
  },
  data: () => ({
    items: range(5),
    project: getDB('project'),
    station: clone(stationStruct),
    projectSaveVisible: false,
    passwordChangeVisible: false,
    stationEditVisible: false
  }),
  methods: {
    onDrop (productIndex, d) {
      console.log(productIndex, d)
    },
    addProduct () {
      this.project.push(productStruct)
    },
    addStation (productIndex) {
      this.project[productIndex].stations.push(stationStruct)
      this.$forceUpdate()
    },
    showStationEditor (productIndex, stationIndex) {
      if (this.project) {
        this.station = clone(this.project[productIndex].stations[stationIndex])
        this.stationEditVisible = true
      }
    }
  }
}
</script>

<style scoped>
.draggable {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 5px;
  background: #ffffff;
}
</style>
