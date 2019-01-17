<template>
    <div>
        <b-form @submit="onSubmit">
            <p class="text-muted font-lg mb-4">Войти в свой аккаунт</p>
            <label for="email">Введите email:</label>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="email" id="email" v-model.trim="username" :disabled="loading"
                              placeholder="example@mail.com" autocomplete="username email"/>
            </b-input-group>
            <label for="password">Введите пароль:</label>
            <b-input-group class="mb-3">
                <b-input-group-prepend>
                    <b-input-group-text><i class="fa fa-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <b-form-input type="password" id="password" v-model.trim="password" :disabled="loading"
                              placeholder="Пароль" autocomplete="current-password"/>
            </b-input-group>
            <b-row v-if="!loading && errorFB" class="mt-4 justify-content-center text-danger">{{errorFB}}</b-row>
            <b-row class="mt-4">
                <b-col cols="3">
                    <b-button type="submit" variant="success" class="px-4" :disabled="loading">
                        Войти
                    </b-button>
                </b-col>
                <b-col v-if="loading" cols="3">
                    <i class="spnr"></i>
                </b-col>
            </b-row>
        </b-form>
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
                    return this.$store.dispatch('refreshProfile').then(() => this.$router.push({name: 'adm'}));
                }).catch(error => {
                    this.errorFB = utils.retrieveApiErrorDsc(error);
                    this.loading = false;
                });
            },
        },
        beforeCreate() {
            if (this.$store.state.profile || stg.get('auth_token')) {
                this.$router.push({name: 'adm'});
            }
        },
    }
</script>