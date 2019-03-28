<template>
    <div class="container course">
        <el-row>
            <el-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Подготовка к ЕНТ</h2>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> Ведем подготовку по предметам математическая грамотность, математика, физика,
                        химия, биология, английский на казахском и русском языках. Пока мы не проводим пробные
                        тестирования и рекомендуем ученикам проходить пробные онлайн тестирования на официальном сайте
                        <a href=" http://www.testcenter.kz/ru/press/news/oplatit_probnoe_onlayn_testirovanie_za_minutu.html"
                           target="_blank">Национального Центра Тестирования</a>.
                    </p>
                    <p class="mb-0"> Максимальный размер групп - 8 человек. По каждому предмету занятия два раза в
                        неделю по одному часу. Никакого контракта на год, вы можете прекратить занятия в любой момент
                        (хотя, мы очень опечалимся, если вы уйдете).
                    </p>
                </b-card>
            </el-col>
            <el-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/ENT.jpg">
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
                        <h3>ОДИН ПРЕДМЕТ</h3>
                        <p> В месяц выходит 8000-9000.</p>
                    </div>
                </div>
            </el-col>
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
                        <h3>ДВА И БОЛЕЕ ПРЕДМЕТОВ</h3>
                        <p> В месяц выходит 12000-13000 за два предмета и 18000-19000 за три предмета.</p>
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