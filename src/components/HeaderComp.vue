<template>
    <header>
       <UpdatesComp />
       <!--Advertising banner <i class="fa-solid fa-house"></i> -->
       <div class="bg-white">
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

            <div class="box-nav">
                <div class="container d-flex justify-content-between align-items-center">
                    <i class="fa-solid fa-bars"></i>

                    <div class="d-flex align-items-center">
                        <ul class="px-3 my-2" v-for="link in data.dataLNavLinks">
                            <li>
                                <i :class="'me-2 fa-solid' + link.icon"></i>
                                <span class="text-uppercase fw-semibold">{{ link.title }}</span>
                                <i :class="' ms-2 fa-solid' + link.arrow "></i>
                            </li>
                        </ul>
                    </div>
                

                    <i class="fa-solid fa-search"></i>
                </div>
            </div>
       </div>
       

        
      
    </header>
</template>

<script>
import {data} from '../data/data';
import UpdatesComp from './UpdatesComp.vue';
    export default {
        name: 'HeaderComp',
        components:{
            UpdatesComp,
        },
        data(){
            return{
                data,
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 179px;
        position: fixed;
        z-index: 1000;

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
    .box-nav{
        border-top: 1px solid rgb(194, 192, 192);
        border-bottom: 1px solid rgb(194, 192, 192);
        width: 100%;

        ul{
            list-style: none;
            padding: 0;
        }
        
        li, i{
            cursor: pointer;

            &:hover{
            color: #BF1D2E;
        }
        }
    }


    }
   

</style>