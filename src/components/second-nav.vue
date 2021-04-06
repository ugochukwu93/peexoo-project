<template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                 <img id="img" src="../assets/tim_mcbaj_53652000_2255623191378916_4966133143083590398_n@2x.png" width="46" height="46"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li id="li-first" class="nav-item">
                        <a class="nav-link text-warning" aria-current="page" href="#">ShowCard</a>
                        </li>
                        <li id="li-second" class="nav-item">
                        <a class="nav-link ml-5" href="#">Portfolio</a>
                        </li>
                        <li id="li-third" class="nav-item">
                        <router-link to="/project" class="nav-link">Projects</router-link>
                        </li>
                        <li id="li-forth" class="nav-item">
                        <a class="nav-link" href="#">Availability</a>
                        </li>
                        <li id="li-last" class="nav-item">
                        <router-link to="/package" class="nav-link" href="#">PricingPackage</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>


export default {
    name: "SecondNav",
    
}
</script>

<style scoped>
img{
    margin-right: 8px;
    margin-left: 70px
}
li {
    font-size: 14px;
    color: #000000;
    letter-spacing: 0.2px
}
li:hover {
    background: #FEF5E6;
    border-radius: 20px;
    font-weight: bold;
}
    #nav {
        width: 1280px;
        height: 69px;
        background-color: #FFFDF7
    }
    li:first-child {
        margin-right :204px;
        color: #E39400;
    }
    #li-second {
        margin-right :59px;
        color: #000000;
    }
    #li-third {
        margin-right :57px;
         color: #000000;
    }
    #li-forth {
        margin-right :53px;
         color: #000000;
    }
    #li-last {
        margin-right :397px;
         color: #000000
    }
</style>
