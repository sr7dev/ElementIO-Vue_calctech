<template>
    <div v-loading="state.loading">
        <el-row>
            <el-col md="3">
                <div class="profilePicture">
                    <img :src="utils.fmtMediaImageFit(profile.avatar, 300, 300) || 'img/default_avatar.jpg'" alt="">
                    <div class="changeIcon bg-success" v-if="state.disabled" @click="editUserInfo">
                        <i class="fa fa-edit"></i>
                    </div>
                    <div class="changeIcon bg-danger" v-else @click="cancelChanges">
                        <i class="fa fa-close "></i>
                    </div>
                     <my-upload field="file"
                    langType="ru"
                    v-model="show"
                    :width="300"
                    :height="300"
                    @crop-upload-success="putProfileImage"
                    :params="params"
                    :url="constants.MediaUrl + 'temp'"
                    img-format="png"></my-upload>
                    <b-button variant="success" block  @click="toggleShow">Загрузитьаватар</b-button>
                </div>

                <!-- <el-card style="position: relative">
                    <el-button v-if="state.disabled" @click="editUserInfo" style="position: absolute; right: 20px"
                               type="primary"
                               icon="el-icon-edit" circle></el-button>
                    <el-button v-else icon="el-icon-close" type="danger"
                               circle
                               @click="cancelChanges"
                               style="position: absolute; right: 20px"></el-button>
                    <my-upload field="file"
                               langType="ru"
                               v-model="show"
                               :width="300"
                               :height="300"
                               @crop-upload-success="putProfileImage"
                               :params="params"
                               :url="constants.MediaUrl + 'temp'"
                               img-format="png"></my-upload>
                    <div style="width: 200px; margin: 0 auto; text-align: center">
                        <img class="avatar"
                             :src="utils.fmtMediaImageFit(profile.avatar, 300, 300) || 'img/default_avatar.jpg'">
                        <el-button style="margin: 10px" type="primary" size="small" @click="toggleShow">Загрузить
                            аватар
                        </el-button>
                    </div> -->

                    <!--<el-upload-->
                    <!--class="avatar-uploader"-->
                    <!--:action="constants.MediaUrl + 'temp'"-->
                    <!--:on-success="putProfileImage"-->
                    <!--:before-upload="() => state.loading = true"-->
                    <!--:show-file-list="false">-->
                    <!--<img v-if="profile.avatar" class="avatar"-->
                    <!--:src="utils.fmtMediaImageFit(profile.avatar, 300, 300)" >-->
                    <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                    <!--</el-upload>-->
                    <!-- <el-form
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
                </el-card> -->
            </el-col>
            <el-col md="9">
                <b-tabs>
                    <b-tab title="some title here" active>
                        <!-- <el-form
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
                        </el-form> -->
                        <b-form
                            ref="form"                       
                        >
                           <b-container>
                               <el-row>
                                   <el-col md="6">
                                        <b-form-group
                                            label="Фамилия:"
                                            
                                        >
                                            <b-form-input
                                            :disabled="state.disabled"
                                            type="email"
                                            v-model="profile.last_name"
                                            required
                                            placeholder="Enter email" />
                                        </b-form-group>
                                   </el-col>
                                   <el-col md="6">
                                        <b-form-group
                                            label="Фамилия:"
                                            
                                        >
                                            <b-form-input
                                            :disabled="state.disabled"
                                            type="email"
                                            v-model="profile.last_name"
                                            required
                                            placeholder="Enter email" />
                                        </b-form-group>
                                   </el-col>
                                    <el-col md="6">
                                        <b-form-group
                                            label="Фамилия:"
                                            
                                        >
                                            <b-form-input
                                            :disabled="state.disabled"
                                            type="email"
                                            v-model="profile.last_name"
                                            required
                                            placeholder="Enter email" />
                                        </b-form-group>
                                   </el-col>
                                    <el-col md="6">
                                        <b-form-group
                                            label="Фамилия:"
                                            
                                        >
                                            <b-form-input
                                            :disabled="state.disabled"
                                            type="email"
                                            v-model="profile.last_name"
                                            required
                                            placeholder="Enter email" />
                                        </b-form-group>
                                   </el-col>
                                    <el-col md="6">
                                        <b-form-group
                                            label="Фамилия:"
                                            
                                        >
                                            <b-form-input
                                            :disabled="state.disabled"
                                            type="email"
                                            v-model="profile.last_name"
                                            required
                                            placeholder="Enter email" />
                                        </b-form-group>
                                   </el-col>

                                   <el-col md="6">
                                        <b-form-group
                                            label="Имя:"

                                        >
                                            <b-form-input
                                            :disabled="state.disabled"
                                            type="email"
                                            v-model="profile.first_name"
                                            required
                                            placeholder="Enter email" />
                                        </b-form-group>
                                   </el-col>
                                   <el-col v-if="!state.disabled">
                                           <b-button variant="primary m-1"  >Сохранить</b-button>
                                           <b-button class="m-1">cancel </b-button>
                                    </el-col>
                               </el-row>
                           </b-container>
                        </b-form>
                    </b-tab>
                </b-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import constants from "@/constants";
    import ajax from "@/ajax";
    import utils from '@/utils'
    import {putUser} from './users/api'
    import myUpload from 'vue-image-crop-upload';


    let rule = {required: true, message: 'Это поле не может быть пустым', trigger: 'blur'}
    export default {
        components: {
            'my-upload': myUpload
        },
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
                params: {
                    name: 'file'
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
                show: false
            }
        },
        created() {
            this.profile = {...this.$store.state.profile}
            this.state.loading = false
        },
        methods: {
            toggleShow() {
                this.show = !this.show;
            },
            cancelChanges() {
                this.profile = this.$store.state.profile
                this.state.disabled = true
            },
            async putProfileImage(response) {
                this.state.loading = true
                this.profile.avatar = response.path
                let req = ajax.reqAPI(`usrs/${this.profile.id}`, {
                    method: 'PUT',
                    body: {
                        avatar: this.profile.avatar,
                    },
                });
                await req.then(response => {
                    this.$store.dispatch('refreshProfile')
                    this.state.loading = false
                })
                req.catch(err => {
                    this.state.loading = false
                    this.$message.error('Произошла ошибка')
                    console.log(err);
                })
                this.state.loading = false
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

<style lang="scss">
.profilePicture{
    position:relative;
    margin-bottom: 20px;
    img{
        width: 100%;
        margin-bottom: 15px;
    }
    .changeIcon{
        cursor: pointer;
        position:absolute;
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        text-align: center;
        line-height: 40px;
        transition: .3s;
        &:hover{
            opacity: .7;
        }
        i{
            color: #fff;
            font-size: 18px;
        }
    }
}
    .vue-image-crop-upload .vicp-wrap .vicp-operate a {
        color: $app-color-green1;
    }

    .vue-image-crop-upload .vicp-wrap .vicp-success {
        color: $app-color-green1;
    }

    .avatar {
        width: 200px;
        height: 200px;
        display: block;
        object-fit: none;
    }

</style>