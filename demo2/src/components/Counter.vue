<template>
   <!-- <h2>Classic counter example</h2>
   
    value: {{counterValue}} x 2 = {{counterx2}} <br>
    <button @click="increment">increment by 1</button>
    -->


    <h2>Store counter example</h2>


    counterValueFromStore: {{counterValueFromStore}}

     <button @click="incrementTheStoreValue">increment store by 1</button>
         
</template>


<script>
import {computed, ref} from 'vue';
import {useCounter} from '../hooks/useCounter'

export default {
    setup(){


        return {
         ...useCounter(),
        //  counterValueFromStore,
        //  incrementTheStoreValue
        }
    },

}
</script>

<style>

</style>