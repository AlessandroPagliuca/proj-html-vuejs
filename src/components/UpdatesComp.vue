<template>
    <!--template della barra dove verrà visualizzato il NEW UPDATES con le icone dei social network-->
    <div class="bg-updates">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center box">
                <div class="box-sx d-flex align-items-center">
                    <div class="box-sx bg-secondary d-flex align-items-center px-2">
                        <span class="text-uppercase text-white fw-semibold ">new updates</span>
                    </div>

                    <div class="box-img">
                        <img src="/image/meal-time-150x150.webp" alt="">
                    </div>

                    <span class="text-white text-uppercase p-1">{{ getTime() }} the_</span>
                </div>

                <div class="box-dx d-flex align-items-center text-white">
                    <div class="px-4">
                        <i class="fa-solid fa-chevron-left p-3"></i>
                        <i class="fa-solid fa-chevron-right p-3"></i>
                    </div>

                    <i class="fa-brands fa-facebook p-1"></i>
                    <i class="fa-brands fa-twitter p-1"></i>
                    <i class="fa-brands fa-instagram p-1"></i>
                    <i class="fa-brands fa-youtube p-1"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UpDatesComp',
    data() {
        return {

        }
    },
    methods: {
        getTime() {
            const d = new Date();
            const hour = d.getHours();
            const minutes = d.getMinutes();
            let time = hour + ':' + minutes;
            console.log(time);
            return time;
        }
    },
    mounted() {
        this.getTime();
    }
}
</script>

<style lang="scss" scoped>
.bg-updates {
    background-color: #BF1D2E;
    width: 100%;
}

.box {
    height: 35px;
}

.box-sx,
.box-dx {
    height: 100%;
}

.box-img {
    width: 35px;
    height: 35px;

    img {
        width: 100%;
        height: 100%;
    }
}

.box-dx {

    i {
        cursor: pointer;
        &:hover{
            color: #333;
        }
    }
}</style>