import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 42,
    userData: {}
  },
  mutations: {
    incrementCounter: (state) => {
      state.counter = Number(state.counter) + 1
    },
    userData: (state, data) => {
      state.userData = data
    }
  },
  getters: {
    userData: (state) => state.userData
  },
  actions: {
    onCounterIncrement:({ commit }) => {
      commit('incrementCounter')
    }
  },
  modules: {
  }
})
