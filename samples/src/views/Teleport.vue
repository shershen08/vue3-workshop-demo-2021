<script>
import { useStore } from 'vuex'
import { useName } from '../hooks/appName'
export default {
  name: 'Teleport',
  setup () {
    const { state } = useStore()
    return {
      appname: useName(),
      state
    }
  }
}
</script>

<template>
<div class="py-5 text-center">
  <!-- <img class="d-block mx-auto mb-4" src="/logo.png" alt="" width="72" height="72"> -->
  <h2>This is {{ appname }} </h2>
  <p>from Modern Frontend App Development</p>
  <p class="lead">
  </p>
</div>
<Teleport to="#footer">
  <p class="mb-1">&copy; {{ appname }}</p>
</Teleport>
</template>
