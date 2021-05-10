<template>
<div class="project-container">
    <div>
        <AboutManager/>
    </div>
    <div class="portfolio-project">
        <div class="projects">
            <div>
                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="374" height="283">
            </div>
            <div>
                <h2>Orishirishi CookBook</h2>
                <div class="likes">
                    <div>
                        <p>33.5k <span>Likes</span></p>
                    </div>
                    <div>
                        <p>13M <span>Views</span></p>
                    </div>
                    <div>
                        <p>223 Images</p>
                    </div>
                </div>
                <div class="location">
                    <p>Location<span>:Lagos, Nigeria</span></p>
                    <p>Client<span>:Chef Gregory</span></p>
                    </div>
                    <p>You have seen shoots with colorful backgrounds and more often than not the backgrounds are savage widetone colored Paper Seamless backdrops or a white backdrop is lit with strobes and coloured gets</p>

                    <p @click="showBox =!showBox" class="expand-btn">{{name}}</p>
                    
                
            </div>
        </div>
 
        <div class="row" v-if="showBox">
                <img 
                    v-for="Image in Images"
                    :key="Image.id"
                    :src="Image.src"
            />
           
        </div>
        <div class="projects">
            <div>
                <img src="../assets/peexoo4.jpeg"  width="374" height="283">
            </div>
            <div>
                <h2>Dinner with Moet & His</h2>
                <div class="likes">
                    <div>
                        <p>33.5k <span>Likes</span></p>
                    </div>
                    <div>
                        <p>13M <span>Views</span></p>
                    </div>
                    <div>
                        <p>223 Images</p>
                    </div>
                </div>
                <div class="location">
                    <p>Location<span>:Lagos, Nigeria</span></p>
                    <p>Client<span>: His and Hers Nigeria</span></p>
                    </div>
                    <p>You have seen shoots with colorful backgrounds and more often than not the backgrounds are savage widetone colored Paper Seamless backdrops or a white backdrop is lit with strobes and coloured gets. for the most part as well, most of these types of fashion shoots are shot entirely with flash/strobes.
                        what we wanted to do here was twofold; we wanted to
                    </p>

                    <p class="expand-btn">Expand Project</p>
                
            </div>
        </div>
        <div class="projects">
            <div>
                <img src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480xany/3/6/1/134361_shutterstock_153912911_730332.jpg"  width="374" height="283">
            </div>
            <div>
                <h2>2020 Olympic Games</h2>
                <div class="likes">
                    <div>
                        <p>33.5k <span>Likes</span></p>
                    </div>
                    <div>
                        <p>13M <span>Views</span></p>
                    </div>
                    <div>
                        <p>223 Images</p>
                    </div>
                </div>
                <div class="location">
                    <p>Location<span>:Cario, Egypt</span></p>
                    <p>Client<span>World Sport Org</span></p>
                    </div>
                    <p>You have seen shoots with colorful backgrounds and more often than not the backgrounds are savage widetone colored Paper Seamless backdrops or a white backdrop is lit with strobes and coloured gets</p>

                    <p class="expand-btn">Expand Project</p>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

import AboutManager from './About-manager'
export default {
    name: "Projects",
     components: {
         AboutManager
    },
    data() {
      return {
        name:"Expand Project",
        showBox: false,
        Images:[
         
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
        ]
      }
    },
    methods: {
       change: function(){
            this.$emit('changeTitle', 'Close Project')
        }
    }
    
}   
</script>

<style scoped>
.projects {
    display: flex;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;
    letter-spacing: -0.43px;
    margin-top: 25px;
}
.projects h2 {
    font-size: 24px;
    color: #000000;
    font-weight: bold;
}
span {
    color: #4D4D4D;
    font-weight:200;
    margin-right:21px
}
.likes {
    display:flex;
}
.likes p {
    font-weight: bold
}
.project-container {
    background-color:#FFFDF7;
    display: flex;
}
.portfolio-project {
    margin-left: 66px
}
img {
    border-radius:10px;
    margin-right: 20px;
}
.location p {
    font-weight: bold;
    margin-bottom:2px
}
.expand-btn{
    color:#E39400;
    cursor:pointer;
}

.row {
    display:grid;
    gap:2px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 169px 269px 169px;
    margin: 30px auto 80px ;
    max-width: 80vw;
}

.row img:nth-child(2) {
    grid-column: auto / span 2;
}
.row img:nth-child(3) {
    grid-column: auto / span 2;
    grid-row: 20px / span 3
}

.row img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius:20px
}
.about-manager-container {
    border: 1px solid #FFB500;
    width: 380px;
    height:649px;
    border-radius: 5px;
    background-color: #FFFFFF;
    position: relative; 
    bottom:166px;
    left: 52px

}
</style>
