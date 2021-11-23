<template>

   search users <input type="text" v-model="search"/> 

    <div class="card" style="width: 18rem;"
        v-for="user in usersMatchingSearchQuery"
        :key="user.id"
        @click="selectUser(user)">


      <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">{{user.city}} {{user.zipcode}}</p>
          <a href="#" class="btn btn-primary">{{user.email}}</a>
      </div>
    </div>
</template>
<script>
import { fetchUserRepositories } from '@/api/repositories'
import { ref, watch, computed, onMounted } from 'vue'
import { useUser } from '../hooks/useUser'

export default {
  setup () {

    const userData = ref([])
     
     const getUserRepositories = async () => {
        userData.value = await fetchUserRepositories()
    }

    onMounted(getUserRepositories) 

    const search = ref('')

    const usersMatchingSearchQuery = computed(() => {
      return userData.value.filter(item => { return item.name.includes(search.value) })
    });

    const { user } = useUser()
    const selectUser = (data) => {
      user.value = data
    }

    return {
      userData,
      usersMatchingSearchQuery,
      search,
      selectUser
    }

  }
}
</script>