import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      stationData: [],
      theme: {}
    },
    mutations: {
      insertRealTime(state, payload) {
        const result = state.stationData.find(v => (v?.projectName === payload?.projectName) && (v?.stationName === payload?.stationName))
        if (result) {
          const index = state.stationData.indexOf(result)
          state.stationData[index] = {
            ...state.stationData[index],
            ...payload
          }
        } else {
          state.stationData?.push(payload)
        }
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
