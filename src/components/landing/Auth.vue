<template>
  <b-container class="pt-5 animated fadeIn">
    <b-row class="justify-content-center py-8">
      <b-col md="8" lg="6">
        <b-card-group>
          <b-card no-body class="p-4">
            <b-card-body>
              <b-form @submit="onSubmit">
                <h1>Вход</h1>
                <p class="text-muted font-lg mb-4">войти в свой аккаунт</p>
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="email" v-model.trim="username" :disabled="loading"
                                placeholder="example@mail.com" autocomplete="username email"/>
                </b-input-group>
                <b-input-group class="mt-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model.trim="password" :disabled="loading"
                                placeholder="Пароль" autocomplete="current-password"/>
                </b-input-group>
                <b-row v-if="!loading && errorFB" class="mt-4 justify-content-center text-danger">{{errorFB}}</b-row>
                <b-row class="mt-4 align-items-center">
                  <b-col cols="3">
                    <b-button type="submit" size="lg" variant="success" class="px-4" :disabled="loading">
                      Войти
                    </b-button>
                  </b-col>
                  <b-col v-if="loading" cols="3">
                    <i class="spnr"></i>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import stg from '../../stg.js'
  import ajax from '../../ajax.js'
  import utils from '../../utils.js'

  export default {
    props: ['routeName'],
    data() {
      return {
        loading: false,
        username: '',
        password: '',
        errorFB: '',
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        this.errorFB = '';
        this.loading = true;
        ajax.reqAPI('profile/auth', {
          method: 'POST',
          body: {username: this.username, password: this.password},
          without_token: true,
        }).then(response => {
          stg.set('auth_token', response.data.token);
          this.$router.push('/');
        }).catch(error => {
          this.errorFB = utils.retrieveApiErrorDsc(error);
          this.loading = false;
        });
      },
    },
    beforeCreate() {
      if (this.$store.state.profile || stg.get('auth_token')) {
        this.$router.push({name: 'app'});
      }
    },
  }
</script>
