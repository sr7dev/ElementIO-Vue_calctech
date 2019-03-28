<template>
    <div class="container course">
        <el-row>
            <el-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Подготовка по отдельным предметам</h2>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> Ведем подготовку школьников 1-11 классов по предметам математическая грамотность,
                        математика, физика, химия, биология, английский на казахском и русском языках.
                    </p>
                    <p class="mb-0"> Занятия проводятся индивидуально либо в группах, если такие группы имеются.
                    </p>
                </b-card>
            </el-col>
            <el-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/separateSub.jpeg">
                </b-card>
            </el-col>
        </el-row>
        <el-row class="course__costs">
            <el-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>1000₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>В ГРУППЕ</h3>
                        <p> Если имеются группы по предмету и подходящие по возрасту.</p>
                    </div>
                </div>
            </el-col>
            <el-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>1800₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>ИНДИВИДУАЛЬНО</h3>
                        <p> Количество часов в неделю определяется на индивидуальной основе.</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<style lang="scss" scoped>
    p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: #777;
    }

    a {
        color: $app-color-green1;
        outline: none;
    }
</style>