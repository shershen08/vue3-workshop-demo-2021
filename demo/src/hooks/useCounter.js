import { useStore } from 'vuex'
import { computed } from 'vue'

const useCounter = () => {
    const store = useStore()

    // read
    const counterValue = computed(() => store.state.counter)
    // write
    const increment = () => store.commit('incrementCounter')
    const incrementWithAction = () => store.dispatch('onCounterIncrement')

    //new feature
    const counterx2 = computed(() => counterValue.value * 2)

    return {
        counterValue,
        counterx2,
        increment,
        incrementWithAction
    }

}
export default useCounter;