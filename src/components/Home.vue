<template>
  <div>
    <div class="app-section b1">
      <div class="app-section-cont">
        <div class="cont">
          <div class="fs5_0 bold">СЛОЖНЫЕ ТЕМЫ ЛЕГКО</div>
          <div class="app-fs-24 mt-2_5">Мы работаем на результат</div>
          <div class="btn1 mt-2_5">ЗАПИСАТЬСЯ</div>
        </div>
      </div>
    </div>
    <div class="app-section">
      <div class="b2">
        <div class="col">
          <div class="icon"><i class="fas fa-chalkboard-teacher"></i></div>
          <div class="fs1_5 mt-1_5">Качественное образование</div>
          <div class="desc mt-1">
            Мы очень тщательно подходим к выбору преподавателей.
            В CalcTech вы можете рассчитывать на первоклассный уровень преподавания.
          </div>
        </div>
        <div class="col">
          <div class="icon"><i class="fas fa-users"></i></div>
          <div class="fs1_5 mt-1_5">Индивидуальный подход</div>
          <div class="desc mt-1">
            Несмотря на то, что у нас больше 200 учеников, мы
            за индивидуальный подход к каждому. Мы гордимся тем, что знаем имя каждого!
          </div>
        </div>
        <div class="col">
          <div class="icon"><i class="fas fa-hand-holding-usd"></i></div>
          <div class="fs1_5 mt-1_5">Доступные цены</div>
          <div class="desc mt-1">
            У нас очень большие расходы, но по возможности, мы
            стараемся делать цены доступными для всех.
          </div>
        </div>
      </div>
    </div>
    <div class="app-section">
      <div class="app-section-cont b3">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <div class="feedback">
              <div class="msg">
                Сіздерге тек табыс, ұжым мүшелеріне зор денсаулық,
                болашақта үлкен оқу орталығы ашылсын!!!
                Әр оқушы грантқа түссін!!!
              </div>
              <div class="name">
                Мирай Бекаxметова
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
                  подготовить ребенка к тестированию, "подтянуть" знания по предметам, психологически подготовить
                  ребенка,
                  что очень важно при прохождении тестов. Здесь все настроены на результат, главное для центра, чтобы
                  дети
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
                  Выражаю огромную признательность и благодарность вам и преподавателям репетиторского центра @calctech
                  за
                  качественную подготовку Асанали для поступления в НИШ в 7 класс - результат 3-й по списку - 910
                  баллов!
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
    </div>
    <div class="app-section">
      <div class="app-section-cont b4">
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
    <div class="app-section">
      <div class="app-section-cont b5">
        <div class="fs1_7 font-weight-500 color-black">Курсы</div>
        <div class="d-flex flex-nowrap align-items-start mt-2_5">
          <div>
            <div class="d-flex flex-nowrap align-items-start">
              <div class="icon" style="background-color: #72c02c"><i class="far fa-folder-open"></i></div>
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
              <div class="icon" style="background-color: #9c8061"><i class="far fa-lightbulb"></i></div>
              <div>
                <div class="hdr">
                  Подготовка к вступительным в НИШ (Назарбаев Интеллектуальная Школа)
                </div>
                <div class="dsc">
                  В 2018 году мы подняли средний балл наших учеников на 212 баллов за полтора месяца (максимальный
                  балл
                  - 1000). Самый быстрый результат: за 70 часов увеличили балл ученика с 600 до 910. Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon" style="background-color: #00bed6"><i class="fas fa-graduation-cap"></i></div>
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
              <div class="icon" style="background-color: #585f69"><i class="fas fa-sort-alpha-up"></i></div>
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
              <div class="icon" style="background-color: #e64b3b"><i class="fas fa-code-branch"></i></div>
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
              <div class="icon" style="background-color: #e81c62"><i class="fas fa-book-open"></i></div>
              <div>
                <div class="hdr">
                  Книжный клуб
                </div>
                <div class="dsc">
                  Мы знаем, как порой тяжело приобщить детей, да и самому привыкнуть к чтению, и надеемся, что наш
                  клуб
                  сможет привить любовь к запаху книг. В книжном клубе мы читаем интересные книги и обсуждаем их за
                  чаем
                  с печеньками. Подробнее...
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-start mt-1_5">
              <div class="icon" style="background-color: #18ba9b"><i class="fas fa-robot"></i></div>
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
    <div class="app-section">
      <div class="app-section-cont b6">
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
            <img class="ava" src="../static/img/team/aziza.jpg"/>
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
            <img class="ava" src="../static/img/team/anast.jpg"/>
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
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {swiper, swiperSlide},
    data() {
      return {
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
  .b1 {
    background: url(../static/img/wall_bw.jpg) center top/cover no-repeat;
  }

  .b1 .cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    text-align: center;
    color: white;
  }

  .b2 {
    display: flex;
    align-items: stretch;
    flex-wrap: nowrap;
    width: 100%;
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 10rem;
    font-size: 26px;
    color: white;
    background-color: #72c02c;
  }

  .b2 .desc {
    line-height: 1.6rem;
  }

  .b3 {
    padding: 7rem 2rem;
  }

  .b3 .feedback {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 0 10rem;
    text-align: center;
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
  }

  .b5 .icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-right: 1.5rem;
    border-radius: 50px;
    color: white;
  }

  .b5 .hdr {
    font-size: 1.2rem;
    line-height: 1.4;
    color: #72c02c;
    padding-bottom: .5rem;
    cursor: pointer;
  }

  .b5 .hdr:hover {
    color: #5c9924;
  }

  .b5 .dsc {
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #777;
  }

  .b6 {
    padding: 5rem 0;
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
