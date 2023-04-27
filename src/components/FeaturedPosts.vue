<template>
    <section>
        <h4 class="text-uppercase">featured posts</h4>
        <div class="d-flex justify-content-center align-items-center"></div>
    </section>
</template>

<script>
import {data} from '../data/data';
    export default {
        name: 'FeaturedPosts',
        data(){
            return{
                data
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>