<template>
  <div class="app-section">
    <div class="app-section-cont">
      <div class="cont">
        <h1 class="text-black-50" style="font-weight: 300">
          Открытые вакансии
        </h1>
        <h4 class="text-black-50" style="font-weight: 300">
          Мы ищем талантливых сотрудников, которые любят свое дело.<br/>
          Резюме отправляйте на calctech.kokshe@gmail.com
        </h4>
        <div class="mt-5 container">
          <div class="items__list">
            <div>
              <div class="block">
                <div class="title">Администратор</div>
                <div class="note">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>полная занятость</span>
                </div>
              </div>
              <div class="block mt-1">
                <div class="title">Учитель математики</div>
                <div class="note">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>частичная занятость</span>
                </div>
              </div>
            </div>
            <div>
              <div class="block">
                <div class="title">Учитель физики</div>
                <div class="note">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>частичная занятость</span>
                </div>
              </div>
              <div class="block mt-1">
                <div class="title">Учитель истории Казахстана</div>
                <div class="note">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>частичная занятость</span>
                </div>
              </div>
            </div>
            <div>
              <div class="block">
                <div class="title">Учитель программирования</div>
                <div class="note">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>частичная либо полная занятость</span>
                </div>
              </div>
              <div class="block mt-1">
                <div class="title">Учитель английского</div>
                <div class="note">
                  <i class="fas fa-chalkboard-teacher"></i>
                  <span>частичная занятость</span>
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
  .cont {
    padding: 7rem 0 6rem;
    text-align: center;
    font-weight: 300;
    margin-top: 50px;
  }

  .items__list{
    display: flex;
    justify-content: space-between;
  }

  .block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 350px;
    height: 86px;
    padding-left: 1.4rem;
    border-radius: .25rem;
    box-shadow: 0 0 2px #ccc;
  }

  .block > .title {
    color: #555555;
    font-weight: 600;
    cursor: pointer;
    transition: color .2s;
  }

  .block > .title:hover {
    color: #72c02c;
  }

  .block > .note {
    margin-top: .5rem;
    color: #777777;
    font-size: .9rem;
    font-weight: 400;
  }

  .block > .note > * {
    vertical-align: middle;
  }

  .block > .note > i {
    margin-right: .2rem;
    font-size: .8rem;
  }


</style>
