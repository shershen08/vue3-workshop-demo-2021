<template>
  <Header/>
    <img alt="Vue logo" src="./assets/logo.png">
  
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/emit">emit</router-link>
    <router-link to="/dataload">dataload</router-link>
  </div>

  <!-- <h3>counter reading: {{counterValue}}</h3>
  {{counterx2}}
  <button @click="change">change</button> -->
  <router-view/>
</template>
<script>
import Header from './components/Header.vue'
import useCounter from './hooks/useCounter'
import {provideTheme} from './hooks/useTheme'

export default {
  setup() {

      provideTheme();

      const {counterValue, counterx2} = useCounter();

  
      return {
        counterValue,
        counterx2
      }
  },
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
