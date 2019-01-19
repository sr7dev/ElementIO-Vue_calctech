<template>
    <div class="container course">
        <b-row>
            <b-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Подготовка к вступительным экзаменам в Назарбаев Интеллектуальную
                        Школу</h2>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> На протяжении двух лет мы готовим детей в НИШ и очень довольны своими результатами.
                        В 2017-2018 году 22% наших учеников попали в топ­-20 лучших результатов, 56% набрали необходимые
                        пороговые баллы, 22% ученика не набрали необходимые пороговые баллы.
                    </p>
                    <p class="mb-4"> В начале января 2018 года средний балл наших учеников на официальных пробных
                        составлял 446 балла, на настоящем тесте, 3 марта, средний балл составил 629 балла. За этот
                        промежуток времени (1.5­ - 2 месяца) мы подтянули средний балл наших учеников на 212 баллов, что
                        мы считаем отличным результатом!
                    </p>
                    <p class="mb-4"> Самый высокий наш результат ­ 910 баллов: за 70 часов занятий у нас получилось
                        увеличить балл ученика с 600 до 910 (первая колона на графике справа).
                    </p>
                    <p class="mb-0"> В группах максимум по 5 человек и каждый месяц мы проводим пробные тестирование для
                        выявления пробелов в знаниях учащихся.
                    </p>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/NIS_1.jpg">
                </b-card>
                <b-card class="course__img-card">
                    <BarChart style="width: 50%;"></BarChart>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="course__costs">
            <b-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>24000₸</strong>
                        <p>в месяц</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>КОМПЛЕКСНАЯ ПОДГОТОВКА</h3>
                        <p> Это ориентировочная цена в месяц, которая незначительно меняется в
                            зависимости от количества
                            занятий каждый месяц.
                        </p>
                    </div>
                </div>
            </b-col>
            <b-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>1800₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</h3>
                        <p> По любому из предметов: математика, логика, английский, казахский, русский.</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import BarChart from './BarChart'
    export default {
        components: {
          BarChart
        },
    }
</script>

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