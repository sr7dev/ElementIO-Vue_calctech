<template>
    <div v-loading="state.loading">
        <template v-if="$route.name === routeName">
            <el-card no-body class="animated fadeIn">
                <div slot="header" v-if="!state.loading">
                    <el-container>
                        <modal :height="200" name="groupsModal">
                            <el-row>
                                <el-col :offset="1">
                                    <el-form label-position="top">
                                        <el-form-item label="Выберите группы:">
                                            <el-select v-model="state.selectedGroups"
                                                       multiple
                                                       style="width: 91%">
                                                <el-option v-for="group in myGroups"
                                                           :label="group.name"
                                                           :value="group.id"
                                                ></el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-button type="primary" @click="assignTask">Назначить</el-button>
                                    </el-form>
                                </el-col>
                            </el-row>
                        </modal>
                        <el-row style="width: 100%">
                            <el-col :span="8">
                                <h3 class="text-black-50 m-0">Задания</h3>
                            </el-col>
                            <el-col :span="2">
                                <el-button :type="isFiltered ? 'primary' : 'secondary'" @click="showFilter=true">
                                    <i class="fa fa-filter px-1"></i>
                                </el-button>
                            </el-col>
                            <el-col :span="5">
                                <el-input type="text" v-model.trim="search" placeholder="поиск..."/>
                            </el-col>
                            <el-col :span="5">
                                <el-pagination :current-page.sync="page"
                                               @current-change="itemsProvider"
                                               background
                                               :total="totalCount"
                                               :page-size="pageSize"
                                               :limit="1"
                                               layout="prev, pager, next"
                                ></el-pagination>
                            </el-col>
                        </el-row>
                    </el-container>
                </div>
                <div class="pb-1">
                    <template>
                        <div class="text-black-50 mb-2">Показано: {{Math.min(pageSize, totalCount)}} из {{totalCount}}
                        </div>
                        <el-table @row-click="onItemClick"
                                  :data="tableData"
                        >
                            <el-table-column
                                    prop="kind_name"
                                    label="Вид"
                                    width="200"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="title"
                                    label="Заголовок"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="state_id"
                                    :formatter="formatter"
                                    label="Статус"
                            >
                            </el-table-column>
                            <el-table-column
                                    align="center"
                                    prop=""
                                    label="Прикрепить к группе">
                                <template slot-scope="scope">
                                    <el-button
                                            style="margin-bottom: 5px"
                                            v-if="scope.row.state_id === 1"
                                            size="mini"
                                            type="warning"
                                            @click="onModerate(scope.row)"
                                    >
                                        На модерацию
                                    </el-button>

                                    <el-button v-if="scope.row.state_id === 3" size="small" type="primary"
                                               @click="show(scope.row)">
                                        Назначить задание
                                    </el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop=""
                                    label=""
                                    width="200"
                                    align="center"
                            >
                                <template slot="header" slot-scope="scope">
                                    <el-button
                                            v-if="myPerms.includes('task-ce') || myPerms.includes('*')"
                                            type="success"
                                            @click="onAddClick"
                                    >
                                        Добавить
                                    </el-button>
                                </template>
                                <template slot-scope="scope">
                                    <el-button
                                            style="margin: 0"
                                            size="mini"
                                            type="danger"
                                            icon="el-icon-delete"
                                            @click="onItemDeleteClick(scope.row)">Удалить
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!--<b-table responsive="sm"-->
                        <!--:fields="fields"-->
                        <!--:items="itemsProvider"-->
                        <!--:current-page="page"-->
                        <!--:per-page="pageSize"-->
                        <!--:busy.sync="fetching"-->
                        <!--thead-class="bg-gray-100"-->
                        <!--thead-tr-class="align-middle"-->
                        <!--tbody-class="cursor-pointer"-->
                        <!--ref="table"-->
                        <!--@row-clicked="onItemClick"-->
                        <!--:hover="!fetching && !failFB"-->
                        <!--bordered show-empty>-->
                        <!--<template slot="HEAD_actions" slot-scope="data">-->
                        <!--<b-button variant="success" size="sm" @click.stop="onAddClick">-->
                        <!--<i class="icon-plus mr-2"></i>Создать-->
                        <!--</b-button>-->
                        <!--</template>-->
                        <!--<template slot="actions" slot-scope="data">-->
                        <!--<b-button variant="danger" size="sm" @click.stop="onItemDeleteClick(data.item)">-->
                        <!--<i class="fa fa-trash mr-2"></i>удалить-->
                        <!--</b-button>-->
                        <!--</template>-->
                        <!--<div slot="empty">-->
                        <!--<div v-if="fetching" class="text-center"><i class="spnr"></i></div>-->
                        <!--<b-alert v-else-if="failFB" variant="danger" class="mb-0" show>-->
                        <!--<i class="fa fa-warning mr-3"></i>{{failFB}}-->
                        <!--</b-alert>-->
                        <!--<div v-else="" class="py-2 text-center text-black-50">Записи не найдены</div>-->
                        <!--</div>-->
                        <!--</b-table>-->
                    </template>
                </div>
            </el-card>
            <FilterModal v-if="showFilter" @close="showFilter=false"
                         :pars="filterPars" @update="onFilterUpdated"></FilterModal>
        </template>
        <router-view></router-view>
    </div>
