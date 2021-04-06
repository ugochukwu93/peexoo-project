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

                    <p class="expand-btn">Expand Project</p>
                
            </div>
        </div>
        <div class="projects">
            <div>
                <img src="https://bloximages.newyork1.vip.townnews.com/miamitimesonline.com/content/tncms/assets/v3/editorial/d/7d/d7d5e48e-7c3e-11eb-8408-2feb026c5056/603fbb82a63c8.image.jpg"  width="374" height="283">
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
    setup() {
        
    },
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
    display: flex
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
}

</style>
