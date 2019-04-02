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
            <el-form :model="user" :rules="rules" ref="ruleForm" label-position="top">
                <el-form-item prop="first_name" label="Имя:">
                    <el-input v-model="user.first_name"></el-input>
                </el-form-item>
                <el-form-item prop="last_name" label="Фамилия:">
                    <el-input v-model="user.last_name"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="Email:">
                    <el-input v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item :prop="id ? '' : 'newPassword' " label="Пароль:">
                    <el-input v-model="user.newPassword"></el-input>
                </el-form-item>
                <el-form-item prop="roles" label="Роль:">
                    <el-select v-model="user.roles" multiple style="width: 100%">
                        <el-option v-for="item in stateRoles"
                                   :label="item.name"
                                   :key="item.id"
                                   :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-button type="success" @click="checkValid"> <!-- submit -->
                    {{id ? 'Изменить' : 'Создать'}}
                </el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {getUser, postUser, putUser, putUserPassword,} from './api'

    let rule = {required: true, message: 'Это поле не может быть пустым', trigger: 'blur'}

    export default {
        data: () => {
            return {
                state: {
                    loading: true,
                    usr_ids: []
                },
                rules: {
                    last_name: [
                        rule
                    ],
                    first_name: [
                        rule,
                    ],
                    username: [
                        {type: 'email', message: 'Пожалуйста, введите корректный email', trigger: ['blur', 'change']},
                        rule,
                    ],
                    newPassword: [
                        rule
                    ],
                    roles: [
                        rule,
                    ],
                },
                user: {}
            }
        },
        async created() {
            await this.$store.dispatch('reloadRoles')
            if (this.id) {
                await getUser(this.id).then(response => {
                    this.user = response.data
                    this.user.roles = response.data.roles.map(role => role.id)
                })
            }
            this.state.loading = false
        },
        computed: {
            id() {
                return parseInt(this.$route.params.users_id) || 0;
            },
            headerText() {
                return this.id ? 'Изменить пользователя' : 'Создать пользователя';
            },
            stateRoles() {
                return this.$store.state.roles
            }
        },
        methods: {
            checkValid() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.onSave()
                    } else {
                        this.$message.error('Заплоните все поля')
                        return false;
                    }
                });
            },
            async onSave() {
                this.state.loading = true
                let req
                let body = {
                    first_name: this.user.first_name,
                    last_name: this.user.last_name,
                    username: this.user.username,
                    role_ids: this.user.roles,
                    password: this.user.newPassword
                }
                if (this.user.newPassword && this.id) { // смена пароля существующего пользователя
                    req = putUserPassword(this.id, {new_password: this.user.newPassword})
                }
                if (this.id) { // обновление данных существующено пользователя
                    req = putUser(this.id, body)
                } else { // post нового пользователя
                    req = postUser(body)
                }
                await req.then(() => {
                    this.state.loading = false
                    this.$message.success(this.id ? 'Пользователь успешно изменен' : 'Пользаватель успешно создан')
                    this.$router.push({name: 'users'})
                }).catch(response => {
                    this.state.loading = false
                    this.$message.error(response.data.error_dsc)
                })
            }
        }
    }
</script>


<style scoped>

</style>