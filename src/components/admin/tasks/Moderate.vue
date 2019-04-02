<template>
    <div v-loading="state.loading">
        <el-card no-body class="animated fadeIn">
            <div slot="header">
                <h1 class="text-black-50">Задания на модерацию</h1>
            </div>
            <el-table
                    :data="tableData"
                    @row-click="onItemClick"
            >
                <el-table-column
                        prop="id"
                        label="#"
                        type="index"
                        width="100"
                >
                </el-table-column>
                <el-table-column
                        label="Заголовок"
                        prop="title"
                        width="300"
                >
                </el-table-column>
                <el-table-column
                        label="Предмет"
                        prop="subject_name"
                        width="300"
                >
                </el-table-column>
                <el-table-column
                        label="Тип вопроса"
                        prop="type_name"
                        width="300"
                >
                </el-table-column>
                <el-table-column
                        label="Преподаватель"
                        prop="usr_first_name"
                        width="300"
                >
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    import {getTasks} from './api'
    export default {
        data: () => ({
             state: {
                 loading: false //
             },
             tableData: []
        }),
        async mounted() {
            let response = await getTasks({state_id: 2})
            this.tableData = response.data.results
            console.log(this.tableData);
        },
        methods: {
            onItemClick(item, $event) {
                if ($event.target.getAttribute('class') === 'cell') {
                    this.$router.push({path: '/adm/tasks/ce/' + item.id, append: true});
                }
            },
        }
    }
</script>