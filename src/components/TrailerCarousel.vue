<template>
    <div class="container">
        <div class="d-flex py-3">
            <div class="carousel ms-2">
                <div class="carousel-images">
                    <img v-for="(item, index) in data.dataTrailer" :key="index" :src="'/image' + item.img">
                </div>

            </div>
            <div class="box-thumbnails me-2">
                <div class="carousel-thumbnails d-flex flex-column">
                    <img v-for="(item, index) in data.dataTrailer" :key="index" :src="'/image' + item.img"
                        @click="setCurrentImage(index)">
                </div>
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
    mounted() {
        // Imposto classe "show" sull'img corrente all'avvio
        const currentImage = document.querySelector('.carousel-images img');
        currentImage.classList.add('show');
    },
    methods: {
        setCurrentImage(index) {
            // Rimuovo la classe "show" dall'img corrente
            const currentImage = document.querySelector('.carousel-images img.show');
            currentImage.classList.remove('show');
            // Aggiungo la classe "show" all'img selezionata
            const newImage = document.querySelectorAll('.carousel-images img')[index];
            newImage.classList.add('show');
            // Imposto l'indice dell'img corrente
            this.currentImageIndex = index;
        },
    },
};
</script>


<style lang="scss" scoped>
.carousel {
    position: relative;
    width: 70%;
    height: 500px;
}

.carousel-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: none;
    }
}

.carousel-thumbnails {
    display: flex;
    align-items: start;

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin: 0 10px;
        cursor: pointer;
    }
}

.carousel-images img.show {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.box-thumbnails {
    width: 30%;
}
</style>