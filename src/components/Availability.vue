<template>
  
   <div class="container">
       <div >
            <AboutManager/>
       </div>
       <div class="calendar">
           <b-calendar block></b-calendar>
       </div>
   </div>
</template>

<script>

import AboutManager from './About-manager.vue'
export default {
   name: "Availiability",
   components: {
       AboutManager
   }

}
</script>

<style scoped>

.container {
    display: flex;
}
.calendar {
    margin-top: 41px;
    width:60%;
}
.about-manager-container {
    border: 1px solid #FFB500;
    width: 385px;
    height:649px;
    border-radius: 5px;
    background-color: #FFFFFF;
    position: relative; 
    bottom:166px;
    left: 0px;
    margin-right: 16px;
    padding-right: 10px;
    
}
</style>
