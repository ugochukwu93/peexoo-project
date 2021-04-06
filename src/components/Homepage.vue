<template>
    <div class="Homepage">
        <AboutManager/>
        <Gallery/>
    </div>
</template>

<script>
import Gallery from './Gallery.vue'
import AboutManager from './About-manager'

export default{
    name: "Homepage",
    components: {
        Gallery,
        AboutManager
    },
    setup() {
        
    },
}
</script>
<style scoped>
    .Homepage {
        /* position: relative; */
        display: flex;
        justify-content: space-around;
    }
</style>
