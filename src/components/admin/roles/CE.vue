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
        <el-card>
            <div slot="header">
                <h3 class="text-black-50 m-0">{{headerText}}</h3>
            </div>
            <el-form label-position="top">
                <el-form-item label="Роль:">
                    <el-input v-model="role.name"></el-input>
                </el-form-item>
                <el-form-item label="Полномочия:">
                    <el-select v-model="role.perms"
                               multiple
                               placeholder="Выберите полномочия"
                               style="width: 100%"
                    >
                        <el-option v-for="item in perms"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-button type="success" @click="onSave"> <!-- submit -->
                    {{id ? 'Изменить' : 'Создать'}}
                </el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {getRole, postRole, putRole} from './api'
    import perms from './perms'

    export default {
        data: () => {
            return {
                perms,
                state: {
                    loading: false
                },
                role: {
                    name: '',
                    perms: []
                }
            }
        },
        created() {
            if (this.id) {
                getRole(this.id).then(response => {
                    this.role = response.data
                })
            }
        },
        computed: {
            id() {
                return parseInt(this.$route.params.roles_id) || 0;
            },
            headerText() {
                return this.id ? 'Измененить роль' : 'Создать роль';
            },
        },
        methods: {
            onSave() {
                this.state.loading = true
                let req
                let body = {
                    name: this.role.name,
                    perms: this.role.perms
                }
                if(this.id) {
                    req = putRole(this.id, body)
                } else {
                    req = postRole(body)
                }
                req.then(resposne => {
                    this.state.loading = false;
                    this.$message.success( this.id ? 'Роль успешно изменена' : 'Роль успешно создана')
                    this.$router.push({name: 'roles'})
                }).catch(err => {
                    console.log(err);
                    this.state.loading = false
                    this.message.error('Возникла ошибка')
                })
            }
        }
    }
</script>


<style scoped>

</style>