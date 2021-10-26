<template>
    <h1>VueUse demo</h1>
    Color: <span :style="{'backgroundColor':color}">{{color}}</span>
    <hr>
    {{title}}<br>
    <button @click="setTitle" class="btn btn-primary">Change title</button>&nbsp;
    <button @click='copyText' class="btn btn-secondary">Copy title</button>
<!-- <button @click='speak'>Speak page title</button> -->
</template>

<script>
import { useCssVar, useTitle, useClipboard, useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

export default {
  setup () {
    // css vars
    const el = ref(null)
    const color = useCssVar('--color', el)

    // title
    const title = useTitle()
    const setTitle = () => {
      title.value = 'Vue3: Modern Frontend App Development'
    }

    // save in LS/SS
    const titleSaved = useStorage('demo-app-title', title.value)
    // const titleSaved = useStorage('demo-app-title', title.value, sessionStorage)

    // clipboard
    const { text, copy, isSupported } = useClipboard()
    console.log('isSupported:', isSupported)
    const copyText = () => {
      copy(title.value)
      titleSaved.value = title.value
    }

    // even speech!
    // from v6
    // const {
    //     isPlaying,
    //     status,
    //     voiceInfo,
    //     utterance,
    //     error,
    //     toggle,
    //     speak
    //     } = useSpeechSynthesis()

    return {
      color,
      title,
      setTitle,
      copyText
      // speak
    }
  }
}
</script>

<style>

</style>
