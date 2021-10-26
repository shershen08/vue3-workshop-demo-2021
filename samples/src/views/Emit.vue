<template>

  <h1>Catalog: </h1>

  <hr>
  Simple products<br>
  <Child @signal="log"/>
  <Child @signal="log" price="99.9"/>

  <hr>
  Advanced products<br>
  <ChildAdvanced @signal="log" price="99.9" qty="1"/>
  <ChildAdvanced @signal="log" price="34.5" qty="10"/>
  <ChildAdvanced @signal="log" v-model:price="initPrice" v-model:qty="initQty"/>

</template>

<script>
import Child from '../components/Child.vue'
import ChildAdvanced from '../components/ChildAdvanced.vue'

export default {
  components: {
    Child,
    ChildAdvanced
  },
  data: () => ({
    initPrice: 100,
    initQty: 10
  }),
  setup () {
    const log = (val) => console.log(`logged value: ${JSON.stringify(val)}`)
    return {
      log
    }
  }
}
</script>

<style>

</style>
