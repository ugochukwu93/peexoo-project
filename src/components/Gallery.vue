<template>
<div class="content">
    <div class='row'>
    <img data-bs-toggle="modal" data-bs-target="#Backdrop"
    v-for="getImage in getImages"
          :key="getImage.id"
    :src="getImage.src"
    />
  </div>
  <Gmodal v-bind:getImages= "getImages"></Gmodal>
</div>
</template>
 

<script>


import Gmodal from './G-modal';
export default{
    name: "Gallery",
     components: {
       Gmodal,
     },
    data() {
      return {
        
        getImages:[
         
          {
            id: 1,
            src: require("../assets/peexoo1.jpeg")
          },
          {
            id: 2,
            src: require("../assets/peexoo10.jpeg")
          },
          {
            id: 3,
            src: require("../assets/peexoo2.jpeg")
          },
          {
            id: 4,
            src: require("../assets/peexoo3.jpeg")
          },
          {
            id: 5,
            src: require("../assets/peexoo4.jpeg")
          },
          {
            id: 6,
            src: require("../assets/peexoo5.jpeg")
          },
          {
            id: 7,
            src: require("../assets/peexoo6.jpeg")
          },
          {
            id: 8,
            src: require("../assets/peexoo7.jpeg")
          },
          {
            id: 9,
            src: require("../assets/peexoo8.jpeg")
          },
          {
            id: 10,
            src: require("../assets/peexoo9.jpeg")
          },
          
        ]
      }
    },
    // methods: {
    //     getGallerys(){
    //         fetch("https://purr.objects-us-east-1.dream.io/i/ee2w22.jpg")
    //         .then(response=>response.json())
    //         .then(data=>{
    //             this.getImages = data;
    //         })
    //     }
    // }
}
</script>

<style scoped>

.content{
    position:relative; 
    column-count:3;
    padding: 20px;
    margin-left: 66px;
    margin-right: 48px;  
}
.row {
  margin-bottom: 10px;
  /* overflow:hidden;  */
}
.row img {
    margin-top: 8px;
    vertical-align: middle;
    border-radius: 10px;
    margin-left: 20px;
}
img {
  width: 100%;
  height: auto;
  cursor: pointer;
}
/* img:hover{
  border:3px solid #FFAA0A;
}  */
</style>
