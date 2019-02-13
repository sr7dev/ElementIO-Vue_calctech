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
            <h3 class="text-black-50 m-0">{{'Мои студенты'}}</h3>
            <hr>
            <el-row>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item v-for="group in myGroups" :title="group.name" :name="group.id">
                        <div class="students-list">
                            <div v-for="student in group.students" class="students-list__item">
                                <div class="students-list__item__avatar">
                                    <img :src="utils.fmtMediaImageFit(student.avatar, 300, 300) || 'img/default_avatar.jpg'"
                                         class="img-avatar" :alt="student.first_name"/>
                                </div>
                                <span class="students-list__item__fio">
                                    <div>{{student.first_name}}</div>
                                    <div>{{student.last_name}}</div>
                                </span>
                            </div>
                        </div>
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
            }
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
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;
            margin: 20px;
            &__avatar {
                width: 150px;
                height: 150px;
                img {
                    height: 100%;
                }
            }
            &__fio {
                margin-left: 20px;
            }
        }
    }
</style>