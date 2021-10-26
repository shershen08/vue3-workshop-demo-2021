<template>
    <button @click="reloadUsers">reload users</button>
    <br><br>
    <div class="card" style="width: 18rem;" v-for="user in userData" :key="user.id">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
        <h5 class="card-title">{{user.name}}</h5>
        <p class="card-text">{{user.city}} {{user.zipcode}}</p>
        <a href="#" class="btn btn-primary">{{user.email}}</a>
    </div>
    </div>
</template>

<script>
import { fetchUserRepositories } from '@/api/repositories'
import { ref, watch, onMounted } from 'vue'

export default {
  setup (props) {
    const userData = ref([])
    const getUserRepositories = async () => {
      userData.value = await fetchUserRepositories()
    }

    onMounted(getUserRepositories) // on `mounted` call `getUserRepositories`

    watch(userData, (newValue, oldValue) => {
      console.log('The new userData is: ' + userData.value)
    })

    const reloadUsers = () => {
      userData.value = []
      setTimeout(() => {
        getUserRepositories()
      }, 500)
    }

    return {
      userData,
      getUserRepositories,
      reloadUsers
    }
  }
}
</script>

<style>

</style>
