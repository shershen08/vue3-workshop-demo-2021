<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Vue3: Modern Frontend App Development"/> -->

    
    Color: <span :style="{'backgroundColor':color}">{{color}}</span>
<br>
    <button @click="setTitle">setTitle</button>

    <!-- <Counter/> -->
  </div>
</template>

<script>
import { useCssVar, useTitle, useClipboard, useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter
  },
  setup(){
    // css vars
    const el = ref(null)
    const color = useCssVar('--color', el)

    const title = useTitle()
 

    const titleSaved = useStorage('demo-app-title', title.value)


    const setTitle = () => {
      title.value = 'Vue3: Modern Frontend App Development'

      titleSaved.value = title.value
    }

    return {
      color,
      setTitle
    }
  }
}
</script>
