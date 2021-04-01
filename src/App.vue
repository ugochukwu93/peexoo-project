<template>
  <div id="app">
   <Navbar/>
   <HeaderImg/>
   <AboutManager/>

  </div>
</template>


<script>
import AboutManager from './components/About-manager.vue'
import HeaderImg from './components/Header-img.vue'
 import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
    HeaderImg,
    AboutManager,
    
   
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
  /* margin-top: 60px; */
}

</style>
