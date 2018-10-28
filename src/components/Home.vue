<template>
  <div>
    <div class="d-flex align-items-center fs0_9 font-weight-600 ws-nowrap px-3 py-1">
      <div class="p-h"><img src="../static/img/logo.png"/></div>
      <div class="flex">&nbsp;</div>
      <div class="p-1 c-pointer">ГЛАВНАЯ СТРАНИЦА</div>
      <div class="p-1 c-pointer">О НАС</div>
      <div class="p-1 c-pointer">КУРСЫ</div>
      <div class="p-1 c-pointer">ЛЕТНЯЯ ШКОЛА</div>
      <div class="p-1 c-pointer">КОНТАКТЫ</div>
      <div class="p-1 c-pointer">ВАКАНСИИ</div>
    </div>
    <div class="b1">
      <div class="cont">
        <div class="fs5_0 bold">СЛОЖНЫЕ ТЕМЫ ЛЕГКО</div>
        <div class="app-fs-24 mt-2_5">Мы работаем на результат</div>
        <div class="btn1 mt-2_5">ЗАПИСАТЬСЯ</div>
      </div>
    </div>
    <div class="b2">
      <div class="col">
        <div class="icon icon-education-48">&#xe036;</div>
        <div class="fs1_5 mt-1_5">Качественное образование</div>
        <div class="desc mt-1">
          Мы очень тщательно подходим к выбору преподавателей.
          В CalcTech вы можете рассчитывать на первоклассный уровень преподавания.
        </div>
      </div>
      <div class="col">
        <div class="icon icon-finance">9</div>
        <div class="fs1_5 mt-1_5">Индивидуальный подход</div>
        <div class="desc mt-1">
          Несмотря на то, что у нас больше 200 учеников, мы
          за индивидуальный подход к каждому. Мы гордимся тем, что знаем имя каждого!
        </div>
      </div>
      <div class="col">
        <div class="icon icon-finance">&#xe02a;</div>
        <div class="fs1_5 mt-1_5">Доступные цены</div>
        <div class="desc mt-1">
          У нас очень большие расходы, но по возможности, мы
          стараемся делать цены доступными для всех.
        </div>
      </div>
    </div>
    <div class="b3">
      <swiper :options="swiperOption" class="w-80 h-100">
        <!-- slides -->
        <swiper-slide>
          <div class="feedback">
            <div class="cont">
              <div class="msg">
                Сіздерге тек табыс, ұжым мүшелеріне зор денсаулық,
                болашақта үлкен оқу орталығы ашылсын!!!
                Әр оқушы грантқа түссін!!!
              </div>
              <div class="name">
                Мирай Бекаxметова
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback">
            <div class="cont">
              <div class="msg">
                Добрый день! Мы ходим на математику. Пробовали в многие места,
                но здесь нас во-первых встретили очень хорошо, объяснили и
                пошли некоторые уступки. Репетитором довольны, дети ходят
                с удовольствием. Хочу написать огромное спасибо.
              </div>
              <div class="name">
                Чахкиев Абдула и Абдул-Малик
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback">
            <div class="cont">
              <div class="msg">
                Приятная атмосфера. Индивидуальный подход к каждому.
                Рады что обратились к вам. Процветания вам и успехов.
              </div>
              <div class="name">
                Болатбек Инкар
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback">
            <div class="cont">
              <div class="msg">
                Хочу выразить огромную благодарность всему коллективу образовательного центра CALCTECH за подготовку
                моего ребенка к тестированию в НИШ. Преподаватели центра смогли за короткое время качественно
                подготовить ребенка к тестированию, "подтянуть" знания по предметам, психологически подготовить ребенка,
                что очень важно при прохождении тестов. Здесь все настроены на результат, главное для центра, чтобы дети
                все успешно сдали тестирование.
              </div>
              <div class="name">
                Алима Толеген
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback">
            <div class="cont">
              <div class="msg">
                Выражаю огромную признательность и благодарность вам и преподавателям репетиторского центра @calctech за
                качественную подготовку Асанали для поступления в НИШ в 7 класс - результат 3-й по списку - 910 баллов!
                Это за короткий срок-всего 3 месяца. Большой вам рахмет за ваш труд!
              </div>
              <div class="name">
                Асанали Шамғұн
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback">
            <div class="cont">
              <div class="msg">
                Я очень довольна вашей работой, к тому же учителя очень хорошо все объясняют, и цена приемлемая. Желаю
                вам процветания в работе, и всего самого наилучшего
              </div>
              <div class="name">
                Маржан Рамазанова
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="b4">
      <div>
        <div class="d-flex flex-nowrap justify-content-sb align-items-center">
          <div class="img-cont">
            <img src="../static/img/gallery/wall.jpg"/>
          </div>
          <div class="img-cont">
            <img src="../static/img/gallery/english.jpg"/>
          </div>
          <div class="img-cont">
            <img src="../static/img/gallery/ent.jpg"/>
          </div>
          <div class="img-cont">
            <img src="../static/img/gallery/nislastday.jpg"/>
          </div>
        </div>
        <div class="d-flex flex-nowrap justify-content-sb align-items-center mt-2">
          <div class="img-cont">
            <img src="../static/img/gallery/nisstudents.jpg"/>
          </div>
          <div class="img-cont">
            <img src="../static/img/gallery/englishexam2.jpg"/>
          </div>
          <div class="img-cont">
            <img src="../static/img/gallery/englishexam.jpg"/>
          </div>
          <div class="img-cont">
            <img src="../static/img/gallery/nisstudy.jpg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="b5">
      <div>
        <div class="fs1_7 font-weight-500 color-black">Курсы</div>
        <div class="d-flex flex-nowrap align-items-start mt-2_5">
          <div>
            <div class="d-flex flex-nowrap align-items-start">
              <div class="icon icon-education-48" style="background-color: #72c02c">%</div>
              <div>
                <div class="hdr">
                  Подготовка к ЕНТ (Единое Национальное Тестирование)
                </div>
                <div class="dsc">
                  Наши учителя имеют многолетний стаж подготовки к ЕНТ и заслуженно считаются лучшими преподавателями
                  города. Быстро подтянем по предметам и вы увидите увеличение баллов уже через месяц. Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon icon-education-48" style="background-color: #9c8061">A</div>
              <div>
                <div class="hdr">
                  Подготовка к вступительным в НИШ (Назарбаев Интеллектуальная Школа)
                </div>
                <div class="dsc">
                  В 2018 году мы подняли средний балл наших учеников на 212 баллов за полтора месяца (максимальный балл
                  - 1000). Самый быстрый результат: за 70 часов увеличили балл ученика с 600 до 910. Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon icon-education-48" style="background-color: #00bed6">a</div>
              <div>
                <div class="hdr">
                  Подготовка к вступительным в НУ (Назарбаев Университет) и зарубежные вузы
                </div>
                <div class="dsc">
                  85% наших учеников с прошлого года набрали необходимые проходные баллы по тестам в НУ. Подготовка к
                  любым англоязычным экзаменам по математике, физике (SAT, SAT Math/Physics, BMAT итд.) Подробнее...
                </div>
              </div>
            </div>
          </div>
          <div class="ml-2_5">
            <div class="d-flex flex-nowrap align-items-start">
              <div class="icon icon-music" style="background-color: #585f69">U</div>
              <div>
                <div class="hdr">
                  Английский язык
                </div>
                <div class="dsc">
                  Прокачаем разговорный английский как школьникам, так и взрослым. Готовим к тестам по английскому
                  языку: IELTS, (в среднем 0.5 баллов улучшения за один месяц занятий), TOEFL, APTIS. Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon icon-finance" style="background-color: #e64b3b">k</div>
              <div>
                <div class="hdr">
                  Отдельные предметы
                </div>
                <div class="dsc">
                  Подтянем математику, физику, химию, биологию, английский по школьной и университетской программ.
                  Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon icon-real-estate" style="background-color: #e81c62">f</div>
              <div>
                <div class="hdr">
                  Книжный клуб
                </div>
                <div class="dsc">
                  Мы знаем, как порой тяжело приобщить детей, да и самому привыкнуть к чтению, и надеемся, что наш клуб
                  сможет привить любовь к запаху книг. В книжном клубе мы читаем интересные книги и обсуждаем их за чаем
                  с печеньками. Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon icon-communication" style="background-color: #e81c62">&#xe003;</div>
              <div>
                <div class="hdr">
                  Робототехника
                </div>
                <div class="dsc">
                  На курсах робототехники для учащихся 5-8 классов дети учатся мыслить креативно и "создавать", что
                  будет очень важным навыком в их будущем. Подробнее...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="b6">
      <div>
        <div class="fs2_0 font-weight-600 color-black t-align-center">
          Наша команда
        </div>
        <div class="fs1_25 lh1_6 font-weight-300 t-align-center mt-2">
          Мы молодая квалифицированная команда, ориентирующаяся на преподавании точных,<br/>
          естественных наук и английского языка. Подробнее...
        </div>
        <div class="d-flex flex-nowrap justify-content-sb align-items-start mt-3">
          <div class="card">
            <img class="ava" src="../static/img/team/yerlan.jpg"/>
            <div class="info">
              <div class="name">Иран Ерлан</div>
              <div class="position">СО-ОСНОВАТЕЛЬ</div>
              <div class="quote">
                Верю, что наш центр приносит пользу нашему родному городу.
              </div>
            </div>
          </div>
          <div class="card">
            <img class="ava" src="../static/img/team/aziza.png"/>
            <div class="info">
              <div class="name">Азиза Сатхожина</div>
              <div class="position">СО-ОСНАВАТЕЛЬ, ПРЕПОДАВАТЕЛЬ МАТЕМАТИКИ И ФИЗИКИ</div>
              <div class="quote">
                Путь к знаниям - это самое интересное приключение в нашей жизни.
              </div>
            </div>
          </div>
          <div class="card">
            <img class="ava" src="../static/img/team/ruslan.jpg"/>
            <div class="info">
              <div class="name">Руслан Козыбаев</div>
              <div class="position">ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО</div>
              <div class="quote">
                To understand the Sun we have to understand the atom because of the oneness of the universe.
              </div>
            </div>
          </div>
          <div class="card">
            <img class="ava" src="../static/img/team/anast.png"/>
            <div class="info">
              <div class="name">Анастасия Гилязутдинова</div>
              <div class="position">ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО</div>
              <div class="quote">
                My childhood dream was to be a psychologist,
                so I’m eager to not only teach but make students want to learn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import constants from "../constants";
  import utils from "../utils";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {swiper, swiperSlide},
    data() {
      return {
        utils, constants,
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        },
      };
    },
  }
