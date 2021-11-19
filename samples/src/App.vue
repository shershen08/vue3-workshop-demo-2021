<template>
  <ul class="nav">
     <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
     </li>
     <li class="nav-item" v-for="item in routes" :key="item">
      <router-link class="nav-link" :to="item">{{item}}</router-link>
    </li>
  </ul>
  <br><br>
  <router-view/>

  <hr/>
  <ScriptSetup/>
  <ExperimentRefs/>
  
</template>
<script>
import { provideName } from './hooks/appName'
import ScriptSetup from './components/ScriptSetup.vue'
import ExperimentRefs from './components/ExperimentRefs.vue'

export default {
  components: {
    ScriptSetup,
    ExperimentRefs
  },
  setup () {
    const routes = [
      'teleport',
      'emit',
      'utils',
      'store',
      'dataload'
    ]
    provideName()

    return {
      routes
    }
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
#footer {
  bottom: 10px;
  position: absolute;
}
</style>
