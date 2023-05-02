<template>
    <div class="container">

        <div class="d-flex py-3">

            <div class="carousel ms-2">

                <div class="carousel-images">
                    <img :src="'/image' + data.dataTrailer[currentImageIndex].img">
                </div>

                <div class="text-white entity-carousel">
                    <img class="me-2" src="/image/channels4_profile.jpg" alt="">
                    <span>{{ data.dataTrailer[currentImageIndex].title }}</span>
                    <span>{{ data.dataTrailer[currentImageIndex].trailer }}</span>
                </div>
                <!--logo guarda piu' tardi e condivisione-->
                <div class="entity-logo d-flex fw-semibold">
                    <div class="text-center me-4">
                        <i class="fa-solid fa-clock text-white"></i>
                        <p>Guarda più...</p>
                    </div>
                    <div class="text-center me-4">
                        <i class="fa-solid fa-share text-white"></i>
                        <p>Condividi</p>

                    </div>
                </div>

                <div class="icon-youtube">
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            </div>

            <div class="box-thumbnails me-2">
                <!--box contenente <h5>Video Playlist</h5> e  num 1/7 videos-->
                <div class="playlist ps-4 py-3 d-flex">
                    <i class="fa-solid fa-play"></i>
                    <div class="d-flex flex-column ps-3">
                        <h5>Video Playlist</h5>
                        <small>{{ currentImageIndex + 1  }} / 7 Videos </small>
                    </div>
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
export default{
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

    .entity-logo{
        position: absolute;
        top: 15px;
        right: 15px;
        i{
            font-size: 25px;
        }

        p{
            color: #f3f3f3;
            font-size: 14px;
        }
    }
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

    .icon-youtube{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        color: red;
        cursor: pointer;
        .fa-youtube{  
            font-size: 80px;
            z-index: 20;
        }
        .fa-circle{
            position: absolute;
            font-size: 50px;
        }
    }
}

.carousel-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

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
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.carousel-images .text-trailer.active{
    display: block;

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
.playlist{
    background-color: #333;
    color: white;
    
    i{
        font-size: 35px;

    }
}
</style>