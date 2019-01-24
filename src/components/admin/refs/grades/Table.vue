<template>
    <div>
        <template v-if="$route.name === routeName">
            <el-card class="animated fadeIn">
                <div slot="header" v-if="!state.loading">
                    <div class="d-flex align-items-center justify-content-between">
                        <h3 class="text-black-50">Классы</h3>
                        <div>
                            <el-button type="success" @click="onAddClick">
                                <i class="icon-plus mr-2"></i>Создать
                            </el-button>
                        </div>
                    </div>
                </div>
                <!--<b-card-body class="pb-1">-->
                <!--<div v-if="loading" class="text-center pb-2"><i class="spnr"></i></div>-->
                <!--<b-table v-else="" responsive="sm"-->
                <!--:fields="fields" :items="items"-->
                <!--tbody-class="cursor-pointer"-->
                <!--@row-clicked="onItemClick"-->
                <!--empty-text="Записи не найдены" bordered hover>-->
                <!--<template slot="actions" slot-scope="data">-->
                <!--<el-button type="danger" size="small" @click.stop="onItemDeleteClick(data.item)">-->
                <!--<i class="fa fa-trash mr-2"></i>удалить-->
                <!--</el-button>-->
                <!--</template>-->
                <!--</b-table>-->
                <el-table
                        empty-text="Записи не найдены"
                        :data="items"
                        @row-click="onItemClick"
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="№"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="Наименование">
                    </el-table-column>
                    <el-table-column
                            label=" Действия"
                            width="150">
                        <template slot-scope="scope">
                            <el-button
                                    type="danger"
                                    size="small"
                                    icon="el-icon-delete"
                                    @click.stop="onItemDeleteClick(scope.row)">Удалить
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--</b-card-body>-->
            </el-card>
        </template>
        <router-view></router-view>
    </div>
</template>

<script>
    import constants from "@/constants";
    import ajax from "@/ajax";
    import utils from "@/utils";

    export default {
        props: ['routeName'],
        data() {
            return {
                utils, constants,
                state: {
                    loading: false,
                },
                failFB: '',
                fields: [
                    {key: 'ord', label: '№', thStyle: 'width: 1%', class: 'text-center px-4'},
                    {key: 'name', label: 'Наименование'},
                    {key: 'actions', label: '', thStyle: 'width: 1%', tdClass: 'py-2'},
                ],
            };
        },
        computed: {
            items() {
                return this.$store.state.grades;
            },
        },
        methods: {
            onAddClick() {
                this.$router.push({path: 'ce/0', append: true});
            },
            onItemClick(item, $event) {
                if ($event.target.getAttribute('class') === 'cell') {
                    this.$router.push({path: 'ce/' + item.id, append: true});
                }
            },
            onItemDeleteClick(item) {
                this.$confirm('Вы уверены что хотите удалить эту запись?')
                    .then(_ => {
                        this.state.loading = true;
                        ajax.reqAPI(`dic/grades/${item.id}`, {method: 'DELETE'}).then(() => {
                            return this.$store.dispatch('reloadGrades');
                        }).then(() => {
                            this.loading = false;
                        }).catch(error => {
                            if (error.status === 401) {
                                this.$store.commit('setProfile', null);
                                this.$router.push({name: 'auth'});
                            } else {
                                this.loading = false;
                            }
                        });
                    })
                    .catch(_ => {
                    });
                // this.$store.commit('confirm', {
                //     msg: 'Вы уверены что хотите удалить эту запись?',
                //     okCb: () => {
                //         this.loading = true;
                //         ajax.reqAPI(`dic/grades/${item.id}`, {method: 'DELETE'}).then(() => {
                //             return this.$store.dispatch('reloadGrades');
                //         }).then(() => {
                //             this.loading = false;
                //         }).catch(error => {
                //             if (error.status === 401) {
                //                 this.$store.commit('setProfile', null);
                //                 this.$router.push({name: 'auth'});
                //             } else {
                //                 this.loading = false;
                //             }
                //         });
                //     },
                // });
            },
        },
    }
</script>
