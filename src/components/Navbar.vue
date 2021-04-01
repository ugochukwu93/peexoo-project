<template>
        <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                 <img id="img" src="../assets/logo.71d57f7c.png" width="102" height="26"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li id="li-first" class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">BusinessManager</a>
                        </li>
                        <li id="li-second" class="nav-item">
                        <a class="nav-link ml-5" href="#">MarketPlace</a>
                        </li>
                        <li id="li-third" class="nav-item">
                        <a class="nav-link" href="#">XooCam</a>
                        </li>
                        <li  class="nav-item">
                        <select id="select" class="custom-select custom-select-lg mb-3">
                            <option selected>JoinPeexoo</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
   
</template>

<script>

export default {
    name: "Navbar"
}
</script>

<style scoped>
li {
    color: #4D4D4D;
    font-family: "Eudoxus Sans,regular"
}
    #nav {
        width: 1280px;
        height: 70px;
        color: #FFFFFF;
        box-shadow: #00000029 0px 1px 3px ;

    }
    #li-first {
        margin-left : 499px; 
        font-size : 16px;
    }
    #li-second {
        margin-left : 21px;
         font-size : 16px;
    }
    #li-third {
        margin-left : 21px;
         font-size : 16px;
    }
    #img {
        margin-left : 40px
    }
    #select {
        width: 88px;
        height: 21px;
        border: none;
        outline: none;
        color: #E39400;
        letter-spacing: -0.26px;
        font: "normal normal normal 16px/21px Eudoxus Sans";
        font-size : 16px;
        text-align: center;
        margin-right: 61px;
        margin-left: 124px;
        margin-top: 4px;
        
    }
</style>
