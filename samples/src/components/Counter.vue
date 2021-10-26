<template>
  <h2>Classic counter example</h2>
  value: {{counterValue}}<br>
  <button @click="increment" class="btn btn-primary">increment by 1</button>&nbsp;
  <button @click="incrementWithAsync" class="btn btn-primary">increment by 1 and 1 more later</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Counter',
  setup () {
    const store = useStore()

    // read
    const counterValue = computed(() => store.state.counter)
    // write
    const increment = () => store.commit('incrementCounter')

    const incrementWithAsync = () => store.dispatch('onSetCounterAsync')

    return {
      counterValue,
      increment,
      incrementWithAsync
    }
  }
}
</script>

<style>

</style>
