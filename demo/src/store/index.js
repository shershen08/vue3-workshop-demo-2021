import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 42
  },
  mutations: {
    incrementCounter: (state) => {
      state.counter = Number(state.counter) + 1
    },
  },
  actions: {
    onCounterIncrement:({ commit }) => {
      commit('incrementCounter')
    }
  },
  modules: {
  }
})
