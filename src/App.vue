<template>
  <HeaderComp />
  <MainComp />
  <FooterComp />
  <TrailerCarousel />
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
import TrailerCarousel from './components/TrailerCarousel.vue';
  export default {
    name: 'App',
    components:{
      HeaderComp,
      MainComp,
      FooterComp,
      TrailerCarousel,

    }
  }
</script>

<style lang="scss" scoped>

</style>