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
        <el-steps align-center :active="active" class="m-5" finish-status="success">
            <el-step title="Опишите группу"></el-step>
            <el-step title="Назначьте студентов и преподавателя"></el-step>
            <el-step title="Сохраните"></el-step>
        </el-steps>
        <el-card>
            <el-row>
                <el-col v-if="active !== 1" :span="active === 2 ? 11 : 24">
                    <div slot="header">
                        <h3 class="text-black-50 m-0">{{headerText}}</h3>
                    </div>
                    <el-form label-position="top">
                        <el-form-item label="Название группы:">
                            <el-input v-model="group.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Заметки:">
                            <el-input type="textarea" :autosize="{ minRows: 3 }" v-model="group.note"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col v-if="active !== 0" :span="active === 2 ? 12 : 24" :offset="active === 2 ? 1 : 0 ">
                    <el-transfer
                            :aria-disabled="true"
                            filterable
                            @change="onUsersListChange"
                            :titles="['Все пользователи', 'Группа']"
                            v-model="groupUsers"
                            :data="users"
                            @right-check-change="onGroupListChange">
                        <el-button class="transfer-footer"
                                   round type="primary"
                                   slot="right-footer"
                                   size="small"
                                   @click="setTutor"
                        >Назначить преподавателем</el-button>
                    </el-transfer>
                </el-col>
            </el-row>
            <el-button @click="prev">Назад</el-button>
            <el-button v-if="active !== 2" @click="next">Далее</el-button>
            <el-button v-if="active === 2" type="success" @click="onSave">
                Сохранить
            </el-button>
        </el-card>
    </div>
</template>

<script>
    import {getGroup, putGroup, postGroup, putUserGroup, setGroupTutor} from './api'

    export default {
        data: () => {
            return {
                state: {
                    loading: true,
                    tutor_id: [],
                    group_id: null
                },
                group: {},
                active: 0,
                users: [],
                groupUsers: []
            }
        },
        async created() {
            await this.$store.dispatch('reloadUsers').then(() => {
                this.users = this.$store.state.users.map(item => {
                    return {key: item.id, label: item.first_name, disabled: false}
                })
            })
            if (this.id) {
                await getGroup(this.id).then(response => {
                    this.group = response.data

                    this.groupUsers = this.group.students.map(item => {
                        return item.id
                    })
                })
            }
            this.state.loading = false
        },
        computed: {
            id() {
                return this.state.group_id ? this.state.group_id : parseInt(this.$route.params.groups_id) || 0;
            },
            headerText() {
                return this.id ? 'Изменить группу' : 'Создать группу';
            },
        },
        methods: {
            setTutor () {
                if (this.state.tutor_id.length === 1) {
                    let body = {
                        tutor_id: this.state.tutor_id[0]
                    }
                    setGroupTutor(this.id, body).then(response => {
                        this.$message.success('Преподаватель успешно назначен')
                        console.log(response, 'Назначили учителя');
                    })
                } else if (this.state.tutor_id.length < 1) {
                    this.$message.error('Выберите преподавателя')
                } else  {
                    this.$message.error('Нельзя назначить больше 1 преподавателя')
                }
            },
            prev() {
                if (this.active-- < 0) this.active = 0;
            },
            next() {
                if (this.active === 0) {
                    let req
                    let body = {
                        name: this.group.name,
                        note: this.group.note,
                    }
                    if(this.id) {
                        req = putGroup(this.id, body)
                    } else {
                        req = postGroup(body)
                    }
                    req.then(response => {
                        this.state.group_id = response.data.id
                    })
                }
                if (this.active++ > 2) this.active = 0;
            },
            onGroupListChange(keys){
                this.state.tutor_id = keys;
            },
            onUsersListChange(){
                let body = {
                    usr_ids: [...this.groupUsers]
                }
                putUserGroup(this.id, body).then(response => {
                    console.log('check', response);
                })
            },
            onSave() {
                this.state.loading = true
                let req
                let body = {
                    name: this.group.name,
                    note: this.group.note,
                }
                if(this.id) {
                    req = putGroup(this.id, body)
                } else {
                    req = postGroup(body)
                }
                req.then(resposne => {
                    this.state.loading = false;
                    this.$message.success( this.id ? 'Группа успешно изменена' : 'Роль успешно создана')
                    this.$router.push({name: 'groups'})
                }).catch(err => {
                    console.log(err);
                    this.state.loading = false
                    this.$message.error('Возникла ошибка')
                })
            }
        }
    }
</script>


<style lang="scss">
    .el-transfer {
        text-align: center;
        &-panel {
            text-align: left;
            width: 40%;
            margin-bottom: 10px;
            &__footer {
                text-align: center;
            }
        }
    }
    /*.el-transfer-panel {*/
        /*width: 45%;*/
    /*}*/
    /*.el-transfer-panel .el-transfer-panel__footer {*/
        /*text-align: center;*/
    /*}*/
</style>