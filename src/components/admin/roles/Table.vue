<template>
    <div v-loading="state.loading">
        <h1 class="text-black-50">Роли и полномочия</h1>
        <el-container>
            <el-table
                    @row-click="onItemClick"
                    :data="tableData"
                    class="mt-5">
                <el-table-column
                        label="#"
                        type="index"
                        width="100"
                >
                </el-table-column>
                <el-table-column
                label="Роль"
                prop="name"
                >
                </el-table-column>
                <el-table-column
                                width="200">
                    <template slot="header" slot-scope="scope">
                        <router-link :to="{name: 'RolesCE', params: {roles_id : 0}}">
                            <el-button type="success">
                                Добавить роль
                            </el-button>
                        </router-link>
                    </template>
                    <template slot-scope="scope">
                        <el-button
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
    import {deleteRole} from './api'
    export default {
        data: () => {
            return {
                state: {
                    loading: true
                },
            }
        },
        async created(){
            await this.$store.dispatch('reloadRoles')
            this.state.loading = false
        },
        computed: {
            tableData() {
                return this.$store.state.roles
            }
        },
        methods: {
            onItemClick(item, $event) {
                if ($event.target.getAttribute('class') === 'cell') {
                    this.$router.push({path: 'ce/' + item.id, append: true});
                }
            },
            onItemDeleteClick(item) {
                this.$confirm('Вы уверены что хотите удалить эту роль?')
                    .then(_ => {
                        this.state.loading = true;
                        deleteRole(item.id).then(response => {
                            this.$store.dispatch('reloadRoles')
                            this.state.loading = false;
                            this.$message.success('Роль успешно удалена')
                        })

                    })
                    .catch(_ => {
                        this.state.loading = false;
                    });
            },
        }
    }
</script>

