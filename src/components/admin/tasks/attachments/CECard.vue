<template>
    <el-card class="animated fadeIn mb-5">
        <el-form>
            <div class="px-0 pb-2">
                <el-row style="width: 100%">
                    <el-col :span="8">
                        <el-form-item label="Тип">
                            <el-radio-group v-model="data.type_id">
                                <el-radio-button v-for="item in $store.state.attachment_types"
                                                 :label="item.id">
                                    {{item.name}}
                                </el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4" :offset="2">
                        <el-form-item label="Порядковый номер">
                            <el-input type="number" pattern="\d*" v-model="data.ord"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col v-if="data.type_id === constants.AttachmentTypeText" :span="8">
                        <el-form-item label="Текст">
                            <el-input type="textarea" :autosize="{minRows: 7}" v-model="data.v" :disabled="loading"/>
                        </el-form-item>
                    </el-col>
                    <el-col v-if="data.type_id === constants.AttachmentTypeImage" :span="10">
                        <el-form-item label="Картина">
                            <ImgInput v-model="data.v" :iw="700"></ImgInput>
                        </el-form-item>
                    </el-col>
                    <el-col v-if="data.type_id === constants.AttachmentTypeVideo" :span="8">
                        <el-form-item label="Ссылка на видео">
                            <el-input type="text" v-model="data.v"/>
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
            </div>
            <div>
                <div class="d-flex align-items-center">
                    <el-button type="success" @click.prevent="onSubmit" :disabled="loading">
                        {{data.id ? 'Изменить' : 'Создать'}}
                    </el-button>
                    <el-button :type="data.id ? 'warning' : 'primary'" :disabled="loading" class="ml-2"
                               @click.prevent="onDeleteClick">
                        {{data.id ? 'Удалить' : 'Отмена'}}
                    </el-button>
                </div>
            </div>
        </el-form>
    </el-card>
</template>

<script>
    import _ from "lodash";
    import constants from "../../../../constants"
    import ajax from "../../../../ajax"
    import utils from "../../../../utils"
    import ImgInput from '@/components/common/ImgInput'

    export default {
        props: ['taskId', 'sd'],
        components: {ImgInput},
        data() {
            return {
                ld: _, constants, utils,
                loading: false,
                failFB: '',
                data: null,
            };
        },
        // watch: {
        //   'data.type_id'() {
        //     this.data.v = '';
        //   },
        // },
        methods: {
            emptyData() {
                return {
                    id: 0,
                    type_id: constants.AttachmentTypeText,
                    v: '',
                    ord: 0,
                };
            },
            onSubmit() {
                this.loading = true;
                this.failFB = '';
                let req = null;
                if (this.data.id) {
                    req = ajax.reqAPI(`tasks/${this.taskId}/attachments/${this.data.id}`, {
                        method: 'PUT',
                        body: this.data
                    });
                } else {
                    req = ajax.reqAPI(`tasks/${this.taskId}/attachments`, {method: 'POST', body: this.data});
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
                        ajax.reqAPI(`tasks/${this.taskId}/attachments/${this.data.id}`, {method: 'DELETE'}).then(response => {
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
