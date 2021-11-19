<template>
     <div class="row align-items-start mb-4">
       
    <div class="col col-8">
    <input class="form-control" type="text" v-model="search"/> {{search}}
        </div>
    <div class="col text-start">
       <button class="btn btn-primary" @click="reloadUsers">reload users</button>
    </div>
     </div>

     <div class="row align-items-start">
    <div class="col col-4">
          <h3>Selected user</h3>
        <div class="card">
         
        <img v-bind:src="profileImageUrl" class="card-img-top" width="200" alt="...">

        <div class="card-body">
                <h5 class="card-title">{{userFromHook.name}}</h5>
                <p class="card-text">{{userFromHook.city}} {{userFromHook.zipcode}}</p>
                <a href="#">{{userFromHook.email}}</a>
        </div>
        </div>
    </div>
    <div class="col">
      
    <!-- userData -->
    <div class="card mt-1" v-for="user in userData" :key="user.id">
        <div class="card-body text-start">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.city}} {{user.zipcode}}</p>
            <a href="#">{{user.email}}</a>
            <button class="btn btn-secondary m-2" @click="selectUser(user)">select {{user.name}}</button>
        </div>
    </div>
    </div>
  </div>

      

    <br><br>
    <!-- usersMatchingSearchQuery -->
    <!-- <div class="card" style="width: 18rem;" v-for="user in usersMatchingSearchQuery" :key="user.id">
        <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.city}} {{user.zipcode}}</p>
            <a href="#" class="btn btn-primary">{{user.email}}</a>
        </div>
    </div> -->

    <!-- usersMatchingSearchQueryV2 -->
    <!-- <div class="card" style="width: 18rem;" v-for="user in usersMatchingSearchQueryV2" :key="user.id">
        <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.city}} {{user.zipcode}}</p>
            <a href="#" class="btn btn-primary">{{user.email}}</a>
        </div>
    </div> -->

</template>

<script>
import { fetchUserRepositories } from '@/api/repositories'
import { ref, watch, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useUser } from '../hooks/useUser'

export default {
  setup (props) {
    const userData = ref([])

    /// ////////////////
    /// Load the list
    /// ////////////////

    const getUserRepositories = async () => {
      userData.value = await fetchUserRepositories(props.user)
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

    const search = ref('')

    /// ////////////////
    // filter the list
    // v1
    /// ////////////////
    const usersMatchingSearchQuery = ref([])
    watch(search, (searchvalue, oldValue) => {
      usersMatchingSearchQuery.value = userData.value.filter(item => { return item.name.includes(searchvalue) })
    })

    /// ////////////////
    // filter the list
    // v2
    /// ////////////////
    const usersMatchingSearchQueryV2 = computed(() => {
      return userData.value.filter(item => { return item.name.includes(search.value) })
    })

    /// /////////////
    // save in store
    // local
    /// ////////////////
    const store = useStore()
    // const selectUser = (data) => {
    //     store.commit('userData', data);
    // }

    /// ////////////////
    // hook
    /// ////////////////
    const { user } = useUser()
    const selectUser = (data) => {
      user.value = data
    }

    /// ///////////////
    /// random image for selected user
    /// ////////////////
    const ImageUrl = 'https://picsum.photos/200/300'
    const profileImageUrl = ref('')
    watch(user, async () => {
      const img = await fetch(ImageUrl)
        .then(response => response.blob())
        .then(blob => {
          var reader = new FileReader()
          reader.onload = function () {
            profileImageUrl.value = this.result
          }
          reader.readAsDataURL(blob)
        })
    })

    return {
      userData,
      getUserRepositories,
      usersMatchingSearchQuery,
      usersMatchingSearchQueryV2,
      reloadUsers,
      search,
      selectUser,
      userFromHook: user,
      profileImageUrl
    }
  }
}
</script>

<style>

</style>
