<template>
    <div class="mb-5" v-loading="state.loading">
        <h1 class="text-black-50">Пользователи</h1>
        <el-container class="mt-5">
            <el-row style="width: 100%">
                <el-col>
                    <el-input placeholder="Писк по имени" v-model="name" class="input-with-select mb-2">
                        <el-select @change="onRoleChange"
                                   style="width: 99px;"
                                   v-model="role_id"
                                   slot="prepend"
                                   placeholder="Роль:">
                            <el-option v-for="item in roles"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id">
                            </el-option>
                            <el-option label="Любая" value="0"></el-option>
                        </el-select>
                        <el-button @click="onSearch" slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    <el-table
                            border
                            @row-click="onItemClick"
                            :data="tableData">
                        <el-table-column
                                label="#"
                                prop="id"
                                width="100"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Имя"
                                prop="first_name"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Фамилия"
                                prop="last_name"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Email"
                                prop="username"
                        >
                        </el-table-column>
                        <el-table-column
                                label="Роль"
                                prop="role_names"
                                filter-multiple
                        >
                        </el-table-column>
                        <el-table-column
                                width="150">
                            <template slot="header" slot-scope="scope">
                                <router-link :to="{name: 'UsersCE', params: {users_id : 0}}">
                                    <el-button type="success">
                                        Добавить
                                    </el-button>
                                </router-link>
                            </template>
                            <template slot-scope="scope">
                                <el-button
                                        style="z-index: 100"
                                        size="mini"
                                        type="danger"
                                        icon="el-icon-delete"
                                        @click="onItemDeleteClick(scope.row)">Удалить
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-container>
        <el-row class="mt-5" type="flex" justify="start">
            <el-pagination
                    :current-page.sync="params.page"
                    :total="params.total_count"
                    :page-size="params.page_size"
                    @current-change="onPageChange"
                    background
                    layout="prev, pager, next">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import {deleteUser} from "./api";

    export default {
        data: () => {
            return {
                state: {
                    loading: true
                },
                params: {
                    page: 1,
                    page_size: 4
                },
                role_id: null,
                name: ''
            }
        },
        computed: {
            tableData() {
                return this.$store.state.users.results
            },
            roles() {
                return this.$store.state.roles
            },
        },
        async created() {
            await this.$store.dispatch('reloadUsers')
            await this.$store.dispatch('reloadRoles')
            this.params = {...this.$store.state.users}
            delete this.params.results
            this.state.loading = false
        },
        methods: {
            async onSearch(){
                this.state.loading = true;
                this.role_id = '0'
                let pars = {search: this.name}
                await this.$store.dispatch('reloadUsers', pars)
                this.params = {...this.$store.state.users}
                this.state.loading = false
            },
            async onRoleChange(val){
                this.state.loading = true;
                this.name = ''
                let pars = {role_id: val}
                if (val !== '0') {
                    await this.$store.dispatch('reloadUsers', pars)
                    this.params = {...this.$store.state.users}
                } else {
                    await this.$store.dispatch('reloadUsers')
                    this.params = {...this.$store.state.users}
                }
                this.state.loading = false
            },
            async onPageChange() {
                this.state.loading = true
                await this.$store.dispatch('reloadUsers', this.params)
                this.state.loading = false
            },
            onItemClick(item, $event) {
                if ($event.target.getAttribute('class') === 'cell') {
                    this.$router.push({path: 'ce/' + item.id, append: true});
                }
            },
            onItemDeleteClick(item) {
                this.$confirm('Вы уверены что хотите удалить этого пользователя?')
                    .then(_ => {
                        this.state.loading = true;
                        deleteUser(item.id).then(response => {
                            this.$store.dispatch('reloadUsers')
                            this.state.loading = false;
                            this.$message.success('Пользователь успешно удален')
                        })

                    })
                    .catch(_ => {
                        this.state.loading = false;
                    });
            },
        }
    }
</script>
