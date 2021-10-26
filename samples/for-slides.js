export const useMousePosition = () => {
    const pos = reactive({
      x: 0,
      y: 0
    })
    // ...
    return pos
   }
   
   export default {
    setup() {
      // Not reactive!
      const { x, y } = useMousePosition()
      return {
        x,
        y
      }

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
setup() {
    const route = useRoute()

    // watch params and load new data
    watch(
    () => route.params.id,
        async newId => {
            //fetchUser
        }
    )

import { useStore } from 'vuex'

export default {
    setup () {
    const store = useStore();
    //read
    const counterValue = computed(() => store.state.count);
    //write
    const increment =  () => store.commit('increment');