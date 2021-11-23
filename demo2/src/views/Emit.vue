<template>

    <h1>Catalog: </h1>

    <Child/>
    <ChildAdvanced/>

</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import Child from '../components/Child.vue'
import ChildAdvanced from '../components/ChildAdvanced.vue'


export default {
  components: {
    Child,
    ChildAdvanced
  },
   data: () => ({}),
    setup () {

    return {}
  },

}
</script>

<style>

</style>