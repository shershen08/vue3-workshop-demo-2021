const myPlugin = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
    // console.log(state)\\\

    const filteredStore = {
      ...state.product,
      ...state.year
    }
    localStorage.setItem('state', JSON.stringify(filteredStore))
  })
}

export default myPlugin
