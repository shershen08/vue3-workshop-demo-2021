import {ref, computed} from 'vue';
import { useStore } from 'vuex'

export const useCounter = () => {

    const store = useStore()

    const counterValueFromStore = computed(() => store.state.counter)

    const incrementTheStoreValue = () => store.commit('incrementCounter')

    return {
        counterValueFromStore,
        incrementTheStoreValue
    }

    // LOCAL
    
    // const counterValue = ref(0);

    // const counterx2 = computed(() => counterValue.value * 2)

    // const increment = () => {
    //    counterValue.value += 1 
    // }

    // return {
    //     counterValue,
    //     increment,
    //     counterx2
    // }
}