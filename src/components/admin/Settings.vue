<template>
    <div v-loading="state.loading">
        <el-row>
            <el-col :span="8">
                <el-card style="position: relative">
                    <el-button v-if="state.disabled" @click="editUserInfo" style="position: absolute; right: 20px"
                               type="primary"
                               icon="el-icon-edit" circle></el-button>
                    <el-button v-else icon="el-icon-close" type="danger"
                               circle
                               @click="state.disabled = !state.disabled"
                               style="position: absolute; right: 20px"></el-button>
                    <el-upload
                            class="avatar-uploader"
                            :action="constants.MediaUrl + 'temp'"
                            :on-success="putProfileImage"
                            :before-upload="() => state.loading = true"
                            :show-file-list="false">
                        <img v-if="profile.avatar" class="avatar"
                             :src="utils.fmtMediaImageFit(profile.avatar, 300, 300)" >
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-form
                            :disabled="state.disabled"
                            label-position="top"
                            ref="form"
                            :model="profile"
                            :rules="rules"
                    >
                        <el-form-item prop="last_name" label="Фамилия:">
                            <el-input v-model="profile.last_name"></el-input>
                        </el-form-item>
                        <el-form-item prop="first_name" label="Имя:">
                            <el-input v-model="profile.first_name"></el-input>
                        </el-form-item>
                        <el-form-item prop="username" label="Email:">
                            <el-input v-model="profile.username"></el-input>
                        </el-form-item>
                        <el-form-item prop="newPassword" label="Новый пароль:">
                            <el-input v-model="profile.newPassword"></el-input>
                        </el-form-item>
                        <el-form-item prop="repeatPassword" label="Повторите пароль:">
                            <el-input v-model="profile.repeatPassword"></el-input>
                        </el-form-item>
                        <el-button @click="checkValid" v-if="!state.disabled" type="primary">Сохранить</el-button>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import constants from "@/constants";
    import ajax from "@/ajax";
    import utils from '@/utils'
    import {putUser} from './users/api'


    let rule = {required: true, message: 'Это поле не может быть пустым', trigger: 'blur'}
    export default {

        data() {
            return {
                constants,
                utils,
                state: {
                    loading: true,
                    disabled: true,
                },
                profile: {
                    avatar: ''
                },
                rules: {
                    last_name: [
                        rule
                    ],
                    first_name: [
                        rule,
                    ],
                    username: [
                        rule,
                    ],
                    newPassword: [
                        {min: 6, message: 'Пароль должен содержать больше 6 символов', trigger: 'blur'}
                    ],
                    repeatPassword: [
                        {min: 6, message: 'Пароль должен содержать больше 6 символов', trigger: 'blur'}
                    ],
                },
                foods: [
                    {text: 'Select One', value: null},
                    'Carrots', 'Beans', 'Tomatoes', 'Corn'
                ],
                show: true
            }
        },
        created() {
            this.profile = this.$store.state.profile
            this.state.loading = false
        },
        // computed: {
        //     avatar() {
        //         return this.profile.avatar ? constants.MediaUrl + this.profile.avatar : 'img/default_avatar.jpg'
        //     },
        // },
        methods: {
            putProfileImage(response) {
                // this.state.loading = true
                this.profile.avatar = response.path
                let req = ajax.reqAPI(`usrs/${this.profile.id}`, {
                    method: 'PUT',
                    body: {
                        avatar: this.profile.avatar,
                    },
                });
                req.then(response => {
                    this.state.loading = false
                    console.log(response);
                })
                req.catch(err => {
                    this.state.loading = false
                    this.$message.error('Произошла ошибка')
                    console.log(err);
                })
            },
            editUserInfo() {
                this.state.disabled = false
            },

            checkValid() {
                let validPassword = this.profile.newPassword === this.profile.repeatPassword
                let body = {
                    last_name: this.profile.last_name,
                    first_name: this.profile.first_name,
                    username: this.profile.username,
                }
                if (!validPassword) this.$message.error('Пароли не совпадают')
                if (validPassword && this.profile.newPassword) {
                    this.$refs.form.validate((valid) => {
                        if (valid) {
                            this.state.loading = true
                            putUser(this.profile.id, body)
                                .then(response => {
                                    this.state.loading = false
                                    this.state.disabled = true
                                    this.$message.success('Данные успешно сохранены!');
                                })
                                .catch(err => {
                                    this.state.loading = false
                                    this.state.disabled = true
                                    this.$message.error('Ошибка при сохранении')
                                })
                        }
                    })
                } else {
                    this.state.loading = true
                    putUser(this.profile.id, body)
                        .then(response => {
                            this.state.loading = false
                            this.state.disabled = true
                            this.$message.success('Данные успешно сохранены!');
                        })
                }
            }
        }
    }
</script>

<style>
    .avatar-uploader {
        text-align: center;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        padding: 5px;
        width: 178px;
        height: 178px;
        display: block;
    }
</style>