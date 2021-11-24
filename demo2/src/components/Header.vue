<template>
  <header v-bind:style="{'color': theme.mainColor}">Vue3 practical development <small>by Mikhail Kuznetcov</small></header>
</template>

<script>
import { defineComponent } from 'vue'
import {useCounter} from '../hooks/useCounter'

import {useTheme} from '../hooks/useTheme';

export default defineComponent({
  setup() {
    const {counterValueFromStore} = useCounter()
    return {
      counterValueFromStore,
      theme: useTheme()
    }
  },
})
</script>

<style>

</style>