<template>
  <div class="app-footer">
    <div class="app-section row1">
      <div class="app-section-cont">
        <div class="cont">
          <div class="col col1">
            <div class="logo-cont"><img src="../static/img/logo.png"/></div>
            <div class="quote">
              Наша цель - дать детям возможность получения качественного и доступного образования.
            </div>
          </div>
          <div class="flex"></div>
          <div class="col col2">
            <div class="hdr">ПОЛЕЗНЫЕ ССЫЛКИ</div>
            <ul class="menu">
              <li><span>О нас</span> <i class="fas fa-angle-right" style="text-decoration: none"></i></li>
              <li><span>Курсы</span> <i class="fas fa-angle-right"></i></li>
              <li><span>Летняя Школа</span> <i class="fas fa-angle-right"></i></li>
              <li><span>Вакансии</span> <i class="fas fa-angle-right"></i></li>
              <li><span>Наши контакты</span> <i class="fas fa-angle-right"></i></li>
            </ul>
          </div>
          <div class="col col3">
            <div class="hdr">НАШИ КОНТАКТЫ</div>
            <div class="address">
              Кокшетау, Акмолинская область<br/>
              Ауельбекова 90<br/>
              Телефон: <a href="tel:+77478552148">+7 747 855 2148</a><br/>
              Email: <a href="mailto:calctech.kokshe@gmail.com">calctech.kokshe@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-section row2">
      <div class="app-section-cont">
        <div class="cont">
          2018 © Все права защищены.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app-footer > .row1 {
    background-color: rgba(0, 0, 0, .9);
  }

  .app-footer > .row1 .cont {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 5rem 0 4rem;
    color: rgba(255, 255, 255, .8);
  }

  .app-footer .col {
    flex-shrink: 0;
    width: 255px;
    margin-right: 2rem;
  }

  .app-footer .col:last-child {
    margin-right: 0;
  }

  .app-footer .quote {
    margin-top: 1.5rem;
    line-height: 1.6;
  }

  .app-footer .hdr {
    padding-bottom: .5rem;
    border-bottom: 1px solid rgba(114, 192, 44, .6);
  }

  .app-footer .menu {
    display: block;
    margin-top: .85rem;
  }

  .app-footer .menu > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7rem 0;
    line-height: 1.4;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    cursor: pointer;
  }

  .app-footer .menu > li:last-child {
    border-bottom: none;
  }

  .app-footer .menu > li:hover > span {
    text-decoration: underline;
  }

  .app-footer .address {
    line-height: 2;
    margin-top: 1.4rem;
  }

  .app-footer .address a {
    color: #72c02c;
    text-decoration: none;
  }

  .app-footer .address a:hover {
    text-decoration: underline;
  }

  .app-footer > .row2 {
    background-color: rgba(0, 0, 0, 1);
  }

  .app-footer > .row2 .cont {
    padding: 1.5rem 0;
    color: rgba(255, 255, 255, .8);
  }
</style>
