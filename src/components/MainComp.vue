<template>
    <main>
        <CarouselHorizontal />
        <SecondCarousel />
        <LifestyleAndStories />
        <!--Advertising banner-->
        <div class="w-100 mt-5 p-3 d-flex justify-content-center align-items-center bg-grey">
            <div class="container">
                <div class="img-body">
                    <img src="/image/header-banner.webp" alt="banner">
                </div>
            </div>
        </div>
        <FeaturedPosts />
        <TrailerCarousel />
        <PicturesBottom />
    </main>
</template>

<script>
import CarouselHorizontal from './CarouselHorizontal.vue';
import SecondCarousel from './SecondCarousel.vue';
import LifestyleAndStories from './LifestyleAndStories.vue';
import FeaturedPosts from './FeaturedPosts.vue';
import TrailerCarousel from './TrailerCarousel.vue';
import PicturesBottom from './PicturesBottom.vue';
    export default {
        name: 'MainComp',
        components:{
            CarouselHorizontal,
            SecondCarousel,
            LifestyleAndStories,
            FeaturedPosts,
            TrailerCarousel,
            PicturesBottom,
        }
    }
</script>

<style lang="scss" scoped>
    main{
        padding-top: 179px;
    }

    .bg-grey{
        background-color: #f3f3f3;
    }

    .img-body{
        width: 100%;
        height: 90px;

        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }
</style>