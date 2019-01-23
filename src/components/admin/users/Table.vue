<template>
    <div v-loading="state.loading">
        <el-container>
            <el-table
                    @row-click="onItemClick"
                    :data="tableData"
                    class="mt-5">
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
                        label="Никнейм"
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
                        width="250">
                    <template slot="header" slot-scope="scope">
                        <router-link :to="{name: 'UsersCE', params: {users_id : 0}}">
                            <el-button type="success">
                                Добавить пользователя
                            </el-button>
                        </router-link>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                style="z-index: 100"
                                size="mini"
                                type="danger"
                                icon="el-icon-delete"
                                @click="onItemDeleteClick(scope.row)">Удалить</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-container>
    </div>
</template>

<script>
    import {deleteUser} from "./api";

    export default {
        data: () => {
            return {
                state: {
                    loading: true
                }
            }
        },
        computed: {
            tableData() {
                return this.$store.state.users
            }
        },
        created(){
            this.$store.dispatch('reloadUsers').then( () => this.state.loading = false)
        },
        methods: {
            onItemClick(item) {
                this.$router.push({path: 'ce/' + item.id, append: true});
                console.log(this.tableData);
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
