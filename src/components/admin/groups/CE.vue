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
            <el-step title="Опишите группу и назначьте преподавателя"></el-step>
            <el-step title="Назначьте студентов"></el-step>
            <el-step title="Сохраните"></el-step>
        </el-steps>
        <el-card class="mb-5">
            <h3 class="text-black-50 m-0">{{headerText}}</h3>
            <hr>
            <el-row>
                <el-col v-if="active !== 1" :span="11">
                    <el-form label-position="top">
                        <el-form-item label="Название группы:">
                            <el-input v-model="group.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Преподаватель">
                            <el-select style="width: 100%" v-model="group.tutor_id" @change="onTutorChange">
                                <el-option v-for="item in users" :label="item.label" :value="item.key"></el-option>
                            </el-select>
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
                            :right-default-checked="state.tutor_id"
                            @right-check-change="onGroupListChange">
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
    import {getGroup, postGroup, putGroup, putUserGroup} from './api'

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
            await this.$store.dispatch('reloadUsers')
            this.users = this.$store.state.users.results.map(item => {
                return {key: item.id, label: item.first_name, disabled: false}
            })
            if (this.id) {
                await getGroup(this.id).then(response => {
                    this.group = response.data
                    if (this.group.tutor_id) {
                        this.state.tutor_id.push(this.group.tutor_id)
                        this.users.forEach(item => {
                            if (item.key === this.group.tutor_id) item.disabled = true
                        })
                    }
                    this.groupUsers = this.group.students.map(item => {
                        if (item.id !== this.group.tutor_id) return item.id
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
            prev() {
                if (this.active-- < 0) this.active = 0;
            },
            next() {
                if (this.active === 0) {
                    let req
                    let body = {
                        name: this.group.name,
                        note: this.group.note,
                        tutor_id: this.group.tutor_id
                    }
                    this.state.tutor_id.push(this.group.tutor_id)
                    if (this.id) {
                        req = putGroup(this.id, body)
                    } else {
                        req = postGroup(body)
                    }
                    req.then(response => {
                        if (response.data !== null) this.state.group_id = response.data.id
                        this.users.forEach(item => {
                            if (item.key === this.state.tutor_id[0]) item.disabled = true
                        })
                    })
                }
                if (this.active++ > 2) this.active = 0;
            },
            onTutorChange(val){
                this.state.tutor_id[0] = val
                this.users.forEach(item => {
                    item.disabled = item.key === val;
                })
                this.groupUsers = this.groupUsers.filter(item => item !== val)
                this.onUsersListChange()
            },
            onGroupListChange(keys) {
                this.state.tutor_id = keys;
            },
            onUsersListChange() {
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
                    tutor_id: this.group.tutor_id
                }
                if (this.id) {
                    req = putGroup(this.id, body)
                } else {
                    req = postGroup(body)
                }
                req.then(resposne => {
                    this.state.loading = false;
                    this.$message.success(this.id ? 'Группа успешно изменена' : 'Роль успешно создана')
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
</style>