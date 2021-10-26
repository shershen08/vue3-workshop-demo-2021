<template>

    <h1>Catalog: </h1>

    {{valueThoughVModel}}

    <hr>
    Simple products<br>
    <Child @signal="log"/>
    <Child @signal="log" :price="initPrice"/>
    <Child @signal="log" price="111"/>
    <Child @signal="log" price="99.9"/>


    <Child @signal="log" v-model:price="valueThoughVModel"/>

    <br>
    <ChildAdvanced @signal="log"
                    v-model:price="initPrice"
                    v-model:qty="initQty"/>

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
   //data: () => (),
    setup () {

    const initialValues = reactive({
        initPrice: 100,
        initQty: 10,
        valueThoughVModel: 1000
    })
    
    const log = (val) => console.log(`logged value: ${JSON.stringify(val)}`)

    return {
    ...toRefs(initialValues),
      log
    }
  },
//   methods: {
//       log(val){
//           console.log(`logged value: ${JSON.stringify(val)}`)
//       }
//   }
}
</script>

<style>

</style>