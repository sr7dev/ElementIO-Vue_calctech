<template>
    <div v-loading="state.loading">
        <el-container>
            <el-row>
                <el-col>
                    <el-button class="mb-3" type="primary" @click="$router.back()">
                        <i class="icon-arrow-left mr-2"></i>{{id ? 'Назад' : 'Отмена'}}
                    </el-button>
                </el-col>
            </el-row>
        </el-container>
        <el-card>
            <div slot="header">
                <h3 class="text-black-50 m-0">{{headerText}}</h3>
            </div>
            <el-form label-position="top">
                <el-form-item label="Имя:">
                    <el-input v-model="user.first_name"></el-input>
                </el-form-item>
                <el-form-item label="Фамилия:">
                    <el-input v-model="user.last_name"></el-input>
                </el-form-item>
                <el-form-item label="Никнейм:">
                    <el-input v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item label="Пароль:">
                    <el-input v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item label="Роль:">
                    <el-select v-model="user.role">
                        <el-option v-for="item in roles"
                                   :label="item.name"
                                   :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-button type="success" @click="onSave"> <!-- submit -->
                    {{id ? 'Изменить' : 'Создать'}}
                </el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {getUser, putUser, postUser, putUserRole} from './api'

    export default {
        data: () => {
            return {
                state: {
                    loading: false
                },
                user: {}
            }
        },
        created() {
            this.$store.dispatch('reloadRoles')
            if (this.id) {
                getUser(this.id).then(response => {
                    console.log(response);
                })
            }
        },
        computed: {
            id() {
                return parseInt(this.$route.params.users_id) || 0;
            },
            headerText() {
                return this.id ? 'Изменить пользователя' : 'Создать пользователя';
            },
            roles() {
                return this.$store.state.roles
            }
        },
        methods: {
            onSave() {
                this.state.loading = true
                let req
                let body = {
                    first_name: this.user.first_name,
                    last_name: this.user.last_name,
                    username: this.user.username,
                    password: this.user.password
                }
                if(this.id) {
                    req = putUser(this.id, body)
                } else {
                    req = postUser(body).then(response => {
                        let role_id = this.user.role
                        let body = {
                            usr_ids: [response.data.id]
                        }
                        putUserRole(role_id, body).then(response => {
                            console.log(response);
                        })
                    })
                }
                req.then(resposne => {
                    this.state.loading = false;
                    this.$message.success( this.id ? 'Роль успешно изменена' : 'Роль успешно создана')
                    this.$router.push({name: 'users'})
                }).catch(err => {
                    console.log(err);
                    this.state.loading = false
                    this.$message.error('Возникла ошибка')
                })
            }
        }
    }
</script>


<style scoped>

</style>