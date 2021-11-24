import { createStore } from 'vuex'

export default createStore({
  //defalut value
  state: {
    counter: 0,
    userData: {},
    products:[]
  },
  mutations: {
    incrementCounter: (state) => {
      state.counter = Number(state.counter) + 1
    },
  },
  getters: {
  },
  actions: {
    onCounterIncrement:({ commit }) => {
      
    
      setTimeout(() => {
        commit('incrementCounter')
      }, 1500)  
    }
  },
  modules: {
  }
})
