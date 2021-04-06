<template>
<div class="content">
  <div>
    
  </div>
  <div class='photos'>
  <img 
  
  v-for="getImage in getImages"
        :key="getImage.id"
  :src="getImage.src"
  >
</div>
</div>



</template>
 

<script>



export default{
    name: "Gallery",
     components: {
      
     },
    data() {
      return {
        getImages:[
         
          {
            id: 1,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudx1TsPsaA3-mEJi5OlVUNvGVtF2aX-0tbA&usqp=CAU"
          },
          {
            id: 2,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudx1TsPsaA3-mEJi5OlVUNvGVtF2aX-0tbA&usqp=CAU"
          },
          {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudx1TsPsaA3-mEJi5OlVUNvGVtF2aX-0tbA&usqp=CAU"
          },
          {
            id: 4,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudx1TsPsaA3-mEJi5OlVUNvGVtF2aX-0tbA&usqp=CAU"
          },
          {
            id: 5,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbG0DNfCqEl0RwzNQb11QUG4Edsna7ESCsg&usqp=CAU"
          },
          {
            id: 6,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbG0DNfCqEl0RwzNQb11QUG4Edsna7ESCsg&usqp=CAU"
          },
          {
            id: 7,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbG0DNfCqEl0RwzNQb11QUG4Edsna7ESCsg&usqp=CAU"
          },
          {
            id: 8,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbG0DNfCqEl0RwzNQb11QUG4Edsna7ESCsg&usqp=CAU"
          },
          {
            id: 9,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU"
          },
          {
            id: 10,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU"
          },
          {
            id: 11,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU"
          },
          {
            id: 12,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU"
          },
          {
            id: 13,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJXWvDOHdWsW6I2ScQyANvAHhZUl3wusMrQ&usqp=CAU"
          },
          {
            id: 14,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJXWvDOHdWsW6I2ScQyANvAHhZUl3wusMrQ&usqp=CAU"
          },
          {
            id: 15,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJXWvDOHdWsW6I2ScQyANvAHhZUl3wusMrQ&usqp=CAU"
          },
         
          {
            id: 18,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
          },
         
          {
            id: 21,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaWG99nIBPWAHfuFAaDXI1aRv1TlJopytXg&usqp=CAU"
          },
          {
            id: 22,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7T7cUHc3qI_UrzrQbMkkvlvre8FwgaJzE_A&usqp=CAU"
          },
          {
            id: 23,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTde5w-zAymks1-Bb6C05ScHKaxSaTjJwLUIg&usqp=CAU"
          },
          {
            id: 24,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCN8jnvD5CDuvlpwAgvq0REkiNzfcq-Mampg&usqp=CAU"
          },
          {
            id: 25,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwwPXHQQNZ1GRAHZU17HZiap3BpCx8PZsiA&usqp=CAU"
          },
          {
            id: 26,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6Q_K6QTnOnoVxI_5h-aCH0jthEP4_CcBiQ&usqp=CAU"
          },
          {
            id: 27,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6zcJG7ZvdpqrXNrnsrfm8ODWUPDiNjRB0w&usqp=CAU"
          },
          {
            id: 28,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQf6asJa6sQXhlncfrddgTpCL3_qGegTRFmQ&usqp=CAU"
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
.content {
  display: flex;
  margin-left: 66px;
  margin-right: 48px;
  color:#FFFDF7
}
     .photos {
       line-height: 0;
      -webkit-column-count: 5;
      -webkit-column-gap: 0px;
      -moz-column-count: 5;
      -moz-column-gap: 0px;
      column-count: 5;
      column-gap:  16px; 


    } 
    img {
      margin-top: 27px;
      border-radius:10px;
      width: 100% ;
      height: auto !important;
       
    }
    
</style>
