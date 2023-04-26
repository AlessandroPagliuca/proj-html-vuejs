<template>
    <header>
       <UpdatesComp />
       <!--Advertising banner-->
        <div class="container">
            <div class="d-flex justify-content-between align-items-center py-3">
                <div class="img-anime ">
                    <img src="/image/anime-logo.webp" alt="anime-logo">
                </div>

                <div class="img-banner">
                    <img src="/image/header-banner.webp" alt="">
                </div>
            </div>
        </div>
      
    </header>
</template>

<script>
import UpdatesComp from './UpdatesComp.vue';
    export default {
        name: 'HeaderComp',
        components:{
            UpdatesComp,
        }
    }
</script>

<style lang="scss" scoped>

    .img-anime{
        width: 160px;
        height: 50px;

        img{
            width: 100%;
            height: 100%;
        }
    }
    .img-banner{
        width: 420px;
        height: 70px;

        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;

        }
    }

   


</style>