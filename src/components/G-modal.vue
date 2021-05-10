<template>
    <div>
   

<!-- Modal -->
<div class="modal fade" id="Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modalHeader">
        <button type="button"  data-bs-dismiss="modal" >close</button>
      </div>
    <div class="image">
        <img 
        :src="activeImage.src"
        />
    </div>
    <div class="images">
        <img 
    v-for="(getImage, index) in getImages"
          :key="getImage.id"
    :src="getImage.src" @mouseover="changeImage(index)"
    />
    </div>

     
      
    </div>
  </div>
</div>
    </div>
</template>
<script>

export default {
    name: "Gmodal",
    props: ["getImages"],
    data(){
        return {
        activeImage:"../assets/peexoo1.jpeg"
        }
    },
    methods: {
        changeImage(index) {
            this.activeImage = this.getImages[index];
        }
    }
    
}
</script>
<style scoped>

.modal-content{
    height: 550px;
    width: 1150px;
    background: rgba(0, 0, 0, 0.5);
}
.image{
    width: 900px;
    height: 350px;
}
.image img{
    width: 700px;
    height: 350px;
    margin-left:25%
}

.images{
    width: 1145px;
    display: flex;
    padding: 5px;
    height: 150px;
    overflow: auto;
}
.images img {
    width: 15%;
     padding: 5px;
}
</style>