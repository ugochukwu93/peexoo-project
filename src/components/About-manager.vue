<template>
    <div class="about-manager-container" v-if="showBox">
        <p @click="showBox = !showBox" class="hide">Hide</p>
        <img src="../assets/tim_mcbaj_53652000_2255623191378916_4966133143083590398_n.png" />
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
                <button>Book Now</button>
            </ul>
    </div>
</template>

<script>


export default {
    name: "AboutManager",
    data: ()=> {
        return {
            showBox: true
        }
    }
        
    
}
</script>


<style scoped>
.hide {
    margin-left: 372px;
    color: #E39400;
    font-size: 14px
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
img {
    margin-top:38px;
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
    margin-left:79px;
    margin-right:78px
}
.social-link i {
    border: 1px solid black;
    border-radius: 10px;
    padding: 2px;
    
}
.social-link li{
    padding-left: 20px;
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