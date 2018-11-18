<template>
  <div class="app-section app-bg1">
    <div class="app-section-cont cont">
      <div class="panel">
        <div class="fs2_0 font-weight-600 color-black t-align-center">Вход</div>
        <div class="mt-2">
          <div class="app-form-block2">
            <label>Email:</label>
            <input type="email" placeholder="example@gmail.com"/>
          </div>
        </div>
        <div class="mt-2">
          <div class="app-form-block2">
            <label>Пароль:</label>
            <input type="email" placeholder="Пароль"/>
          </div>
        </div>
        <div class="mt-2_5">
          <button class="w-100">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cont {
    padding: 6rem 0;
    text-align: center;
  }

  .panel {
    display: inline-block;
    width: 475px;
    padding: 2rem 2rem 4rem;
    text-align: left;
    border-radius: .25rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.09);
  }
</style>
