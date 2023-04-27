<template>
    <section class="container">
        <h4 class="text-uppercase">featured posts</h4>
        <div class="d-flex justify-content-center align-items-center">
            <div class="card m-2" v-for="post in data.dataPosts">
                <img class="card-img-top" :src="'/image' + post.img" alt="">
                <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
                    <h5 class="card-title">{{ post.data }}</h5>
                    <p class="card-text">{{ post.smallDate }}</p>
                    <small class="card-text">{{ post.text }}</small>
                    <button class=" btn-red px-5 m-3 fw-semibold">Read More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { data } from '../data/data';
export default {
    name: 'FeaturedPosts',
    data() {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>

    .btn-red{
        background-color: #BF1D2E;
        color: white;
        border: 0;
        border-radius: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
</style>