<template>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="card m-2" v-for="img in data.picturesBottom">
            <img class="image-f" :src="'/image' + img.img" :alt="img.data">
            <div class="text text-white fw-semibold text-uppercase">{{ img.data }}</div>
        </div>

    </div>
</template>

<script>
import { data } from '../data/data';
export default {
    name: 'PicturesBottom',
    data() {
        return {
            data,
        }
    }

}
</script>

<style lang="scss" scoped>
    .card{
        width: 300px;
        height: 200px;
        background-color: black;
        position: relative;
        border: 0px;
    }
    .image-f{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
        border-radius: 5px;

    }
    .text{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
    }
</style>