</template>

<script>
    import _ from "lodash"
    import constants from "@/constants";
    import ajax from "@/ajax";
    import utils from "@/utils";
    import FilterModal from "./FilterModal";
    import {assignTask, getTasks, moderateTask} from './api'
    import taskStates from '@/taskStates'

    export default {
        props: ['routeName'],
        components: {FilterModal},
        data() {
            return {
                utils, constants,
                state: {
                    loading: true,
                    task_id: null,
                    selectedGroups: [],
                },
                taskStates,
                fetching: false,
                needRefetch: false,
                failFB: '',
                fields: [
                    {key: 'kind_name', label: 'Вид', thStyle: 'width: 1%'},
                    {key: 'title', label: 'Заголовок'},
                    {key: 'actions', label: '', thStyle: 'width: 1%', tdClass: 'py-2'},
                ],
                pageSize: 20,
                page: 1,
                totalCount: 0,
                showFilter: false,
                filterPars: {},
                search: '',
                sort: '',
                tableData: [],
            };
        },
        mounted() {
            this.state.loading = true
            this.itemsProvider()
        },
        computed: {
            myPerms() {
                return this.$store.state.profile.perms
            },
            isFiltered() {
                return !_.isEmpty(this.filterPars);
            },
            myGroups() {
                return this.$store.state.profile.students.groups
            }
        },
        watch: {
            search() {
                if (this.fetching) {
                    this.needRefetch = true;
                } else {
                    this.refresh();
                }
            },
            fetching(v) {
                if (!v && this.needRefetch) {
                    this.needRefetch = false;
                    this.$nextTick(() => {
                        this.refresh();
                    });
                }
            },
            '$route': 'itemsProvider'
        },
        methods: {
            onModerate(row) {
                this.state.loading = true
                let id = row.id
                moderateTask(id)
                    .then(response => {
                        this.itemsProvider()
                        this.state.loading = false
                        this.$message.success('Задание отправлено на модерацию')
                    })
                    .catch(error => {
                        this.state.loading = false
                        this.$message.error(error.data.error_dsc)
                    })
            },
            assignTask() {
                this.state.loading = true
                let id = this.state.task_id
                let data = {
                    group_ids: [...this.state.selectedGroups]
                }
                assignTask(id, data)
                    .then(response => {
                        this.state.loading = false
                        this.$message.success('Задание успешно назначено группе')
                    })
                    .catch(response => {
                        this.state.loading = false
                        this.$message.error(response.data.error_dsc)
                    })
            },

            show(task) {
                this.state.task_id = task.id
                this.$modal.show('groupsModal');
            },
            formatter(row) {
                return (_.find(this.taskStates, {id: row.state_id}) || {name: ''}).name;
            },
            refresh() {
                this.page = 1;
                this.itemsProvider()
            },
            itemsProvider(ctx) {
                this.state.loading = true
                this.failFB = '';
                let pars = _.assign({}, this.filterPars, {
                    page: this.page,
                    search: this.search,
                    page_size: this.pageSize,
                    own: !this.filterPars.own ? !this.myPerms.includes('not_own_task-v') : this.filterPars.own
                });
                getTasks(pars).then(response => {
                    let data = response.data;
                    this.tableData = response.data.results
                    this.pageSize = data.page_size;
                    this.page = data.page;
                    this.totalCount = data.total_count;
                    this.sort = data.sort;
                    this.state.loading = false;
                    return data.results;

                }).catch(error => {
                    this.state.loading = false
                    if (error.status === 401) {
                        this.$store.commit('setProfile', null);
                        this.$router.push({name: 'l-auth'});
                    } else {
                        this.failFB = utils.retrieveApiErrorDsc(error);
                    }
                });
            },
            onFilterUpdated(pars) {
                this.filterPars = pars;
                this.refresh();
            },
            onAddClick() {
                this.$router.push({path: 'ce/0', append: true});
            },
            onItemClick(item, $event) {
                if ($event.target.getAttribute('class') === 'cell') {
                    this.$router.push({path: 'ce/' + item.id, append: true});
                }
            },
            onItemDeleteClick(item) {
                this.$confirm('Вы уверены что хотите удалить эту запись?',)
                    .then(_ => {
                        this.state.loading = true;
                        ajax.reqAPI(`tasks/${item.id}`, {method: 'DELETE'}).then(() => {
                            this.state.loading = false;
                            this.$message.success('Задание успешно удалено')
                            this.itemsProvider()
                        }).catch(error => {
                            if (error.status === 401) {
                                this.$store.commit('setProfile', null);
                                this.$router.push({name: 'auth'});
                            } else {
                                this.state.loading = false;
                                this.$message.error(error.data.error_dsc)
                            }
                        });
                    })
            },
        },
    }
</script>
