<template>
    <b-container class="pt-5 animated fadeIn auth">
        <b-row class="justify-content-center py-8">
            <b-col md="8" lg="6">
                <b-card no-body class="p-4">
                    <b-card-body>
                        <div class="auth__modes">
                            <div class="auth__modes__item" @click="state.mode = key" v-for="(name, key) in modes"
                                 :class="{'auth__modes__item_active': state.mode === key}">
                                <h1>{{name}}</h1>
                            </div>
                        </div>
                        <login-form v-if="state.mode === 'login'"></login-form>
                        <registration-form v-if="state.mode === 'registration'"></registration-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import stg from '@/stg.js'
    import ajax from '@/ajax.js'
    import utils from '@/utils.js'
    import loginForm from './Login'
    import registrationForm from './Registration'

    export default {
        components: {
            loginForm,
            registrationForm
        },
        data() {
            return {
                state: {
                    mode: 'login'
                },
                modes: {
                    login: 'Вход',
                    registration: 'Регистрация',
                },
                loading: false,
                username: '',
                password: '',
                errorFB: '',
            }
        },
        methods: {
            // onSubmit(e) {
            //     e.preventDefault();
            //     this.errorFB = '';
            //     this.loading = true;
            //     ajax.reqAPI('profile/auth', {
            //         method: 'POST',
            //         body: {username: this.username, password: this.password},
            //         without_token: true,
            //     }).then(response => {
            //         stg.set('auth_token', response.data.token);
            //         return this.$store.dispatch('refreshProfile').then(() => this.$router.push({name: 'adm'}));
            //     }).catch(error => {
            //         this.errorFB = utils.retrieveApiErrorDsc(error);
            //         this.loading = false;
            //     });
            // },
        },
        beforeCreate() {
            if (this.$store.state.profile || stg.get('auth_token')) {
                this.$router.push({name: 'adm'});
            }
        },
    }
</script>

<style lang="scss">
    .auth {
        &__modes {
            display: flex;
            justify-content: space-between;
            &__item {
                color: #73818f;
                cursor: pointer;
                &_active {
                    color: black;
                    text-decoration: underline #4dbd74;
                }
            }
        }
    }
</style>
