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
        <el-card class="mb-5">
            <h3 class="text-black-50 m-0">{{headerText}}</h3>
            <hr>
            <el-row>
                <el-form label-position="top">
                    <el-col :span="11">
                        <el-form-item label="Название группы:">
                            <el-input v-model="group.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Преподаватель:">
                            <el-select style="width: 100%"
                                       filterable
                                       clearable
                                       remote
                                       placeholder="Выберите преподавателя"
                                       :remote-method="onTutorSearch"
                                       v-model="group.tutor_id"
                                       @change="onTutorChange">
                                <el-option v-for="item in tutors"
                                           :label="item.first_name"
                                           :key="item.id"
                                           :value-key="item.first_name"
                                           :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Описание:">
                            <el-input type="textarea" :autosize="{ minRows: 3 }" v-model="group.note"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" :offset="1">
                        <el-form-item label="Студенты:">
                            <el-select v-model="groupUsers"
                                       multiple
                                       @remove-tag="removeStudents"
                                       placeholder="Выберите студентов"
                                       style="width: 100%"
                            >
                                <el-option v-for="item in students"
                                           :key="item.id"
                                           :value-key="item.first_name"
                                           :label="item.first_name"
                                           :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <el-button type="success" @click="onSave">
                Сохранить
            </el-button>
        </el-card>
    </div>
</template>

<script>
    import {getGroup, postGroup, putGroup, putGroupStudents, removeGroupStudents} from './api'

    export default {
        data: () => {
            return {
                state: {
                    loading: true,
                    tutor_id: null,
                    group_id: null,
                    removedStudents: []
                },
                group: {},
                tutors: [],
                groupUsers: []
            }
        },
        async created() {
            await this.$store.dispatch('reloadUsers')
            this.tutors = this.$store.state.users.results
            this.users = this.$store.state.users.results
            if (this.id) {
                await getGroup(this.id).then(response => {
                    this.group = response.data
                    if (this.group.tutor_id) {
                        this.state.tutor_id = this.group.tutor_id
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
            students() {
                return this.$store.state.users.results ? this.$store.state.users.results.filter(item => item.id !== this.state.tutor_id) : []
            },
        },
        methods: {
            async onTutorSearch(query) {
                this.state.loading = true;
                if (query !== '') {
                    let pars = {
                        search: query
                    }
                    await this.$store.dispatch('reloadUsers', pars)
                    this.tutors = this.$store.state.users.results
                    this.state.loading = false
                } else {
                    await this.$store.dispatch('reloadUsers')
                    this.state.loading = false
                }
            },
            onTutorChange(val) {
                this.$store.dispatch('reloadUsers')
                this.tutors = this.$store.state.users.results
                this.state.tutor_id = val
                if (this.groupUsers.includes(val)) {
                    this.groupUsers.splice(this.groupUsers.indexOf(val), 1)
                }
            },
            removeStudents(id) {
                this.state.removedStudents.push(id)
            },
            async onSave() {
                this.state.loading = true
                let body = {
                    name: this.group.name,
                    note: this.group.note,
                    tutor_id: this.group.tutor_id ? this.group.tutor_id : 0
                }
                if (!this.id) {
                    await postGroup(body)
                        .then(response => {
                            this.state.group_id = response.data.id
                        })
                        .catch(response => {
                            this.state.loading = false;
                            this.$message.error(response.data.error_dsc)
                        })
                    await putGroupStudents(this.state.group_id, {usr_ids: [...this.groupUsers]})
                        .then(response => {
                            this.state.loading = false;
                            this.$message.success(this.id || this.state.group_id ? 'Группа успешно изменена' : 'Группа успешно создана')
                            this.$router.push({name: 'groups'})
                        })
                        .catch(response => {
                            this.state.loading = false;
                            this.$message.error(response.data.error_dsc)
                        })
                } else {
                    if (this.state.removedStudents.length) {
                        await removeGroupStudents(this.id, {usr_ids: [...this.state.removedStudents]})
                    }
                    await putGroup(this.id, body)
                        .then(response => {
                            this.state.loading = false;
                            this.state.group_id = response.data.id
                            this.$message.success(this.id ? 'Группа успешно изменена' : 'Группа успешно создана')
                            this.$router.push({name: 'groups'})
                        })
                        .catch(response => {
                            this.state.loading = false;
                            if (response.data) this.$message.error(response.data.error_dsc)
                        })
                    await putGroupStudents(this.id, {usr_ids: [...this.groupUsers]})
                        .then(response => {
                            this.state.loading = false;
                            this.$message.success(this.id ? 'Группа успешно изменена' : 'Группа успешно создана')
                            this.$router.push({name: 'groups'})
                        })
                        .catch(response => {
                            this.state.loading = false;
                            this.$message.error(response.data.error_dsc)
                        })
                }
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