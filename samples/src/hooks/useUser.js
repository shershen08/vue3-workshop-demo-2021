import { computed } from 'vue'
import { useStore } from 'vuex'

export const useUser = () => {
  const store = useStore()

  const user = computed({
    get: () => store.getters.userData,
    set: (data) => {
      store.commit('userData', data)
    }
  })

  return {
    user
  }
}
