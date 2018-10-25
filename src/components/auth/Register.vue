<template>
  <transition name="slide-right">
    <div class="pf-high page app-bg">
      <template v-if="$route.name === routeName">
        <div class="tbar transparent">
          <div class="bb" @click="onBackClick">&nbsp;</div>
          <div v-if="this.headerText" class="center">{{this.headerText}}</div>
        </div>
        <div class="body d-wide-flex-center">
          <i v-if="loading" class="spnr big"></i>
          <template v-else>
            <div class="animated fadeIn w-80">
              <div class="fs2_0 font-weight-500 mb-h">{{titleText}}</div>
              <div class="app-color-gray1 mb-2_5" style="line-height:22px;" v-html="noteHtml"></div>
              <div v-if="showCity" class="mb-1_5">
                <input type="text" class="selector" placeholder="Город"
                       :value="city_name" @click="onCityClick"/>
              </div>
              <div class="mb-1_5">
                <input type="text" v-model="name" ref="name" placeholder="Имя"
                       @click="utils.eventTargetFocus"/>
              </div>
              <div class="mb-1">
                <input type="tel" v-model="username" ref="username" placeholder="+77017777777"
                       @click="utils.eventTargetFocus"/>
              </div>
              <div v-if="!showSMSInput" class="t-align-right">
                <a href="#" class="btn app-fs-12 color-white font-weight-300 p-q"
                   @click.prevent="showSMSInput=true">
                  Уже есть SMS код
                </a>
              </div>
              <template v-else="">
                <div class="mb-1 mt-1_5">
                  <input type="number" v-model="sms_code" ref="sms_code"
                         placeholder="Введите SMS код" @click="utils.eventTargetFocus"/>
                </div>
                <div class="t-align-right">
                  <a href="#" class="btn app-fs-12 color-white font-weight-300 p-q"
                     @click.prevent="onSendSMSClick">
                    Выслать повторно
                  </a>
                </div>
              </template>
              <div class="mt-2_5">
                <button v-if="!showSMSInput" key="submit-btn1" type="submit" class="btn2 big success"
                        @click="onSendSMSClick">
                  ПОЛУЧИТЬ КОД
                </button>
                <button v-else="" key="submit-btn2" type="submit" class="btn2 big success"
                        @click="onRegisterClick">
                  ГОТОВО
                </button>
              </div>
            </div>
          </template>
        </div>
      </template>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import _ from 'lodash'
  import ajax from '../../ajax.js'
  import utils from '../../utils.js'
  import dict from '../../dict.js'
  import stg from '../../stg.js'

  export default {
    props: ['routeName', 'toRoute', 'resultTo', 'header', 'title', 'note', 'replaceIfExist'],
    data() {
      return {
        utils,
        backSteps: 0,
        loading: false,
        city: null,
        name: '',
        username: '',
        sms_code: '',
        showCity: true,
        showSMSInput: false,
      };
    },
    computed: {
      headerText() {
        return this.header;
      },
      titleText() {
        return this.title || 'Создать аккаунт';
      },
      noteHtml() {
        return this.note || 'CTOgram отправит SMS-сообщение, чтобы подтвердить Ваш номер телефона';
      },
      city_name() {
        return (this.city || {}).name || '';
      },
    },
    watch: {
      '$route'() {
        this.onRouteChanged();
      },
    },
    methods: {
      onRouteChanged() {
        if (this.$route.name === this.routeName) {
          let query = this.$route.query;
          let params = this.$route.params;
          this.backSteps -= params.bsa || 0;
          if (params.username) {
            this.username = params.username;
          } else if(query.username) {
            this.username = query.username;
          }
          if (params.city) {
            this.city = _.find(dict.cities, {id: params.city}) || this.city;
          } else if(query.city) {
            this.city = _.find(dict.cities, {id: parseInt(query.city)}) || this.city;
          }
        }
      },
      onSendSMSClick() {
        if (!this.username) {
          this.$store.commit('alert', {
            msg: 'Введите номер телефона',
            onClose: () => {
              this.$refs.username.focus();
            },
          });
          return;
        }
        this.loading = true;
        ajax.reqAPI('usrs/check_username', {
          method: 'PUT',
          body: {username: this.username},
          without_token: true,
        }).then(check_username_response => {
          let check_username_reply = check_username_response.data;
          if (check_username_reply.found) {
            if (check_username_reply.banned) {
              let elapsedTime = moment(check_username_reply.until).to(moment(), true);
              this.$store.commit('alert', {
                msg: `Ваш аккаунт был забанен администрацией на период "${elapsedTime}", по причине "${check_username_reply.reason}". Обратитесь в администрацию!`,
                buttons: [
                  {
                    tp: 'anchor',
                    href: `tel:${utils.fmtPhone(dict.configs.contacts.phone)}`,
                    txt: 'Позвонить в Адм.',
                  },
                  {
                    txt: 'отмена',
                  },
                ],
              });
              this.loading = false;
              return;
            }
            if (check_username_reply.fake && this.city && this.name) {
              this.sms_code = '123';
              this.onRegisterClick(true);
              return;
            }
          }
          ajax.reqAPI('profile/send_validate_code', {
            method: 'POST',
            body: {username: this.username},
            without_token: true,
          }).then(() => {
            this.sms_code = '';
            this.showSMSInput = true;
            this.loading = false;
            if (this.city && this.name) {
              this.$nextTick(() => {
                this.$refs.sms_code.focus();
              });
            }
          }).catch(error => {
            this.showSMSInput = true;
            this.loading = false;
            this.$store.commit('alertErrorFromAPI', error);
          });
        }).catch(error => {
          this.showSMSInput = true;
          this.loading = false;
          this.$store.commit('alertErrorFromAPI', error);
        });
      },
      onRegisterClick() {
        if (!this.city) {
          this.$store.commit('alertMsg', 'Укажите город');
          return;
        }
        if (!this.name) {
          this.$store.commit('alert', {
            msg: 'Введите имя',
            onClose: () => {
              this.$refs.name.focus();
            },
          });
          return;
        }
        if (!this.username) {
          this.$store.commit('alert', {
            msg: 'Введите номер телефона',
            onClose: () => {
              this.$refs.username.focus();
            },
          });
          return;
        }
        if (!this.sms_code) {
          this.$store.commit('alert', {
            msg: 'Введите СМС код',
            onClose: () => {
              this.$refs.sms_code.focus();
            },
          });
          return;
        }
        this.loading = true;
        ajax.reqAPI('profile/reg', {
          method: 'POST',
          body: {
            username: this.username,
            sms_code: parseInt(this.sms_code) || 0,
            city: this.city.id,
            name: this.name,
            replace_if_exist: !!this.replaceIfExist,
          },
          without_token: true,
        }).then(response => {
          stg.set('auth_token', response.data.token);
          if (this.toRoute) {
            let rattr = this.resultTo === 'query' ? 'query' : 'params';
            let result = {registered: true};
            this.$router.push(_.defaultsDeep(
              {[rattr]: result},
              this.toRoute,
              {params: {bsa: 1}},
              _.omit(_.pick(this.$route, ['query', 'params']), `${rattr}.registered`),
            ));
          } else {
            this.$router.push({name: 'scene'});
          }
        }).catch(error => {
          this.loading = false;
          this.$store.commit('alertErrorFromAPI', error);
        });
      },
      onCityClick(e) {
        e.target.blur();
        e.stopPropagation();
        e.preventDefault();
        this.$router.push({path: 'select_city', append: true});
      },
      onBackClick() {
        this.$router.go(this.backSteps);
      },
    },
    created() {
      this.backSteps = (this.$route.name === this.routeName) ? -1 : 0;
      this.onRouteChanged();
      if (this.city) {
        this.showCity = false;
      }
      if (this.username) {
        this.onSendSMSClick();
      }
    },
  }
</script>