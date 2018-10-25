<template>
  <div class="pos-rel d-wide-flex-center">
    <template v-if="$route.name === routeName">
      <div v-if="!loading" class="animated fadeIn w-80 pt-3">
        <div class="fs2_0 font-weight-500 mb-1">Войти</div>
        <div v-if="showSMSInput" class="app-color-gray1">Мы отправили Вам SMS код</div>
        <div class="mt-3">
          <input type="tel" v-model="username" placeholder="+77017777777" ref="username"
                 @click="utils.eventTargetFocus"/>
        </div>
        <template v-if="showSMSInput">
          <div class="mt-1_5">
            <input type="number" v-model="sms_code" placeholder="Введите SMS код" ref="sms_code"
                   @click="utils.eventTargetFocus"/>
          </div>
          <div class="t-align-right mt-1">
            <a href="#" class="btn app-fs-12 color-white font-weight-300 p-q"
               @click.prevent="onSendSMSClick">
              Выслать повторно
            </a>
          </div>
        </template>
        <div class="mt-3 mb-1_5">
          <button type="submit" class="btn2 big success"
                  @click="(showSMSInput ? onAuthClick() : onSendSMSClick())">
            ВОЙТИ
          </button>
        </div>
        <div class="mb-4 t-align-center btn color-white font-weight-300 p-q"
             @click="$router.push({name: 'auth-register', params: {username}})">
          Регистрация
        </div>
        <div class="t-align-center">
          <div class="btn app-color-gray1 font-weight-300 p-q" @click="$router.push({name: 'guest'})">
            Войти как гость >
          </div>
        </div>
      </div>
      <i v-else="" class="spnr big"></i>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  import moment from 'moment'
  import utils from '../../utils.js'
  import ajax from '../../ajax.js'
  import stg from '../../stg.js'
  import dict from '../../dict.js'

  export default {
    props: ['routeName'],
    data() {
      return {
        utils,
        loading: false,
        username: '',
        sms_code: null,
        showSMSInput: false,
      }
    },
    methods: {
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
          if (!check_username_reply.found) {
            this.$store.commit('alertMsg', 'Введенный Вами номер/логин не существует');
            this.loading = false;
            return;
          }
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
          if (check_username_reply.fake) {
            this.onAuthClick(true);
            return;
          }
          ajax.reqAPI('profile/send_validate_code', {
            method: 'POST',
            body: {username: this.username},
            without_token: true,
          }).then(() => {
            this.sms_code = '';
            this.showSMSInput = true;
            this.loading = false;
            this.$nextTick(() => {
              this.$refs.sms_code.focus();
            });
          }).catch(error => {
            this.loading = false;
            if (!this.showSMSInput && error && error.data && error.data.error &&
              (['limit_reached', 'too_frequent'].indexOf(error.data.error) > -1)) {
              this.showSMSInput = true;
              return;
            }
            this.$store.commit('alertErrorFromAPI', error);
          });
        }).catch(error => {
          this.loading = false;
          this.$store.commit('alertErrorFromAPI', error);
        });
      },
      onAuthClick(fake) {
        if (!this.username) {
          this.$store.commit('alert', {
            msg: 'Введите номер телефона',
            onClose: () => {
              this.$refs.username.focus();
            },
          });
          return;
        }
        if (!fake && !this.sms_code) {
          this.$store.commit('alert', {
            msg: 'Введите SMS код',
            onClose: () => {
              this.$refs.sms_code.focus();
            },
          });
          return;
        }
        this.loading = true;
        ajax.reqAPI('profile/auth', {
          method: 'POST',
          body: {
            username: this.username,
            sms_code: parseInt(this.sms_code) || 0,
          },
          without_token: true,
        }).then(response => {
          stg.set('auth_token', response.data.token);
          this.$router.push({name: 'scene'});
        }).catch(error => {
          console.log(error);
          this.loading = false;
          this.$store.commit('alertErrorFromAPI', error);
        });
      },
    },
    beforeCreate() {
      if (this.$store.state.profile || stg.get('auth_token')) {
        this.$router.push({name: 'scene'});
      }
    },
  }
</script>
