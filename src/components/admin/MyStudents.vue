<template>
    <div v-loading="state.loading">
        <el-container>
            <el-row>
                <el-col>
                    <el-button class="mb-3" type="primary" @click="$router.back()">
                        <i class="icon-arrow-left mr-2"></i>{{'Отмена'}}
                    </el-button>
                </el-col>
            </el-row>
        </el-container>
        <el-card class="mb-5">
            <h3 class="text-black-50 m-0">{{'Мои группы'}}</h3>
            <hr>
            <el-row>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="group in myGroups" :title="group.name" :name="group.id">
                        <el-row class="students-list">
                            <el-col v-if="group.students.length" style="text-align: center" :span="4">
                                <h3 class="text-black-50 m-0">Студенты</h3>
                                <br>
                                <el-row v-for="student in group.students" class="students-list__item">
                                    <el-col class="students-list__item__info">
                                        <el-card>
                                            <img :src="utils.fmtMediaImageFit(student.avatar, 300, 300) || 'img/default_avatar.jpg'"
                                                 class="img-avatar" :alt="student.first_name"/>
                                            <div>{{student.first_name}}</div>
                                            <div>{{student.last_name}}</div>
                                        </el-card>
                                        <hr>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col style="text-align: center" :span="17" :offset="3">
                                <h3 class="text-black-50 m-0">Назначенные задания</h3>
                                <br>
                                <el-card>
                                    <el-table :data="group.tasks">
                                        <el-table-column
                                                label="#"
                                                type="index"
                                                prop="id"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                                label="Название"
                                                prop="title"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>
                            </el-col>
                        </el-row>

                    </el-collapse-item>
                </el-collapse>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import utils from '@/utils'

    export default {
        data: () => {
            return {
                utils,
                state: {
                    loading: false
                },
                activeNames: []
            }
        },
        computed: {
            myGroups() {
                return this.$store.state.profile.students.groups
            },
        },
        methods: {
            onSave() {
            },
            handleChange() {
            }
        }
    }
</script>

<style lang="scss">
    .students-list {
        &__item {
            width: 100%;
            &__info {
                text-align: center;
                img {
                    height: 150px;
                    width: 150px;
                }
            }
            &__fio {
                margin-left: 20px;
            }
        }
    }

    .el-collapse-item__header:hover {
        color: #72c02c;
    }
</style>