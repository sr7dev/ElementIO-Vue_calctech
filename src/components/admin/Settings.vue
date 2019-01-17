<template>
    <div v-loading="state.loading">
        <el-row>
            <el-col :span="8">
                <el-card style="position: relative">
                    <el-button @click="editUserInfo" style="position: absolute; right: 20px" type="primary"
                               icon="el-icon-edit" circle></el-button>
                    <el-upload
                            class="avatar-uploader"
                            :action="constants.MediaUrl + 'temp'"
                            :on-success="putProfileImage"
                            :show-file-list="false">
                        <img class="avatar" :src="avatar">
                        <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
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

    let rule = {required: true, message: 'Это поле не может быть пустым', trigger: 'blur'}
    export default {

        data() {
            return {
                constants,
                state: {
                    loading: true,
                    disabled: true,
                },
                profile: {},
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
                        {min: 3, max: 5, message: 'Пароль должен содержать больше 6 символов', trigger: 'blur'}
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
            console.log(this.profile);
        },
        computed: {
            avatar() {
                return this.profile.avatar ? this.profile.avatar : 'img/default_avatar.jpg'
            },
        },
        methods: {
            putProfileImage(response){
                console.log(response);
                this.profile.avatar = response.path
                let req = ajax.reqAPI(`profile/${this.profile.id}`, {method: 'PUT', body: {avatar : this.profile.avatar}});
                req.then(response => {
                    console.log(response);
                })
            },
            editUserInfo() {
                this.state.disabled = false
            },
            checkValid() {
                if (this.profile.newPassword !== this.profile.repeatPassword) {
                    this.$message.error('Пароли не совпадают')
                } else {
                    this.$refs.form.validate((valid) => {
                        if (valid) {
                            this.$message.success('Данные успешно сохранены!');
                            this.state.disabled = true
                        } else {
                            this.$message.error('Ошибка при сохранении')
                            return false;
                        }
                    });
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