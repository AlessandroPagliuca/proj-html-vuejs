<template>
    <div class="container">
        <div class="carousel">
            <div class="carousel-images">
                <img v-for="(item, index) in data.dataTrailer" :key="index" :src="'/image' + item.img">
            </div>
            <div class="carousel-thumbnails">
                <img v-for="(item, index) in data.dataTrailer" :key="index" :src="'/image' + item.img"
                    @click="setCurrentImage(index)">
            </div>
        </div>
    </div>
</template>
  

<script>
import { data } from '../data/data';
export default {
    name: 'TrailerCarousel',
    data() {
        return {
            data,
            currentImageIndex: 0,
        };
    },
    methods: {
        setCurrentImage(index) {
            this.currentImageIndex = index;
        },
    },
};
</script>


<style lang="scss" scoped>
.carousel {
    position: relative;
    width: 300px;
    height: 300px;
}

.carousel-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.carousel-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-thumbnails {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-thumbnails img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin: 0 10px;
    cursor: pointer;
}
</style>