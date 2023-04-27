<template>
    <section class="container">
        <h4 class="text-uppercase pt-4 pb-2">featured posts</h4>
        <div class="d-flex justify-content-center align-items-center">
            <div class="card m-2" v-for="post in data.dataPosts">
                <img class="card-img-top" :src="'/image' + post.img" alt="">
                <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
                    <h5 class="card-title">{{ post.data }}</h5>
                    <p class="card-text">{{ post.smallDate }}</p>
                    <small class="card-text">{{ post.text }}</small>
                    <button class=" btn-red px-5 m-3 fw-semibold">Read More</button>
                </div>
                <div class="box-badge w-100">
                    <span class="badge bg-light text-dark">{{ post.tags[0].tag }}</span>
                    <span class="badge bg-light text-dark">{{ post.tags[1].tag }}</span>
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
    .card{
        background-color: #f3f3f3;
        position: relative;
        

        .box-badge{
            position: absolute;
            display: flex;
            justify-content: center;
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
    .btn-red{
        background-color: #BF1D2E;
        color: white;
        border: 0;
        border-radius: 20px;
        padding-top: 8px;
        padding-bottom: 8px;

        &:hover{
            background-color: #92101d;
        }
    }
</style>