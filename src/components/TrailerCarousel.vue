<template>
    <div class="container">

        <div class="d-flex py-3">

            <div class="carousel ms-2">

                <div class="carousel-images">
                    <img v-for="(item, index) in data.dataTrailer" :key="index" :src="'/image' + item.img">
                </div>
                <div class="text-white entity-carousel" v-for="(item, index) in data.dataTrailer" :key="index">
                    <img class="me-2" src="/image/channels4_profile.jpg" alt="">
                    <span>{{ item.title }}</span>
                    <span>{{ item.trailer }}</span>
                </div>

                <div class="">
                   <!--Aggiungere le icons di guarda piu' tardi e condivisione-->
                </div>
            </div>

            <div class="box-thumbnails me-2">
                <div class="">
                   <!--Aggiungere box contenente <h5>Video Playlist</h5> e  num 1/7 videos-->
                   
                </div>
                <div class="carousel-thumbnails py-3" v-for="(item, index) in data.dataTrailer" :key="index" @click="setCurrentImage(index)">

                    <div class="btn ms-3">{{ index + 1 }}</div>
                    <img :src="'/image' + item.img">

                    <div class="text-trailer">
                        <span>{{ item.title }}</span> <br>
                        <span>{{ item.trailer }}</span>
                    </div>

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
        // Imposto classe "show" sull'img all'avvio
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
    height: 450px;

    .entity-carousel{
        position: absolute;
        top: 15px;
        left: 15px;

        img{
            width: 35px;
            height: 35px;
            border-radius: 50%;
        }
    }
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
    align-items: center;
    background-color: #f3f3f3;
    border-bottom: 1px solid #333;
    cursor: pointer;


    img {
        width: 80px;
        height: 60px;
        object-fit: cover;
        margin: 0 10px;
        border-radius: 10px;
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
    height: 450px;
    overflow-y: auto;

    .btn {
        background-color: #333;
        color: white;

        &:hover {
            background-color: #BF1D2E;
        }
    }

    .text-trailer:hover {
        color: #BF1D2E;
    }
}
</style>