<template>
    <div class="container d-flex justify-content-center py-5">

        <div class="d-flex flex-column align-items-center">
            <div class="card me-2" style="width: 20rem;">
                <img class="card-img-top" src="/image/anime-fashion.webp" alt="Card image cap">
                <div class="card-body">
                    <span>
                        <i class="fa-solid fa-user pe-1"></i>
                        <span>demo</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-calendar-days px-1"></i>
                        <span>December 26, 2022</span>
                    </span>
                    <p class="card-text">Fashion Trend Now A Days</p>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">Fashion</span>
                    <span class="badge bg-light text-dark">Lifestyle</span>
                </div>  
            </div>

            <div class="card me-2 mt-2" style="width: 20rem;">
                <img class="card-img-top" src="/image/travel-alone-300x200.webp" alt="Card image cap">
                <div class="card-body">
                    <span>
                        <i class="fa-solid fa-user pe-1"></i>
                        <span>demo</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-calendar-days px-1"></i>
                        <span>December 26, 2022</span>
                    </span>
                    <p class="card-text">Travelling Alone Is Awesome</p>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">Stories</span>
                    <span class="badge bg-light text-dark">Travel</span>
                </div>
            </div>
        </div>

        <div class="d-flex ">
            <div class="card" style="width: 40rem;">
                <img class="card-img-top" src="/image//best-places.webp" alt="Card image cap">
                <div class="card-body">
                    <span>
                        <i class="fa-solid fa-user pe-1"></i>
                        <span>demo</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-calendar-days px-1"></i>
                        <span>December 26, 2022</span>
                    </span>
                    <p class="card-text">Places For A Road Trip</p>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">Lifestyle</span>
                    <span class="badge bg-light text-dark">Stories</span>
                    <span class="badge bg-light text-dark">Travel</span>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column align-items-center">
            <div class="card ms-2 fw-semibold" style="width: 20rem;">
                <img class="card-img-top" src="/image/music-love.webp" alt="Card image cap">
                <div class="card-body">
                    <span>
                        <i class="fa-solid fa-user pe-1"></i>
                        <span>demo</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-calendar-days px-1"></i>
                        <span>December 26, 2022</span>
                    </span>
                    <p class="card-text">Music The Love Of My Life</p>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">Culture</span>
                    <span class="badge bg-light text-dark">Lifestyle</span>
                </div>
            </div>

            <div class="card ms-2 mt-2" style="width: 20rem;">
                <img class="card-img-top" src="/image/visit-france.webp" alt="Card image cap">
                <div class="card-body">
                    <span>
                        <i class="fa-solid fa-user pe-1"></i>
                        <span>demo</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-calendar-days px-1"></i>
                        <span>December 26, 2022</span>
                    </span>
                    <p class="card-text">Reasons To Visit France</p>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">Lifestyle</span>
                    <span class="badge bg-light text-dark">Travel</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { data } from '../data/data';
    export default {
        name: 'SecondCarousel',
        data(){
            return{
                data,
                
            }
        },
        methods:{
           
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>

    .card{
        position: relative;
        display: flex;
        justify-content: end;
        align-items: center;
        font-size: 13px;
        text-align: center;
        background-color: black;
        
        .card-img-top{
            height: 100%;
            opacity: 0.6;
        }
        

        .card-body{
            position: absolute;
            color: white;

            p{
                font-weight: bold;
            }
           
        }
        .box-badge{
            position: absolute;
            top: 10px;

            .badge{
                margin: 5px;
                font-size: 13px;

                &:hover{
                    color:#BF1D2E !important;
                    cursor: pointer;
                }
            }
        }
    }

</style>