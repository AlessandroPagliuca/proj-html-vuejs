<template>
    <div class="container-fluid bg-grey">
        <div class="d-flex justify-content-center align-items-center p-3 pos-relative">
            <div class="card m-2" style="width: 30rem;" v-for="card in data.dataCarousels">
                <img :src="'/image/' + card.img" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <p class="card-text fw-semibold">{{ card.data }}</p>
                    <small>{{ card.smallDate }}</small>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">{{ card.tags[0].tag1 }}</span>
                    <span class="badge bg-light text-dark">{{ card.tags[0].tag2 }}</span>
                </div>
            </div>
            <!--btn sx and btn dx-->
            <button type="button" class="btn fa-solid fa-chevron-left btn-sx"></button>

            <button type="button" class="btn fa-solid fa-chevron-right btn-dx"></button>
        </div>
    </div>
</template>

<script>
import { data } from '../data/data';
    export default {
        name: 'CarouselHorizontal',
        data(){
            return{
                data,
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .bg-grey{
        background-color: #F3F3F3;
    }
    .card{
        position: relative;
        cursor: pointer;

        .box-badge {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        top: 10px;

        .badge {
            margin: 5px;
            font-size: 13px;

            &:hover {
                color: #BF1D2E !important;
                cursor: pointer;
            }
        }
    }

    }
    .pos-relative{
        position: relative;

        .btn-sx, .btn-dx{
            position: absolute;
            background-color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            font-size: 10px;
            color: #BF1D2E;
        }
        .btn-sx{
            left: 30px;
            &:hover{
                color: white;
                background-color: #333;
                border: 1px solid #333;

            }
        }
        .btn-dx{
            right: 30px;

            &:hover{
                color: white;
                background-color: #BF1D2E;
                border: 1px solid #333;
            }
        }
    }
</style>