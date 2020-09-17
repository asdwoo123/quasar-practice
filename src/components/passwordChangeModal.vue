<template>
  <q-dialog v-model="visible" no-backdrop-dismiss>
    <q-card style="width: 700px; height: 400px;">
      <q-card-section>
        <div class="column">
          <q-input
            clearable
            clear-icon="close"
            type="password"
            v-model="currentPassword"
            label="Current password"
          />
          <q-input
            clearable
            clear-icon="close"
            type="password"
            v-model="changePassword"
            label="Change password"
          />
        </div>
      </q-card-section>
      <q-card-section align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Change password" @click="change" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { getDB, setDB } from '../utils/lowdb'
import bus from '../utils/bus'

export default {
  name: 'passwordChangeModal',
  props: ['visible'],
  data: () => ({
    currentPassword: '',
    changePassword: ''
  }),
  methods: {
    change () {
      if (this.currentPassword === getDB('password')) {
        if (this.changePassword !== '') {
          setDB('password', this.changePassword)
          bus.$emit('modal-all-close', null)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
