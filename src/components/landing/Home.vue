<template>
    <div class="bg-white pb-8 animated fadeIn">
        <div class="b1">
            <div class="font-weight-bold display-3">СЛОЖНЫЕ ТЕМЫ
                <vue-typer
                        class="vue-typer"
                        :text='["ЛЕГКО","ЯСНО","БЫСТРО"]'
                        :repeat='Infinity'
                        :shuffle='false'
                        initial-action='typing'
                        :pre-type-delay='29'
                        :type-delay='70'
                        :pre-erase-delay='2000'
                        :erase-delay='100'
                        erase-style='backspace'
                        :erase-on-complete='false'
                        caret-animation='phase'
                ></vue-typer>
            </div>
            <h1 class="mt-4">
                <small>Мы работаем на результат</small>
            </h1>
            <div class="btn mt-4">ЗАПИСАТЬСЯ</div>
        </div>
        <b-row class="border-bottom border-light b2">
            <b-col lg="4" class="text-center pt-5 pb-lg-5 border-right border-light">
                <div class="py-5">
                    <div class="icon"><i class="fa fa-graduation-cap"></i></div>
                    <h3 class="mt-4 font-weight-normal">Качественное образование</h3>
                    <div class="lh1_6 mt-3 font-lg font-weight-light px-5">
                        Мы очень тщательно подходим к выбору преподавателей.
                        В CalcTech вы можете рассчитывать на первоклассный уровень преподавания.
                    </div>
                </div>
            </b-col>
            <b-col lg="4" class="text-center py-lg-5 border-right border-light">
                <div class="py-5">
                    <div class="icon"><i class="fa fa-users"></i></div>
                    <h3 class="mt-4 font-weight-normal">Индивидуальный подход</h3>
                    <div class="lh1_6 mt-3 font-lg font-weight-light px-5">
                        Несмотря на то, что у нас больше 200 учеников, мы
                        за индивидуальный подход к каждому. Мы гордимся тем, что знаем имя каждого!
                    </div>
                </div>
            </b-col>
            <b-col lg="4" class="text-center pb-5 pt-lg-5">
                <div class="py-5">
                    <div class="icon"><i class="fa fa-usd"></i></div>
                    <h3 class="mt-4 font-weight-normal">Доступные цены</h3>
                    <div class="lh1_6 mt-3 font-lg font-weight-light px-5">
                        У нас очень большие расходы, но по возможности, мы
                        стараемся делать цены доступными для всех.
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row align-h="center">
            <b-col cols="10">
                <div>
                    <b-carousel controls
                                :interval="4000"
                    >
                        <b-carousel-slide v-for="item in feedbacks">
                            <div style="color:#555;">
                                <h2 class="lh1_6">
                                    {{item.text}}
                                </h2>
                                <h4>{{item.name}}</h4>
                            </div>
                        </b-carousel-slide>
                    </b-carousel>
                </div>
            </b-col>
        </b-row>
        <b-container class="pt-2 b4">
            <div class="pt-8">
                <b-row>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/wall.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/english.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/ent.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/nislastday.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/nisstudents.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/englishexam2.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/englishexam.jpg"/>
                        </div>
                    </b-col>
                    <b-col md="3" class="mb-4">
                        <div class="img-cont">
                            <img src="img/gallery/nisstudy.jpg"/>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <b-container class="pt-8 b5">
            <div class="pt-8">
                <div class="d-inline-block pb-4">
                    <h2 class="font-weight-normal pb-3 border-bottom border-dark">Курсы</h2>
                </div>
                <b-row>
                    <b-col md="4">
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #72c02c"><i
                                    class="fa fa-folder-open-o font-lg"></i></div>
                            <b-media-body>
                                <div class="hdr">
                                    Подготовка к ЕНТ (Единое Национальное Тестирование)
                                </div>
                                <div class="dsc">
                                    Наши учителя имеют многолетний стаж подготовки к ЕНТ и заслуженно считаются лучшими
                                    преподавателями
                                    города. Быстро подтянем по предметам и вы увидите увеличение баллов уже через месяц.
                                    Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #9c8061"><i
                                    class="fa fa-lightbulb-o font-lg"></i></div>
                            <b-media-body>
                                <div class="hdr">
                                    Подготовка к вступительным в НИШ (Назарбаев Интеллектуальная Школа)
                                </div>
                                <div class="dsc">
                                    В 2018 году мы подняли средний балл наших учеников на 212 баллов за полтора месяца
                                    (максимальный
                                    балл
                                    - 1000). Самый быстрый результат: за 70 часов увеличили балл ученика с 600 до 910.
                                    Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #00bed6"><i
                                    class="fa fa-graduation-cap font-lg"></i>
                            </div>
                            <b-media-body>
                                <div class="hdr">
                                    Подготовка к вступительным в НУ (Назарбаев Университет) и зарубежные вузы
                                </div>
                                <div class="dsc">
                                    85% наших учеников с прошлого года набрали необходимые проходные баллы по тестам в
                                    НУ. Подготовка к
                                    любым англоязычным экзаменам по математике, физике (SAT, SAT Math/Physics, BMAT
                                    итд.) Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                    </b-col>
                    <b-col md="4">
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #585f69"><i
                                    class="fa fa-sort-alpha-asc font-lg"></i>
                            </div>
                            <b-media-body>
                                <div class="hdr">
                                    Английский язык
                                </div>
                                <div class="dsc">
                                    Прокачаем разговорный английский как школьникам, так и взрослым. Готовим к тестам по
                                    английскому
                                    языку: IELTS, (в среднем 0.5 баллов улучшения за один месяц занятий), TOEFL, APTIS.
                                    Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #e64b3b"><i
                                    class="fa fa-code-fork font-lg"></i></div>
                            <b-media-body>
                                <div class="hdr">
                                    Отдельные предметы
                                </div>
                                <div class="dsc">
                                    Подтянем математику, физику, химию, биологию, английский по школьной и
                                    университетской программ.
                                    Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #e81c62"><i class="fa fa-book font-lg"></i>
                            </div>
                            <b-media-body>
                                <div class="hdr">
                                    Книжный клуб
                                </div>
                                <div class="dsc">
                                    Мы знаем, как порой тяжело приобщить детей, да и самому привыкнуть к чтению, и
                                    надеемся, что наш
                                    клуб
                                    сможет привить любовь к запаху книг. В книжном клубе мы читаем интересные книги и
                                    обсуждаем их за
                                    чаем
                                    с печеньками. Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                        <b-media no-body class="py-3">
                            <div class="icon mr-4" style="background-color: #18ba9b"><i
                                    class="fa fa-android font-lg"></i></div>
                            <b-media-body>
                                <div class="hdr">
                                    Робототехника
                                </div>
                                <div class="dsc">
                                    На курсах робототехники для учащихся 5-8 классов дети учатся мыслить креативно и
                                    "создавать", что
                                    будет очень важным навыком в их будущем. Подробнее...
                                </div>
                            </b-media-body>
                        </b-media>
                    </b-col>
                    <b-col md-4>
                        <b-card tag="article"
                                class="mb-2 progress-card"
                        >
                            <div class="card-text text-center" style="padding: 10px">
                                <div class="icon" style="background-color: #000000; width: 50px; height: 50px;">
                                    <i class="fa fa-book"></i>
                                </div>
                                <div class="progress-card__title">Самые популярные предметы в CalcTech</div>
                                <div class="progress-card__item">
                                    <div style="text-align: left"> Английский <span
                                            class="float-right g-ml-10">57%</span></div>
                                    <b-progress height="4px" class="mt-1" :max="100">
                                        <b-progress-bar :value="57"></b-progress-bar>
                                    </b-progress>
                                </div>
                                <div class="progress-card__item">
                                    <div style="text-align: left"> Математика <span
                                            class="float-right g-ml-10">51%</span></div>
                                    <b-progress height="4px" class="mt-1" :max="100">
                                        <b-progress-bar :value="51"></b-progress-bar>
                                    </b-progress>
                                </div>
                                <div class="progress-card__item">
                                    <div style="text-align: left"> Математика <span
                                            class="float-right g-ml-10">30%</span></div>
                                    <b-progress height="4px" class="mt-1" :max="100">
                                        <b-progress-bar :value="30"></b-progress-bar>
                                    </b-progress>
                                </div>
                                <hr>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <b-container class="pt-8 b6">
            <div class="pt-8">
                <div class="text-center">
                    <h2 class="d-inline-block pb-3 border-bottom border-success">
                        Наша команда
                    </h2>
                </div>
                <div class="font-xl font-weight-light text-black-50 text-center mt-2 mb-5">
                    Мы молодая квалифицированная команда, ориентирующаяся на преподавании точных,<br/>
                    естественных наук и английского языка. Подробнее...
                </div>
                <b-row>
                    <b-col lg="3" sm="6" class="pb-5">
                        <img class="ava" src="img/team/yerlan.jpg"/>
                        <div class="info">
                            <div class="name">Иран Ерлан</div>
                            <div class="position">СО-ОСНОВАТЕЛЬ</div>
                            <div class="quote">
                                Верю, что наш центр приносит пользу нашему родному городу.
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="3" sm="6" class="pb-5">
                        <img class="ava" src="img/team/aziza.jpg"/>
                        <div class="info">
                            <div class="name">Азиза Сатхожина</div>
                            <div class="position">СО-ОСНАВАТЕЛЬ, ПРЕПОДАВАТЕЛЬ МАТЕМАТИКИ И ФИЗИКИ</div>
                            <div class="quote">
                                Путь к знаниям - это самое интересное приключение в нашей жизни.
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="3" sm="6" class="pb-5">
                        <img class="ava" src="img/team/ruslan.jpg"/>
                        <div class="info">
                            <div class="name">Руслан Козыбаев</div>
                            <div class="position">ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО</div>
                            <div class="quote">
                                To understand the Sun we have to understand the atom because of the oneness of the
                                universe.
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="3" sm="6" class="pb-md-5">
                        <img class="ava" src="img/team/anast.jpg"/>
                        <div class="info">
                            <div class="name">Анастасия Гилязутдинова</div>
                            <div class="position">ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО</div>
                            <div class="quote">
                                My childhood dream was to be a psychologist,
                                so I’m eager to not only teach but make students want to learn.
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                feedbacks: [
                    {
                        text: `Хочу выразить огромную благодарность всему коллективу образовательного центра
                                    CALCTECH за подготовку моего ребенка к тестированию в НИШ. Преподаватели центра
                                    смогли за короткое время качественно подготовить ребенка к тестированию, "подтянуть"
                                    знания по предметам, психологически подготовить ребенка, что очень важно при
                                    прохождении тестов. Здесь все настроены на результат, главное для центра, чтобы дети
                                    все успешно сдали тестирование.`,
                        name: 'Алима Толеген'
                    },
                    {
                        text: `Выражаю огромную признательность и благодарность вам и преподавателям репетиторского
                                    центра @calctech за качественную подготовку Асанали для поступления в НИШ в 7 класс
                                    - результат 3-й по списку - 910 баллов! Это за короткий срок-всего 3 месяца. Большой
                                    вам рахмет за ваш труд!`,
                        name: 'Асанали Шамғұн'
                    },
                    {
                        text: `Я очень довольна вашей работой, к
                                    тому же учителя очень хорошо все объясняют, и цена приемлемая. Желаю вам процветания
                                    в работе, и всего самого наилучшего`,
                        name: 'Маржан Рамазанова'
                    },
                    {
                        text: `Сіздерге тек табыс, ұжым мүшелеріне зор денсаулық, болашақта үлкен оқу орталығы
                                    ашылсын!!! Әр оқушы грантқа түссін!!!`,
                        name: 'Мирай Бекаxметова'
                    },
                    {
                        text: `Добрый день! Мы ходим на математику. Пробовали в многие места, но здесь нас
                                    во-первых встретили очень хорошо, объяснили и пошли некоторые уступки. Репетитором
                                    довольны, дети ходят с удовольствием. Хочу написать огромное спасибо.`,
                        name: 'Чахкиев Абдула и Абдул-Малик'
                    },
                    {
                        text: `Приятная атмосфера. Индивидуальный подход к каждому. Рады что обратились к вам.
                                    Процветания вам и успехов.`,
                        name: 'Болатбек Инкар'
                    },
                ]
            };
        },
    }
