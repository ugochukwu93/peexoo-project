<template>
<v-app>
  
  <v-content>
  <div id="app">
   <Navbar/>
   <HeaderImg/>
   <SecondNav/>
   <!-- <Homepage/> -->
   <!-- <Projects/> -->
   <router-view></router-view>
  </div>
  </v-content>
</v-app>
</template>


<script>
// import Homepage from './components/Homepage'
import HeaderImg from './components/Header-img.vue'
import Navbar from './components/Navbar'
import SecondNav from './components/second-nav'

export default {
  name: 'App',
  components: {
    SecondNav,
    Navbar,
    HeaderImg,
   
    
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  
}

</style>
