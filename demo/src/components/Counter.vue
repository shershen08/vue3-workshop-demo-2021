<template>
    <h2>Classic counter example</h2>
    value: {{counterValue}}<br>
    <button @click="incrementWithAction" class="btn btn-primary">increment by 1</button>&nbsp;
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import useCounter from '../hooks/useCounter'

export default {
  name: 'Counter',
  setup () {
        const {
            counterValue,
            incrementWithAction
        } = useCounter();

        return {
            counterValue,
            incrementWithAction
        }
  }

}
</script>

<style>

</style>