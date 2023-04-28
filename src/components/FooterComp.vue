<template>
    <footer>
        <div class="container">
            <div class="d-flex justify-content-between py-5 box-top">
                <div class="d-flex justify-content-between box-left">
                    <ul class="d-flex justify-content-between align-items-center w-100">
                        <li class="" v-for="dataLink in data.dataLinks" :key="dataLink.title">
                            <h6 class="text-uppercase">{{ dataLink.title }}</h6>
                            <ul>
                                <li v-for="link in dataLink.links" :key="link.link">
                                    <small>{{ link.link }}</small>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="box-right">
                    <h6 class="text-uppercase text-white">subscribe to newsletter</h6>
                    <input type="email" class="form-control" placeholder="Email">
                    <button class=" btn btn-secondary text-uppercase text-white my-3 w-100">subscribe</button>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center py-4">
                <img src="/image/anime-whitelogo-300x89.png" alt="">

                <p class="text-white">&#169; Anime Tech, Theme by HasnainDEV</p>
            </div>

        </div>
    </footer>
</template>

<script>
import { data } from '../data/data';
export default {
    name: 'FooterComp',
    data() {
        return {
            data,
            currentIndex: 0,

        }
    },
}
</script>

<style lang="scss" scoped>
footer {
    background-color: #BF1D2E;

    ul {
        list-style: none;
        padding: 0;
        color: white;

        li {
            cursor: pointer;
        }
    }

    .box-left {
        width: 60%;
    }

    .box-right {
        width: 25%;
    }
    .box-top{
        border-bottom: 1px solid white;
    }
}
</style>