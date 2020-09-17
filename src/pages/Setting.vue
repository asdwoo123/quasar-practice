<template>
  <div class="column">
    <div class="row reverse">
      <q-btn-group>
        <q-btn color="secondary" glossy label="ADD PRODUCT" @click="addProduct"/>
        <q-btn color="secondary" glossy label="SAVE"/>
        <q-btn color="secondary" glossy label="RESET"/>
        <q-btn color="secondary" glossy label="CHANGE PASSWORD" @click="passwordChangeVisible = true" />
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
                <div class="row justify-between draggable text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
                  {{ station.stationName || 'Untitled' }}
                  <q-btn-group>
                    <q-btn color="secondary" label="edit"  />
                    <q-btn color="secondary" label="delete"  />
                  </q-btn-group>
                </div>
              </Draggable>
            </Container>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <StationModal :station="station" :visible="stationEditVisible" />
    <PasswordChangeModal :visible="passwordChangeVisible" />
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { range, clone } from 'lodash'
import { getDB } from '../utils/lowdb'
import stationStruct from '../struct/station'
import productStruct from '../struct/product'
import StationModal from 'components/stationModal'
import PasswordChangeModal from 'components/passwordChangeModal'
import bus from '../utils/bus'

export default {
  name: 'Setting',
  components: {
    PasswordChangeModal,
    StationModal,
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
    }
  },
  mounted () {
    bus.$on('modal-all-close', () => {
      this.projectSaveVisible = false
      this.passwordChangeVisible = false
      this.stationEditVisible = false
    })
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