</script>

<style scoped>
  .btn1 {
    display: inline-block;
    padding: 1.1rem 2rem;
    border-radius: 50px;
    border: 1px solid white;
    color: white;
    background-color: rgba(255, 255, 255, .1);
    cursor: pointer;
    transition: background-color .2s ease, color .2s ease;
  }

  .btn1:hover {
    color: black;
    background-color: rgba(255, 255, 255, 1);
  }

  .b1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../static/img/wall_bw.jpg) center/cover no-repeat;
  }

  .b1::before {
    content: '';
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
  }

  .b1 > .cont {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
  }

  .b2 {
    display: flex;
    align-items: stretch;
    flex-wrap: nowrap;
    border-bottom: 1px solid #eee;
  }

  .b2 > .col {
    flex: 1;
    width: 33.33%;
    padding: 5rem 4rem;
    text-align: center;
    border-right: 1px solid #eee;
  }

  .b2 > .col:last-child {
    border-right: none;
  }

  .b2 .icon {
    display: inline-block;
    padding: 23px 25px;
    border-radius: 10rem;
    font-style: normal !important;
    font-size: 38px;
    color: white;
    background-color: #72c02c;
  }

  .b2 .desc {
    line-height: 1.6rem;
  }

  .b3 {
    display: block;
    width: 100%;
    /*min-height: 450px;*/
    padding: 7rem 3rem 3rem;
  }

  .b3 .feedback {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .b3 .cont {
    width: 70%;
    height: 100%;
  }

  .b3 .msg {
    font-size: 1.28571rem;
    font-weight: 400;
    line-height: 1.6;
  }

  .b3 .name {
    font-size: 1.1rem;
    margin-top: 4.2rem;
    font-weight: 700;
  }

  .b4 {
    padding: 3rem 0;
    text-align: center;
  }

  .b4 > div {
    display: inline-block;
    width: 1110px;
    text-align: left;
  }

  .b4 .img-cont {
    width: 255px;
    height: 177px;
    overflow: hidden;
    cursor: pointer;
  }

  .b4 .img-cont > img {
    width: 315px;
    margin-left: -60px;
    transition: margin-left .3s;
  }

  .b4 .img-cont > img:hover {
    margin-left: 0;
  }

  .b5 {
    padding: 5rem 0;
    text-align: center;
  }

  .b5 > div {
    display: inline-block;
    width: 1110px;
    text-align: left;
  }

  .b5 .icon {
    margin-right: 1.5rem;
    padding: .8rem;
    border-radius: 50px;
    font-size: 1.14rem;
    color: white;
  }

  .b5 .hdr {
    font-size: 1.2rem;
    line-height: 1.4;
    color: #72c02c;
    margin-bottom: .5rem;
    cursor: pointer;
    transition: all .3s;
  }

  .b5 .hdr:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  .b5 .dsc {
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #777;
    margin-bottom: .5rem;
  }

  .b6 {
    padding: 5rem 0;
    text-align: center;
  }

  .b6 > div {
    display: inline-block;
    width: 1110px;
    text-align: left;
  }

  .b6 .card {
    width: 255px;
  }

  .b6 .ava {
    width: 100%;
    height: 340px;
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
    color: #72c02c;
  }

  .b6 .info > .quote {
    margin-top: 1rem;
    line-height: 1.6;
    /*color: #72c02c;*/
  }
</style>
