<template>
    <div class="container course">
        <b-row>
            <b-col>
                <div class="text-center g-mb-50">
                    <h2 class="course__title">Курсы Английского Языка</h2>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="6">
                <b-card class="course__content-card">
                    <p class="mb-4"> Мы готовим к тестам по английскому языку: IELTS, TOEFL, APTIS. Преподаватель с 20
                        летним стажем преподавания английского и семилетним стажем преподавания IELTS. По нашей
                        статистике, в среднем балл наших учеников увеличивается на 0.5 балла за месяц. Предоставляем
                        бесплатные учебные материалы и бесплатные пробные тесты каждый месяц.
                    </p>
                    <p class="mb-4"> Также у нас есть курсы для тех, кто просто хочет выучить английский язык. По
                        окончанию курсов и сдачи экзамена выдается сертификат о прохождении уровня. Занятия проходят два
                        раза в неделю по 1.5 часа.
                    </p>
                    <p class="mb-0"> В группах по пять человек.</p>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="course__img-card">
                    <img src="/img/courses/english.jpg">
                </b-card>
            </b-col>
        </b-row>
        <b-row class="course__costs">
            <b-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>1200₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>ПОДГОТОВКА К ТЕСТАМ В ГРУППЕ</h3>
                        <p> Ориентировочно 14400 в месяц.</p>
                    </div>
                </div>
            </b-col>
            <b-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>2000₸</strong>
                        <p>в час</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>ПОДГОТОВКА К ТЕСТАМ ИНДИВИДУАЛЬНО</h3>
                        <p> Количество часов в неделю определяется на индивидуальной основе.</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="course__costs">
            <b-col lg="6">
                <div class="course__costs__item">
                    <div class="course__costs__item__sum">
                        <strong>8000₸</strong>
                        <p>за 4 недели</p>
                        <router-link :to="{name: 'contacts'}">
                            <b-button class="button" variant="success">Записаться</b-button>
                        </router-link>
                    </div>

                    <div class="course__costs__item__description">
                        <h3>ПРОСТО АНГЛИЙСКИЙ В ГРУППЕ
                        </h3>
                        <p>Цена действует до сентября 2018 г.</p>
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
                        <h3>ПРОСТО АНГЛИЙСКИЙ ИНДИВИДУАЛЬНО</h3>
                        <p> Количество часов в неделю определяется на индивидуальной основе.</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<style lang="scss" scoped>
    p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: #777;
    }

    a, a:hover {
        color: $app-color-green1;
        outline: none;
    }
</style>