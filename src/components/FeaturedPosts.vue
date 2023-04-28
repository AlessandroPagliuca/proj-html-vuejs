<template>
    <section class="container">
        <h4 class="text-uppercase pt-4 pb-2">featured posts</h4>
        <div class="d-flex justify-content-center align-items-center">
            <div class="card m-2" v-for="post in data.dataPosts">
                <div class="bg-opacity w-100 h-100">
                    <img class="card-img-top" :src="'/image' + post.img" alt="">

                    <div class="box-tag text-upperacse fw-semibold">
                        <div class="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                            <h4>{{ post.tags[0].tag }}</h4>
                            <small class="text-uppercase">4 Posts</small>
                        </div>
                    </div>

                    <div class="box-badge w-100">
                        <span class="badge bg-light text-dark">{{ post.tags[0].tag }}</span>
                        <span class="badge bg-light text-dark">{{ post.tags[1].tag }}</span>
                    </div>
                </div>
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
.card {
    background-color: #f3f3f3;
    position: relative;


    .bg-opacity {
        position: relative;
        background-color: #BF1D2E !important;
        cursor: pointer;

        .box-tag {
            position: absolute;
            display: none;
            width: 80%;
            height: 80%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            color: white;

        }

    }


    .box-badge {
        position: absolute;
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
.bg-opacity:hover {
    opacity: 0.3;
    .box-badge {
        display: none;
    }

    .box-tag {
        display: block;
        border: 2px solid white;
    }
}

.btn-red {
    background-color: #BF1D2E;
    color: white;
    border: 0;
    border-radius: 20px;
    padding-top: 8px;
    padding-bottom: 8px;

    &:hover {
        background-color: #333;
    }
}</style>