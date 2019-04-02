<template>
    <div class="container course">
        <el-row>
            <el-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Робототехника</h2>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> На уроках используем LEGO MINDSTORMS EV3, Darwim Mini. LEGO MINDSTORMS EV3
                        позволяет строить, программировать и командовать своими роботами, которые ходят, ползают,
                        хлопают и вращаются, ездят по линиям, различают цвета и танцуют. Робототехника поможет детям
                        научиться создавать, т.е. думать как инженер, обучит основам программирования, покажет новые
                        технологии (инфракрасный датчик и.т.д.) и научит мыслить творчески.
                    </p>
                    <p class="mb-0">
                        Максимальный размер групп - 4 человека. Команды будут участвовать в олимпиадах по робототехнике.                    </p>
                </b-card>
            </el-col>
            <el-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/robotics.png">
                </b-card>
            </el-col>
        </el-row>
        <el-row class="course__costs">
            <el-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>10000₸</strong>
                        <p>за 4 недели</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <p> Цена действительна до сентября 2018 г.</p>
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