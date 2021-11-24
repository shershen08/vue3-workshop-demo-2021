<template>

   search users <input type="text" v-model="search"/> 


    <div class="card" style="width: 18rem;"
        v-for="user in usersMatchingSearchQuery"
        :key="user.id"
        @click="selectUser(user)">


      <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">{{user.city}} {{user.zipcode}}</p>
          <a href="#" class="btn btn-primary"
          :style="{'background-color': theme.bgColor}">{{user.email}}</a>
      </div>
    </div>
</template>
<script>

import {useTheme} from '../hooks/useTheme';
import useUser from '../hooks/useUser';

export default {
  setup () {

    return {
      ...useUser(),
      theme: useTheme()
    }
  }
}
</script>