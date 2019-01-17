<template>
    <div>
        <b-form @submit="onSubmit">
            <p style="text-align: right;" class="text-muted font-lg mb-4">Создать новый аккаунт</p>
            <label for="email">Введите email:</label>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="email" v-model.trim="username" id="email" :disabled="loading"
                              placeholder="example@mail.com" autocomplete="username email"/>
            </b-input-group>
            <label for="password">Введите пароль:</label>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input id="password" type="password" v-model.trim="password" :disabled="loading"
                              placeholder="Пароль" autocomplete="current-password"/>
            </b-input-group>
            <label for="repeatPassword">Повторите пароль:</label>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input id="repeatPassword" type="password" v-model.trim="repeatPassword" :disabled="loading"
                              placeholder="Пароль" autocomplete="current-password"/>
            </b-input-group>
            <b-row v-if="!loading && errorFB" class="mt-4 justify-content-center text-danger">{{errorFB}}</b-row>
            <b-row class="mt-4">
                <b-col cols="3">
                    <b-button variant="success" class="px-4" :disabled="loading">
                        Зарегистрироваться
                    </b-button>
                </b-col>
                <b-col v-if="loading" cols="3">
                    <i class="spnr"></i>
                </b-col>
            </b-row>
        </b-form>
        <b-alert variant="danger"
                 :show="showError"
                 @dismissed="showError=false">
            Пароли не совпадают
        </b-alert>
    </div>
</template>

<script>
    import stg from '@/stg.js'
    import ajax from '@/ajax.js'
    import utils from '@/utils.js'
    import loginForm from './Login'

    export default {
        components: {
            loginForm
        },
        data() {
            return {
                loading: false,
                username: '',
                password: '',
                repeatPassword: '',
                errorFB: '',
                showError: false
            }
        },
        methods: {
            onSubmit(e) {
                // e.preventDefault();
                // this.errorFB = '';
                // this.loading = true;
                // if (this.password !== this.repeatPassword) this.showError = true
                // ajax.reqAPI('profile/auth', {
                //     method: 'POST',
                //     body: {username: this.username, password: this.password},
                //     without_token: true,
                // }).then(response => {
                //     stg.set('auth_token', response.data.token);
                //     return this.$store.dispatch('refreshProfile').then(() => this.$router.push({name: 'adm'}));
                // }).catch(error => {
                //     this.errorFB = utils.retrieveApiErrorDsc(error);
                //     this.loading = false;
                // });
            },
        },
        beforeCreate() {
            if (this.$store.state.profile || stg.get('auth_token')) {
                this.$router.push({name: 'adm'});
            }
        },
    }
</script>

<style scoped>

</style>