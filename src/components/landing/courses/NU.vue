<template>
    <div class="container course">
        <el-row>
            <el-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Подготовка к вступительным экзаменам в Назарбаев Университет и в
                        зарубежные вузы</h2>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> Ведем подготовку к SAT, SAT Math, SAT Physics, NUFYPET Math, NUFYPET Physics,
                        NUFYPET Critical Thinking. Эти тесты необходимы для поступления в Назарбаев Университет, а также
                        могут использоваться для поступления в зарубежные вузы. Групповые занятия два раза в неделю по
                        полтора часа.
                    </p>
                    <p class="mb-0">  Если вас интересуют IELTS или TOEFL, пройдите <router-link :to="{name: 'english'}">сюда.</router-link>
                    </p>
                </b-card>
            </el-col>
            <el-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/NU.jpg">
                </b-card>
            </el-col>
        </el-row>
        <el-row class="course__costs">
            <el-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>1500₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>В ГРУППЕ</h3>
                        <p> 17000-18000 в месяц за один предмет.</p>
                    </div>
                </div>
            </el-col>
            <el-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>2500₸</strong>
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