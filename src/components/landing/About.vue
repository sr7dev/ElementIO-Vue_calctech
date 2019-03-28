<template>
    <b-row class="about">
        <b-row align="center" class="about__header">
            <div class="title">
                <h3>Для нас важен каждый ученик</h3>
                <h1>МЫ ЗА ИНДИВИДУАЛЬНЫЙ ПОДХОД В ОБУЧЕНИИ</h1>
            </div>
            <parallax class="parallax" :speed-factor="0.3" breakpoint="(min-width: 80px)">
                <img src="/img/about.jpg">
            </parallax>
        </b-row>
        <b-row class="about__content">
            <div class="text-center">
                <h2 class="d-inline-block pb-3 border-bottom border-success">
                    КТО МЫ?
                </h2>
            </div>
            <div class="font-xl font-weight-light text-black-50 text-center mb-5">
                CalcTech -это сотрудничество двух "болашакеров" и нескольких преподавателей вузов.
            </div>
            <b-col :span="9" :offset="3">
                <img style="width: 100%" src="/img/about_content.jpg">
            </b-col>
            <b-col :span="9" :offset="1">
                <div class="font-l font-weight-light text-black-50 text-left mb-4">
                    CalcTech был основан в феврале 2017 года двумя выпускниками Болашак (страна обучения - США).
                    Первоначальной целью нашей компании была разработка проектов по электроснабжению и пока не было
                    проектов мы начали заниматься репетиторством. Нам так понравилось, что мы решили полностью остаться
                    в образовании.
                </div>
                <div class="font-l font-weight-light text-black-50 text-left mb-5">
                    Несмотря на свой молодой возраст, наша компания уже зарекомендовала себя в Кокшетау как центр,
                    дающий качественные знания и выросла с нескольких учеников в марте 2017 года до почти 200
                    обучающихся одновременно в марте 2018 года. За год существования мы обучили более 350 учеников. Наши
                    преимущества включают в себя
                </div>
                <b-row>
                    <b-col :span="10">
                        <ul class="list-unstyled mb-0">
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="icon-check"></i>
                                Качественный преподавательский состав
                            </li>
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="icon-check"></i>
                                Доступные цены
                            </li>
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="icon-check"></i>
                                Индивидуальный подход
                            </li>
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="icon-check"></i>
                                Хорошую обратную связь
                            </li>
                        </ul>
                    </b-col>
                    <b-col :span="10" :offset="2">
                        <ul class="list-unstyled g-font-size-13 mb-0">
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                Никаких обязательств и контрактов на год
                            </li>
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                Маленькие группы
                            </li>
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                Бесплатные пробные тесты
                            </li>
                            <li class="font-l font-weight-light text-black-50 text-left d-flex mb-3">
                                <i class="g-color-primary g-mt-5 g-mr-10 icon-check"></i>
                                Бесплатные учебные материалы
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="about__team">
                <h2 class="d-inline-block pb-3 border-bottom border-success">
                    Наша команда
                </h2>
            <div class="font-xl font-weight-light text-black-50 text-center mt-2 mb-5">
                Мы молодая квалифицированная команда, ориентирующаяся на преподавании точных,<br/>
                естественных наук и английского языка.
            </div>
            <el-container class="about__team__list container">
                <div class="about__team__list__item" v-for="item in team" >
                    <img :src="item.avatar">
                    <div class="about__team__list__item__info">
                        <div class="about__team__list__item__info__name">{{item.name}}</div>
                        <div class="about__team__list__item__info__position">{{item.position}}</div>
                        <div class="about__team__list__item__info__quote">
                            {{item.quote}}
                        </div>
                    </div>
                </div>
            </el-container>
        </b-row>
    </b-row>
</template>

<script>
    import Parallax from 'vue-parallaxy'

    export default {
        components: {
            Parallax
        },
        data: () => {
            return {
                team: [
                    {
                        name: 'Иран Ерлан',
                        position: 'СО-ОСНОВАТЕЛЬ',
                        quote: 'Верю, что наш центр приносит пользу нашему родному городу.',
                        avatar: '/img/team/yerlan.jpg'
                    },
                    {
                        name: 'Азиза Сатхожина',
                        position: 'СО-ОСНАВАТЕЛЬ, ПРЕПОДАВАТЕЛЬ МАТЕМАТИКИ И ФИЗИКИ',
                        quote: 'Путь к знаниям - это самое интересное приключение в нашей жизни.',
                        avatar: '/img/team/aziza_orig.png'
                    },
                    {
                        name: 'Руслан Козыбаев',
                        position: 'ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО',
                        quote: 'To understand the Sun we have to understand the atom because of the oneness of the universe.',
                        avatar: '/img/team/ruslan.jpg'
                    },
                    {
                        name: 'Анастасия Гилязутдинова',
                        position: 'ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО',
                        quote: 'My childhood dream was to be a psychologist, so I’m eager to not only teach but make students want to learn.',
                        avatar: '/img/team/anast.jpg'
                    },
                    {
                        name: 'Көшімбаева Гаусар',
                        position: 'ПРЕПОДАВАТЕЛЬ МАТЕМАТИКИ',
                        quote: 'Математиканы оқуда реттілік пен тәртіп, әрі шыдамдылық қажет. CalcTech сізге нәтижеге жетуге көмектеседі.',
                        avatar: '/img/team/gausar.jpg'
                    },
                    {
                        name: 'Елжас Айтжан',
                        position: 'ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО',
                        quote: '',
                        avatar: '/img/team/elzhas.jpg'
                    },
                    {
                        name: 'Сауле Маханова',
                        position: 'ПРЕПОДАВАТЕЛЬ ХИМИИ И БИОЛОГИИ',
                        quote: '',
                        avatar: '/img/team/mahanova.jpg'
                    },
                ]
            }
        }
    }

</script>

<style lang="scss" scoped>
    .about {
        &__header {
            z-index: 0;
            height: 400px;
            position: relative;;
            h1 {
                color: white;
                z-index: 1;
                position: absolute;
                top: 55%;
                left: 21%;
            }
            h3 {
                color: white;
                z-index: 1;
                position: absolute;
                top: 40%;
                left: 37%;
            }
        }
        &__content {
            padding-top: 50px;
            background: white;
        }
        &__team {
            text-align: center;
            padding-top: 100px;
            &__list {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                &__item {
                    width: 217px;
                    margin: 30px;
                    img {
                        width: 100%;
                    }
                    &__info {
                        &__name {
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: black;
                        }
                        &__position {
                            margin-top: .5rem;
                            padding-bottom: .6rem;
                            border-bottom: 1px solid rgba(114, 192, 44, .3);
                            font-size: .785rem;
                            line-height: 1.6;
                            color: $app-color-green1;
                        }
                        &__quote {
                            margin-top: 1rem;
                            font-size: 1rem;
                            line-height: 1.6;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
    }



    .Masthead__image.is-parallax > img {
        position: absolute;
        top: -100px;
    }

    .icon-check {
        color: $app-color-green1;
        margin-top: 5px;
        margin-right: 10px;
    }

    /*@media (max-width: 1440px) {*/
        /*.about__team__list__item {*/
            /*width: 400px;*/
        /*}*/
    /*}*/
    /*@media (max-width: 1380px) {*/
        /*.about__team__list__item {*/
            /*width: 620px;*/
        /*}*/
    /*}*/

</style>