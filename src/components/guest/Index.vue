<template>
  <div class="d-block w-100 h-100">
    <template v-if="$route.name === routeName">
      <div class="d-wide-flex-center of-hidden bg-map">
        <div class="d-flex flex-flow-column flex-nowrap align-items-center h-100 py-1 px-1_5 pos-rel animated fadeIn"
          style="max-height: 90vh">
          <div class="app-fs-20 font-weight-300 t-align-center px-1" style="line-height: 24px;">
            Найди сервис или запчасть за&nbsp;3&nbsp;минуты
          </div>
          <div class="btn btn2 mt-2 d-flex align-items-center py-h"
               @click="$router.push({name: 'guest-forder-select-city-country'})">
            <div class="py-1 px-1_5 brr-1 app-border-style2">
              <img src="../../static/img/icons/SVG/icn-add.svg" style="width:32px;height:32px;"/>
            </div>
            <div class="ml-1 pl-q t-align-left flex">
              <div class="app-fs-16 font-weight-500 app-color-green">Отправить заявку</div>
              <div class="app-fs-12 font-weight-300 app-color-gray4 mt-q">всем СТО и продавцам<br/>автозапчастей</div>
            </div>
          </div>
          <div class="btn btn2 mt-1 d-flex align-items-center py-h"
               @click="$router.push({name: 'guest-fpenalty_request'})">
            <div class="py-1 px-1_5 brr-1 app-border-style2">
              <img src="../../static/img/icons/SVG/icn-wtrafy2.svg" style="width:32px;height:32px;"/>
            </div>
            <div class="ml-1 pl-q t-align-left flex">
              <div class="app-fs-16 font-weight-500 app-color-green">Штрафы ПДД</div>
              <div class="app-fs-12 font-weight-300 app-color-gray4 mt-q">проверка и оплата</div>
            </div>
          </div>
          <div class="flex"></div>
          <div class="btn btn2" @click="$router.push({name: 'auth-register'})">
            Я СТО или продаю запчасть
          </div>
          <div class="app-color-gray5 font-weight-300 mt-1_5" @click="$router.push({name: 'auth'})">
            У меня уже есть аккаунт >
          </div>
        </div>
      </div>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ['routeName'],
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .bg-map {
    background: url(../../static/img/map.png) center bottom/100% auto no-repeat;
  }
</style>
