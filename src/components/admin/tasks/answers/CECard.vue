<template>
    <el-card class="animated fadeIn mb-3">
        <el-form :disabled="disabled">
            <div class="px-0 pb-2">
                <el-container>
                    <el-row style="width: 100%" type="flex" justify="start">
                        <el-col :span="6" class="d-flex align-items-center pb-3 pb-lg-0">
                            <el-switch v-model="data.is_correct"
                                       active-text="Верный"
                                       inactive-text="Не верный"
                                       active-color="#72c02c"
                                       inactive-color="#ff4949"
                                       :disabled="loading"/>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="Текст ответа">
                                <el-input type="textarea" :autosize="{minRows: 3}" v-model="data.txt"
                                          :disabled="loading" no-resize/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :offset="2">
                            <el-form-item label="Картинка">
                                <ImgInput v-model="data.img"></ImgInput>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--<el-row v-if="failFB">-->
                    <!--<el-col>-->
                    <!--<b-alert variant="danger" show>-->
                    <!--<i class="fa fa-warning mr-3"></i>{{failFB}}-->
                    <!--</b-alert>-->
                    <!--</el-col>-->
                    <!--</el-row>-->
                </el-container>
            </div>
            <!--<b-card-footer>-->
            <div class="d-flex align-items-center">
                <el-button type="success" @click.prevent="onSubmit" :disabled="loading">
                    {{data.id ? 'Изменить' : 'Сохранить'}}
                </el-button>
                <el-button :type="data.id ? 'warning' : 'primary'" :disabled="loading" class="ml-2"
                           @click.prevent="onDeleteClick">
                    {{data.id ? 'Удалить' : 'Отмена'}}
                </el-button>
                <!--<div v-if="loading" class="ml-2">-->
                <!--<i class="spnr"></i>-->
                <!--</div>-->
            </div>
            <!--</b-card-footer>-->
        </el-form>
    </el-card>
</template>

<script>
    import _ from "lodash";
    import constants from "../../../../constants"
    import ajax from "../../../../ajax"
    import utils from "../../../../utils"
    import {Switch as cSwitch} from '@coreui/vue'
    import ImgInput from '@/components/common/ImgInput'

    export default {
        props: ['taskId', 'sd', 'disabled'],
        components: {cSwitch, ImgInput},
        data() {
            return {
                ld: _, constants, utils,
                loading: false,
                failFB: '',
                data: null,
            };
        },
        computed: {
            userPerms() {
                return this.$store.state.profile.perms
            },
            moderator() {
                return this.userPerms.includes('task-moderate') || this.userPerms.includes('*')
            }
        },
        methods: {
            emptyData() {
                return {
                    id: 0,
                    is_correct: false,
                    txt: '',
                    img: '',
                };
            },
            onSubmit() {
                this.loading = true;
                this.failFB = '';
                let req = null;
                if (this.data.id) {
                    req = ajax.reqAPI(`tasks/${this.taskId}/answers/${this.data.id}`, {method: 'PUT', body: this.data});
                } else {
                    req = ajax.reqAPI(`tasks/${this.taskId}/answers`, {method: 'POST', body: this.data});
                }
                req.then(response => {
                    if (!this.data.id && response.data.id) {
                        this.data.id = response.data.id;
                    }
                    this.$emit('updated', _.assign({}, this.data));
                    this.loading = false;
                }).catch(error => {
                    if (error.status === 401) {
                        this.$store.commit('setProfile', null);
                        this.$router.push({name: 'auth'});
                    } else {
                        this.loading = false;
                        this.failFB = utils.retrieveApiErrorDsc(error);
                    }
                });
            },
            onDeleteClick() {
                if (!this.data.id) {
                    this.$emit('deleted');
                    return;
                }
                this.$store.commit('confirm', {
                    msg: 'Вы уверены что хотите удалить эту запись?',
                    okCb: () => {
                        this.loading = true;
                        this.failFB = '';
                        ajax.reqAPI(`tasks/${this.taskId}/answers/${this.data.id}`, {method: 'DELETE'}).then(response => {
                            this.$emit('deleted');
                        }).catch(error => {
                            if (error.status === 401) {
                                this.$store.commit('setProfile', null);
                                this.$router.push({name: 'auth'});
                            } else {
                                this.loading = false;
                                this.failFB = utils.retrieveApiErrorDsc(error);
                            }
                        });
                    },
                });
            },
        },
        created() {
            this.data = _.assign({}, this.emptyData(), this.sd);
        },
    }
</script>
