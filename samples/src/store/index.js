import { createStore } from 'vuex'
// import myPlugin from "./vuex-plugin";

const oldState = localStorage.getItem('state')
console.log(oldState)
// try {
// }

const defaultState = {
  counter: '1234', // SAVE
  product: {}, // SAVE
  userData: {},
  listItems: []
}

export default createStore({
  // plugins: [myPlugin],
  state: JSON.parse(oldState) || defaultState,
  actions: {
    onSetCounterAsync: ({ commit }, counter) => {
      commit('incrementCounter')

      setTimeout(() => {
        commit('incrementCounter')
      }, 1000)
    },
    onSetProduct: ({ commit }, data) => {
      commit('setProduct', data)
    },
    onSetuserData: ({ commit }, data) => {
      commit('userData', data)
    }
  },
  mutations: {
    incrementCounter: (state) => {
      state.counter = Number(state.counter) + 1
    },
    setProduct: (state, data) => {
      state.product = data
    },
    userData: (state, data) => {
      state.userData = data
    }
  },
  getters: {
    userData: (state) => state.userData
  }
})
