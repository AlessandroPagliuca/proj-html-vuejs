<template>
    <main>
        <CarouselHorizontal />
        <SecondCarousel />
        <LifestyleAndStories />
    </main>
</template>

<script>
import CarouselHorizontal from './CarouselHorizontal.vue';
import SecondCarousel from './SecondCarousel.vue';
import LifestyleAndStories from './LifestyleAndStories.vue';
    export default {
        name: 'MainComp',
        components:{
            CarouselHorizontal,
            SecondCarousel,
            LifestyleAndStories,
        }
    }
</script>

<style lang="scss" scoped>
    main{
        padding-top: 179px;
    }

</style>