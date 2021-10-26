<script>
import { defineComponent, ref } from 'vue'
//-
export default defineComponent({
  name: 'Child',
  props: ['price'],
  emits: ['signal'],

  //setup (props, { emit }) {

  setup ({price}, { emit }) {
    const priceInternal = ref(price || 42)

    const useBuy = () => emit('signal', priceInternal.value)
    return { 
            price: priceInternal,
            useBuy 
            }
  }

})
</script>

<template>
<form class="card p-2 col-4">
  <h2>Product #{{parseInt(Math.random()*100)}}</h2>
  <div class="input-group">
    Price: <input v-model="price" type="text" class="form-control" placeholder="Price"><br/>
    <div class="input-group-append">
      <button @click="useBuy" type="button" class="btn btn-secondary">Add to cart</button>
    </div>
  </div>
</form>
</template>
