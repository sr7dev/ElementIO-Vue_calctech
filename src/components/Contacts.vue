<template>
  <div>
    <div class="app-section b1">
      <div class="app-section-cont">
        <div class="hdr">Контакты</div>
      </div>
    </div>
    <div class="app-section b2">
      <div class="app-section-cont">
        <div class="cont">
          <div class="form">
            <div class="d-flex flex-nowrap align-items-center">
              <div class="sw1 mr-2">
                <div class="app-form-block">
                  <label>Имя:</label>
                  <input type="text"/>
                </div>
              </div>
              <div class="sw1">
                <div class="app-form-block">
                  <label>Электронная почта:</label>
                  <input type="email"/>
                </div>
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-center mt-1_5">
              <div class="sw1 mr-2">
                <div class="app-form-block">
                  <label>Предмет:</label>
                  <input type="text"/>
                </div>
              </div>
              <div class="sw1">
                <div class="app-form-block">
                  <label>Телефон:</label>
                  <input type="text"/>
                </div>
              </div>
            </div>
            <div class="mt-1_5">
              <div class="app-form-block">
                <label>Сообщение:</label>
                <textarea rows="7"></textarea>
              </div>
            </div>
            <div class="mt-3">
              <button>Отправить Вопрос</button>
            </div>
          </div>
          <div class="contacts">
            <div class="fs2_5 font-weight-300">ТОО CalcTech</div>
            <div class="mt-3">
              <div class="fs1_25 app-color3 font-weight-600">Адрес:</div>
              <div class="fs1_15 lh1_6 app-color4 mt-h">
                Ауельбекова 90<br/>
                Кокшетау<br/>
                Акмолинская область
              </div>
            </div>
            <div class="mt-1_5">
              <div class="fs1_25 app-color3 font-weight-600">Email:</div>
              <div class="fs1 lh1_6 app-color3 mt-h">
                calctech.kokshe@gmail.com
              </div>
            </div>
            <div class="mt-1_5">
              <div class="fs1_25 app-color3 font-weight-600">Телефон:</div>
              <div class="mt-h">
                <div class="fs1 lh1_6 app-color3">+7 747 855 2148</div>
                <div class="fs1_15 lh1_6 font-weight-600 app-color5 italic mt-1">
                  <div>Понедельник - Суббота: с 10:00 to 19:00</div>
                  <div class="mt-1">Воскресенье: с 11:00 to 14:00</div>
                  <div class="mt-1">Часы работы могут меняться в завимости от загруженности</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .b1 {
    background-color: #f7f7f7
  }

  .b1 .hdr {
    font-size: 1.75rem;
    font-weight: 300;
    color: #555555;
    margin: 4rem 0;
  }

  .b2 .cont {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 4rem 0 4rem;
  }

  .b2 .sw1 {
    width: 300px;
  }

  .b2 .contacts {
    margin-left: 8rem;
  }
</style>
