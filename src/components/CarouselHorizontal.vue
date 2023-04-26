<template>
    <div class="container-fluid bg-grey">
        <div class="d-flex justify-content-center align-items-center p-3">
            <div class="card m-2" style="width: 18rem; height: 17rem" v-for="card in carousels">
                <img :src="'/image/' + card.img" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <p class="card-text fw-semibold">{{ card.data }}</p>
                    <small>{{ card.smallDate }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dataCarousels } from '../data/data';
    export default {
        name: 'CarouselHorizontal',
        data(){
            return{
                carousels: dataCarousels,
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
</style>