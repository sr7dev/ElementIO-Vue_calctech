<template>
  <b-container fluid class="mt-5">
    <el-row class="mb-4">
      <el-col>
        <h3 class="text-black-50 m-0">Дочерние задания</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="px-0">
        <b-card no-body class="animated fadeIn m-0">
          <b-card-header class="p-2">
            <b-container fluid>
              <el-row class="align-items-center">
                <el-col class="p-0">
                  Все задания
                </el-col>
                <el-col md="auto" class="p-0 ml-md-3">
                  <b-button :variant="isSrcFiltered ? 'primary' : 'secondary'" size="sm" @click="srcShowFilter=true">
                    <i class="fa fa-filter px-1"></i>
                  </b-button>
                </el-col>
                <el-col md="auto" class="p-0 ml-md-3">
                  <b-form-input type="text" v-model="srcSearch" size="sm" placeholder="поиск..."/>
                </el-col>
                <el-col md="auto" class="p-0 ml-md-3">
                  <b-pagination v-model="srcPage"
                                size="sm"
                                :total-rows="srcTotalCount"
                                :per-page="srcPageSize"
                                :limit="1"
                                hide-ellipsis
                                hide-goto-end-buttons
                                class="m-0"></b-pagination>
                </el-col>
              </el-row>
            </b-container>
          </b-card-header>
          <b-card-body class="p-1 pt-2">
            <div v-if="srcFetching" class="text-center"><i class="spnr"></i></div>
            <template v-else="">
              <div class="font-sm text-black-50 mb-1">Показано: {{Math.min(srcPageSize, srcTotalCount)}} из
                {{srcTotalCount}}
              </div>
              <table class="table table-sm table-bordered table-hover mb-0">
                <thead class="bg-gray-100 text-black-50">
                <tr>
                  <th class="width-1per">Вид</th>
                  <th>Заголовок</th>
                  <th class="width-1per">Сложность</th>
                </tr>
                </thead>
                <draggable v-model="srcItems"
                           :options="{group: 'task-items', dataIdAttr: 'id', filter: '.text-secondary'}"
                           element="tbody">
                  <tr v-for="(item, i) in srcItems" :key="'ai-'+i+'-'+item.id"
                      :class="{'text-secondary': srcItemInChildren(item), 'cursor-move': !srcItemInChildren(item)}">
                    <template v-if="item.id">
                      <td>{{item.kind_name}}</td>
                      <td>{{item.title}}</td>
                      <td>{{item.difficulty_name}}</td>
                    </template>
                    <td v-else="" colspan="3" class="border-light">
                      &nbsp;
                    </td>
                  </tr>
                </draggable>
              </table>
            </template>
          </b-card-body>
        </b-card>
      </el-col>
      <el-col md="auto" class="px-2 d-flex align-items-center">
        <i class="icon-arrow-right"></i>
      </el-col>
      <el-col class="px-0 animated fadeIn">
        <b-card no-body class="animated fadeIn m-0">
          <b-card-header class="p-2">
            <b-container fluid>
              <el-row class="align-items-center">
                <el-col class="p-0 d-flex align-items-center">
                  Дочерние задания<i v-if="saving" class="spnr ml-3"></i>
                </el-col>
                <el-col md="auto" class="p-0 mr-2">
                  <b-form-input type="text" size="sm" placeholder="поиск..."/>
                </el-col>
              </el-row>
            </b-container>
          </b-card-header>
          <b-card-body class="p-1 pt-2">
            <div class="font-sm text-black-50 mb-1">Элементов: {{children.length}}</div>
            <table class="table table-sm table-bordered table-hover mb-0">
              <thead class="bg-gray-100 text-black-50">
              <tr>
                <th class="width-1per">Вид</th>
                <th>Заголовок</th>
                <th class="width-1per">Сложность</th>
              </tr>
              </thead>
              <draggable v-model="dstItems"
                         :options="{group: 'task-items', dataIdAttr: 'id'}"
                         element="tbody">
                <tr v-for="(item, i) in dstItems" :key="'ci-'+i+'-'+item.id"
                    :class="{'cursor-move': item.id}">
                  <template v-if="item.id">
                    <td>{{item.kind_name}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.difficulty_name}}</td>
                  </template>
                  <td v-else="" colspan="3" class="border-light">
                    &nbsp;
                  </td>
                </tr>
              </draggable>
            </table>
          </b-card-body>
        </b-card>
      </el-col>
    </el-row>
    <FilterModal v-if="srcShowFilter" @close="srcShowFilter=false"
                 :pars="srcFilterPars" @update="onSrcFilterUpdated"></FilterModal>
  </b-container>
</template>

<script>
  import _ from 'lodash'
  import ajax from "../../../ajax";
  import utils from "../../../utils";
  import draggable from 'vuedraggable';
  import FilterModal from "./FilterModal";

  export default {
    props: ['children', 'saving'],
    components: {FilterModal, draggable},
    data() {
      return {
        tableFields: [
          {key: 'kind_name', label: 'Вид', thClass: 'width-1per'},
          {key: 'title', label: 'Заголовок'},
          {key: 'difficulty_name', label: 'Сложность', thClass: 'width-1per'},
        ],
        srcRows: [],
        srcFetching: true,
        srcNeedRefetch: false,
        srcFailFB: '',
        srcPageSize: 20,
        srcPage: 1,
        srcTotalCount: 0,
        srcShowFilter: false,
        srcFilterPars: {},
        srcSearch: '',
      };
    },
    computed: {
      maxItemCount() {
        return Math.max(this.children.length, this.srcRows.length);
      },
      isSrcFiltered() {
        return !_.isEmpty(this.srcFilterPars);
      },
      srcItems: {
        get() {
          return _.assign(_.fill(new Array(this.maxItemCount), {id: 0}), this.srcRows);
        },
        set(value) {
        },
      },
      dstItems: {
        get() {
          return _.assign(_.fill(new Array(this.maxItemCount), {id: 0}), this.children);
        },
        set(value) {
          this.$emit('update:children', _.reject(value, {id: 0}));
        },
      },
    },
    watch: {
      srcPage() {
        this.srcFetch();
      },
      srcSearch() {
        if (this.srcFetching) {
          this.srcNeedRefetch = true;
        } else {
          this.srcFetch(true);
        }
      },
      srcFetching(v) {
        if (!v && this.srcNeedRefetch) {
          this.srcNeedRefetch = false;
          this.$nextTick(() => {
            this.srcFetch(true);
          });
        }
      },
    },
    methods: {
      srcFetch(reset) {
        this.srcFetching = true;
        if (reset) {
          this.srcPage = 1;
        }
        this.srcFailFB = '';
        let pars = _.assign({}, this.srcFilterPars, {
          page: this.srcPage,
          page_size: this.srcPageSize,
          search: this.srcSearch,
        });
        return ajax.reqAPI(`tasks`, {pars}).then(response => {
          let data = response.data;
          this.srcPageSize = data.page_size;
          this.srcPage = data.page;
          this.srcTotalCount = data.total_count;
          this.srcRows = data.results;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'l-auth'});
          } else {
            this.srcFailFB = utils.retrieveApiErrorDsc(error);
          }
        }).finally(() => {
          this.srcFetching = false;
        });
      },
      onSrcFilterUpdated(pars) {
        this.srcFilterPars = pars;
        this.srcFetch();
      },
      srcItemInChildren(item) {
        return _.find(this.children, {id: item.id});
      },
    },
    created() {
      this.srcFetch();
    },
  }
</script>