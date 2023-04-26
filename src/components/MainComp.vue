<template>
    <main>
        <CarouselHorizontal />
        <SecondCarousel />
    </main>
</template>

<script>
import CarouselHorizontal from './CarouselHorizontal.vue';
import SecondCarousel from './SecondCarousel.vue';
    export default {
        name: 'MainComp',
        components:{
            CarouselHorizontal,
            SecondCarousel,
        }
    }
</script>

<style lang="scss" scoped>
    main{
        padding-top: 179px;
    }

</style>