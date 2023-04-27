<template>
    <section class="container">
        <div class="d-flex justify-content-between align-items-center pb-4">
            <h4 class="text-uppercase">lifystyle & stories</h4>
            <div class="text-uppercase">
                <span class="badge bg-secondary text-light py-2 px-3 mx-4">all</span>
                <span class="badge bg-secondary text-light p-2 px-3 mx-4">Lifestyle</span>
                <span class="badge bg-secondary text-light p-2 px-3 ms-4">stories</span>
            </div>
        </div>
        <div class="d-flex align-items-start">
            <div class="card me-5" style="width: 48rem; height: 28.25rem;">
                <img class="card-img-top" src="/image/success-story.webp" alt="Card image cap">
                <div class="card-body">
                    <span>
                        <i class="fa-solid fa-user pe-1"></i>
                        <span>demo</span>
                    </span>
                    <span>
                        <i class="fa-solid fa-calendar-days px-1"></i>
                        <span>December 26, 2022</span>
                    </span>
                    <p class="card-text">Fashion Trend Now A Days</p>
                </div>
                <div class="box-badge">
                    <span class="badge bg-light text-dark">Culture</span>
                </div>
            </div>

            <div class="d-flex flex-column">
                <div class="d-flex align-items-center border-b pb-3">
                    <div class="card card-sm me-2" style="width: 12rem;">
                        <img class="card-img-top" src="/image/travel-alone-300x200.webp" alt="Card image cap">
                        <div class="box-badge">
                            <span class="badge bg-light text-dark">Stories</span>
                        </div>

                    </div>
                    <div class="card-body">
                        <span>
                            <i class="fa-solid fa-user pe-1"></i>
                            <span class="px-1">demo</span>
                        </span>
                        <span>
                            <i class="fa-solid fa-calendar-days px-1"></i>
                            <span class="px-1">December 26, 2022</span>
                        </span>
                        <p class="card-text">Traveling Alone Is Awesome</p>
                    </div>
                </div>

                <div class="d-flex align-items-center border-b py-3">
                    <div class="card card-sm me-2" style="width: 12rem;">
                        <img class="card-img-top" src="/image/best-places.webp" alt="Card image cap">
                        <div class="box-badge">
                            <span class="badge bg-light text-dark">Lifestyle</span>
                        </div>

                    </div>
                    <div class="card-body">
                        <span>
                            <i class="fa-solid fa-user pe-1"></i>
                            <span class="px-1">demo</span>
                        </span>
                        <span>
                            <i class="fa-solid fa-calendar-days px-1"></i>
                            <span class="px-1">December 25, 2022</span>
                        </span>
                        <p class="card-text">Place For A Road Trip</p>
                    </div>
                </div>

                <div class="d-flex align-items-center pt-3">
                    <div class="card card-sm me-2" style="width: 12rem;">
                        <img class="card-img-top" src="/image/music-love.webp" alt="Card image cap">
                        <div class="box-badge">
                            <span class="badge bg-light text-dark">Culture</span>
                        </div>

                    </div>
                    <div class="card-body">
                        <span>
                            <i class="fa-solid fa-user pe-1"></i>
                            <span class="px-1">demo</span>
                        </span>
                        <span>
                            <i class="fa-solid fa-calendar-days px-1"></i>
                            <span class="px-1">December 25, 2022</span>
                        </span>
                        <p class="card-text">Music The Love Of My Life</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: start;
    font-size: 12px;
    text-align: center;
    background-color: black;

    .card-img-top {
        height: 100%;
        opacity: 0.6;
    }


    .card-body {
        position: absolute;
        color: white;

        p {
            font-weight: bold;

            &:hover{
                color: #BF1D2E;
                cursor: pointer;
            }
            
        }

    }

    .box-badge {
        position: absolute;
        top: 10px;
        left: 10px;

        .badge {
            margin: 5px;
            font-size: 12px;

            &:hover {
                color: #BF1D2E !important;
                cursor: pointer;
            }
        }
    }
}

.text-uppercase {
    .badge {
        cursor: pointer;

        &:hover {
            color: #BF1D2E !important;
            cursor: pointer;
        }
    }
}

.border-b{
    border-bottom: 1px solid black;
}

.card-body {

    p {
        font-weight: bold;
        
            &:hover{
                color: #BF1D2E;
                cursor: pointer;
            }
            
        }

    }
</style>