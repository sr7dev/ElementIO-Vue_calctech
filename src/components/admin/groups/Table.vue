<template>
    <div class="mb-5" v-loading="state.loading">
        <h1 class="text-black-50">Группы</h1>
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
                        label="Название группы"
                        prop="name"
                >
                </el-table-column>
                <el-table-column
                        label="Заметки"
                        prop="note"
                >
                </el-table-column>
                <el-table-column
                        label="Преподаватель"
                        prop="tutor_id"
                        :formatter="formatter"
                >
                </el-table-column>
                <el-table-column
                        width="250">
                    <template slot="header" slot-scope="scope">
                        <router-link :to="{name: 'GroupsCE', params: {groups_id : 0}}">
                            <el-button type="success">
                                Добавить группу
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
        </el-container>
        <el-row class="mt-5" type="flex" justify="start">
            <el-pagination
                    :current-page.sync="params.page"
                    :total="params.total_count"
                    :page-size="params.page_size"
                    background
                    @current-change="onPageChange"
                    layout="prev, pager, next">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import {deleteGroup} from "./api";
    import _ from "lodash"

    export default {
        data: () => {
            return {
                state: {
                    loading: true
                },
                params: {}
            }
        },
        computed: {
            tableData() {
                return this.$store.state.groups.results
            }
        },
        async created() {
            await this.$store.dispatch('reloadGroups')
            await this.$store.dispatch('reloadUsers')
            this.params = {...this.$store.state.groups}
            delete this.params.results
            this.state.loading = false
        },
        methods: {
            async onPageChange() {
                this.state.loading = true
                await this.$store.dispatch('reloadGroups', this.params)
                this.state.loading = false
            },
            formatter(row) {
                return (_.find(this.$store.state.users.results, {id: row.tutor_id}) || {name: ''}).first_name;
            },
            onItemClick(item, $event) {
                if ($event.target.getAttribute('class') === 'cell') {
                    this.$router.push({path: 'ce/' + item.id, append: true});
                }
            },
            onItemDeleteClick(item) {
                this.$confirm('Вы уверены что хотите удалить эту группу?')
                    .then(_ => {
                        this.state.loading = true;
                        deleteGroup(item.id).then(response => {
                            this.$store.dispatch('reloadGroups')
                            this.state.loading = false;
                            this.$message.success('Группа успешно удалена')
                        })

                    })
                    .catch(_ => {
                        this.state.loading = false;
                    });
            },
        }
    }
</script>
