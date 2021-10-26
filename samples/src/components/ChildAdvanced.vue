<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ChildAdvanced',
  props: ['price', 'qty'],
  emits: ['signal'],
  setup (props, { emit }) {
    const price = ref(props.price || 42)
    const qty = ref(props.qty || 1)
    const useBuy = () => emit('signal', { price: price.value, qty: qty.value })
    return { price, qty, useBuy }
  }
})
</script>

<template>
<form class="card p-2 col-4">
   <h2>Product #{{parseInt(Math.random()*100)}}</h2>
     <div class="input-group">
       Price: <input v-model="price" type="text" class="form-control" placeholder="Price"><br>
     </div>
  <div class="input-group">

      <br>
    Quantity: <input v-model="qty" type="text" class="form-control" placeholder="Quantity"><br>

      <button @click="useBuy" type="button" class="btn btn-secondary">Add to cart</button>

  </div>
  <div>
  <strong>Product description</strong>
</div>
<div>
  Product images
</div>
</form>

</template>
