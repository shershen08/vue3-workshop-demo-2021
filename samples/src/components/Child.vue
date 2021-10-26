<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Child',
  props: ['price'],
  emits: ['signal'],
  setup (props, { emit }) {
    const price = ref(props.price || 42)
    const useBuy = () => emit('signal', price.value)
    return { price, useBuy }
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