</script>

<style lang="scss">
    .b1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        text-align: center;
        color: white;
        background: url('/img/wall_bw.jpg') center top/cover no-repeat;
    }

    .b1 .btn {
        display: inline-block;
        padding: 1.1rem 2rem;
        border-radius: 50px;
        border: 1px solid white;
        color: white;
        background-color: rgba(255, 255, 255, .1);
        cursor: pointer;
        transition: background-color .2s ease, color .2s ease;
    }

    .b1 .btn:hover {
        color: black;
        background-color: rgba(255, 255, 255, 1);
    }

    .b2 .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 88px;
        height: 88px;
        border-radius: 10rem;
        font-size: 26px;
        color: white;
        background-color: $app-color-green1;
    }

    .b4 .img-cont {
        width: 100%;
        /*height: 177px;*/
        overflow: hidden;
        cursor: pointer;
    }

    .b4 .img-cont > img {
        width: 120%;
        height: 100%;
        margin-left: -20%;
        transition: margin-left .3s;
    }

    .b4 .img-cont > img:hover {
        margin-left: 0;
    }

    .b5 .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        color: white;
    }

    .b5 .hdr {
        font-size: 1.2rem;
        line-height: 1.4;
        color: $app-color-green1;
        padding-bottom: .5rem;
        cursor: pointer;
    }

    .b5 .hdr:hover {
        color: $app-color-green2;
    }

    .b5 .dsc {
        font-size: .9rem;
        font-weight: 400;
        line-height: 1.6;
        color: #777;
    }

    .b6 .ava {
        width: 100%;
    }

    .b6 .info {
        margin-top: 1.5rem;
    }

    .b6 .info > .name {
        font-size: 1.25rem;
        font-weight: 600;
        color: black;
    }

    .b6 .info > .position {
        margin-top: .5rem;
        padding-bottom: .6rem;
        border-bottom: 1px solid rgba(114, 192, 44, .3);
        font-size: .785rem;
        line-height: 1.6;
        color: $app-color-green1;
    }

    .b6 .info > .quote {
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        font-weight: 300;
    }

    .feedback {

    }

    .name {

    }

    .vue-typer .custom.char.typed {
        color: white;
    }

    .vue-typer .custom.caret {
        width: 4px;
        background-color: white;
    }

    .carousel-inner:focus {
        outline: none;
    }

    .carousel-item:focus {
        outline: none
    }

    .carousel-item h2 {
        width: 70%;
        font-weight: 400;
        font-size: 1.3rem;
        height: auto;
        margin: 0 auto;
    }

    .carousel-item h4 {
        margin-top: 20px;
        font-weight: 700;
        font-size: 1.1rem;
    }

    .carousel-caption {
        position: static;
        z-index: 10;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #fff;
        text-align: center;
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
        width: 13px;
        height: 20px;
    }

    .carousel-control-prev-icon:hover {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#72c02c' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }

    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
        width: 13px;
        height: 20px;
    }

    .carousel-control-next-icon:hover {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#72c02c' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }

    .progress-bar {
        background-color: #72c02c;
    }

    .progress-card {
        box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.09);
        border-color: #eee;

        &__title {
            margin: 20px;
            font-size: 1.5rem;
        }

        &__item {
            margin-bottom: 20px;
        }
    }


</style>
