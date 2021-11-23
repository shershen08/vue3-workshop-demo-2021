<template>
  <h3>selected user</h3>
  {{user.name}}
</template>

<script>
import { useUser } from '../hooks/useUser'
import {toRefs} from 'vue'
import { mapActions } from 'vuex'

export default {
    setup(){
         return {
             ...toRefs(useUser())
         }
    }
}
</script>


<style>

</style>