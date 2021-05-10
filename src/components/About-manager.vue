<template>
    <div class="about-manager-container" v-if="showBox" v-bind:showBox="showBox">
        <p @click="showBox = !showBox" class="hide-btn">Hide</p>
        <!-- Button trigger modal -->
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img  class="img" src="../assets/tim_mcbaj_53652000_2255623191378916_4966133143083590398_n.png"  />
        </div>

        <!-- Modal -->
        <div  class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl " >
            <div class="modal-content" id="staticBackdrop">
            
                <button  class="btnclose" data-bs-dismiss="modal" >close image</button>
            
            <div class="modal-body">
                <img src="../assets/tim_mcbaj_53652000_2255623191378916_4966133143083590398_n.png" width="344" height="344" />
            </div>
            <p class="p">Built for free <i class="fas fa-heart"></i> on Peexoo</p>
            </div>
            
        </div>
        
        </div>
        <h1>Felix Nwadike</h1>
        <p class="about-text">I'm a wedding and portrait photographer based in Lagos, Nigeria. i'have been shooting wedding since i was in high school (before i ever had my driver's) </p>
        <div class="views-likes">
            <div>
                <h2>22.1k</h2>
                <p>Total View</p>
            </div>
            <div>
                <h2><i class="far fa-heart"></i>13.1k</h2>
                <p>Total Likes</p>
            </div>
            <div>
                <h2>Sony 92j</h2>
                <p>Camera Lens</p>
            </div>
        </div>
            <ul class="category-list">
                <li class="li-category">Category</li>
                <li class="li-food">Food  . </li>
                <li>Portrait  .</li>
                <li>Wedding . </li>
                 <li>Model</li>
            </ul>
            <p class="peexoo-link"><i class="fas fa-share-alt"></i> www.peexoo.ai/anijohnson</p>
            <ul class="social-link">
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fas fa-envelope"></i></li>
                <li><button>Book Now</button></li>
            </ul>
            <p class="about-p">Built for free  <i class="far fa-heart"></i> on Peexoo</p>
    </div>
</template>

<script>


export default {
    name: "AboutManager",
    data: ()=> {
        return {
            showBox: true,
        } 
    },     
    
}
</script>


<style scoped>


#staticBackdrop {
    background: black;
   
}
.p {
    color:#FFFFFF;
    margin-top: 90px;
    font-size: 12px
}
.about-p {
    color:#4D4D4D;
    font-size:12px;
    margin-top:75px;
}
.p i {
    background-color: transparent linear-gradient(180deg, #FF7979 0%, #FFA81D 100%) 0% 0% no-repeat padding-box;
}
.btnclose{
    margin-left: 44%;
    background-color: #707070;
    border: none;
    font-size: 14px;
    width:90px;
    height:30px;
    margin-bottom: 90px
}
.hide-btn {
    margin-left: 350px;
    color: #E39400;
    font-size: 14px;
    cursor:pointer;
}
.views-likes {
    display: flex;
    justify-content: space-around;
    margin-left: 41px;
    margin-right: 41px
}
.views-likes p {
    font-size: 14px;
    color: #4D4D4D;
    margin-top: 5px


}
h2 {
    font-size : 18px;
    color: #000000;
    /* font-family: "inter"; */
    font-weight: bold
}
ul {
    display: flex;
}
.about-manager-container {
    border: 1px solid #FFB500;
    width: 416px;
    height:649px;
    border-radius: 5px;
    background-color: #FFFFFF;
    position: relative; 
    bottom:166px;
    left: 52px

}
h1 {
    font-size : 34px;
    margin-top: 12px;
    color: #000000
}
.img {
    margin-top:38px;
    cursor:pointer;
}
.about-text {
    color: #000000;
    font-size: 16px;
    margin-left : 22px;
    margin-right : 22px
}

/*  */
.category-list li {
    padding-left:10px;
    list-style-type: none;
    color: #000000;
    margin-top: 33px;
}
.category-list li:first-child {
    color: #4D4D4D
}
.peexoo-link {
    margin-top: 24px;
   
}
.peexoo-link i {
    color:#F29F05
}
.social-link {
    margin-left:40px;
    margin-right:78px
}
.social-link i {
    margin-top: 5px;
    border-radius: 10px;
    padding: 4px;
    background:#E4E4E4;
    
}
.social-link li{
    padding-left: 30px;
    list-style-type: none;
    width: 14.77px;
    height:7.99px
   
    
}
button {
    margin-left: 17px; 
    font-size:14px;
    border-radius: 10px;
    width: 100px;
    height: 37px;
    background-color:#F29F05;
    border: 1px solid #F29F05;
    color: white
}


</style>