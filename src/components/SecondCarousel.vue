<template>
    <div class="container d-flex justify-content-center py-5">

        <div class="d-flex flex-column align-items-center">
            <div class="card me-2" style="width: 14rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">prova</p>
                </div>
            </div>

            <div class="card me-2 mt-2" style="width: 14rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">prova</p>
                </div>
            </div>
        </div>

        <div class="d-flex ">
            <div class="card" style="width: 28rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">prova</p>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column align-items-center">
            <div class="card ms-2" style="width: 14rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">prova</p>
                </div>
            </div>

            <div class="card ms-2 mt-2" style="width: 14rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">prova</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { secondCarousels } from '../data/data';
    export default {
        name: 'SecondCarousel',
        data(){
            return{
                carousels: secondCarousels,
                count: 0,
            }
        },
        methods:{
            filterLeftCol(){
                this.carousels[count].id;
                console.log(this.carousels[count].id);

            }
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>

</style>