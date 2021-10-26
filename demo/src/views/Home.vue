<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Vue3: Modern Frontend App Development"/> -->


    <Counter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter
  }
}
</script>
