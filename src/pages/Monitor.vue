<template>
  <div class="row">

      <q-list padding :separator="true" style="width: 200px; border-right: 1px solid rgba(0, 0, 0, 0.12)">
        <template v-for="(project, index) in ['A/C', 'CSD', 'DSD']">
          <q-item :key="index">
            {{ project }}
          </q-item>
        </template>
      </q-list>

    <div style="padding: 24px; flex: 1; background-color: #1976D2">
      <div class="column">

        <div class="row">
          <h6>A/C</h6>
          <q-chip outline square color="red" text-color="white">
            All machine must be connected
          </q-chip>
        </div>

        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Monitor'
}
</script>

<style scoped>

</style>
