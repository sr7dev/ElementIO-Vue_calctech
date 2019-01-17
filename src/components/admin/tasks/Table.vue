<template>
  <div>
    <template v-if="$route.name === routeName">
      <b-card no-body class="animated fadeIn">
        <b-card-header v-if="!loading">
          <b-container fluid>
            <b-row>
              <b-col class="p-0">
                <h3 class="text-black-50 m-0">Задания</h3>
              </b-col>
              <b-col md="auto" class="p-0 ml-md-4">
                <b-button :variant="isFiltered ? 'primary' : 'secondary'" @click="showFilter=true">
                  <i class="fa fa-filter px-1"></i>
                </b-button>
              </b-col>
              <b-col md="auto" class="p-0 ml-md-4">
                <b-form-input type="text" v-model.trim="search" placeholder="поиск..."/>
              </b-col>
              <b-col md="auto" class="p-0 ml-md-4">
                <b-pagination v-model="page"
                              :total-rows="totalCount"
                              :per-page="pageSize"
                              :limit="1"
                              hide-ellipsis
                              hide-goto-end-buttons
                              class="m-0"></b-pagination>
              </b-col>
            </b-row>
          </b-container>
        </b-card-header>
        <b-card-body class="pb-1">
          <div v-if="loading" class="text-center"><i class="spnr"></i></div>
          <template v-else="">
            <div class="text-black-50 mb-2">Показано: {{Math.min(pageSize, totalCount)}} из {{totalCount}}</div>
            <b-table responsive="sm"
                     :fields="fields"
                     :items="itemsProvider"
                     :current-page="page"
                     :per-page="pageSize"
                     :busy.sync="fetching"
                     thead-class="bg-gray-100"
                     thead-tr-class="align-middle"
                     tbody-class="cursor-pointer"
                     ref="table"
                     @row-clicked="onItemClick"
                     :hover="!fetching && !failFB"
                     bordered show-empty>
              <template slot="HEAD_actions" slot-scope="data">
                <b-button variant="success" size="sm" @click.stop="onAddClick">
                  <i class="icon-plus mr-2"></i>Создать
                </b-button>
              </template>
              <template slot="actions" slot-scope="data">
                <b-button variant="danger" size="sm" @click.stop="onItemDeleteClick(data.item)">
                  <i class="fa fa-trash mr-2"></i>удалить
                </b-button>
              </template>
              <div slot="empty">
                <div v-if="fetching" class="text-center"><i class="spnr"></i></div>
                <b-alert v-else-if="failFB" variant="danger" class="mb-0" show>
                  <i class="fa fa-warning mr-3"></i>{{failFB}}
                </b-alert>
                <div v-else="" class="py-2 text-center text-black-50">Записи не найдены</div>
              </div>
            </b-table>
          </template>
        </b-card-body>
      </b-card>
      <FilterModal v-if="showFilter" @close="showFilter=false"
                   :pars="filterPars" @update="onFilterUpdated"></FilterModal>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  import _ from "lodash"
  import constants from "../../../constants";
  import ajax from "../../../ajax";
  import utils from "../../../utils";
  import FilterModal from "./FilterModal";

  export default {
    props: ['routeName'],
    components: {FilterModal},
    data() {
      return {
        utils, constants,
        loading: false,
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
      };
    },
    computed: {
      isFiltered() {
        return !_.isEmpty(this.filterPars);
      },
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
    },
    methods: {
      refresh() {
        this.page = 1;
        this.$refs.table.refresh();
      },
      itemsProvider(ctx) {
        this.failFB = '';
        let pars = _.assign({}, this.filterPars, {
          page: this.page,
          search: this.search,
        });
        return ajax.reqAPI(`tasks`, {pars}).then(response => {
          let data = response.data;
          this.pageSize = data.page_size;
          this.page = data.page;
          this.totalCount = data.total_count;
          this.sort = data.sort;
          return data.results;
        }).catch(error => {
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
      onItemClick(item) {
        // this.largeModal = true;
        this.$router.push({path: 'ce/' + item.id, append: true});
      },
      onItemDeleteClick(item) {
        this.$store.commit('confirm', {
          msg: 'Вы уверены что хотите удалить эту запись?',
          okCb: () => {
            this.loading = true;
            ajax.reqAPI(`tasks/${item.id}`, {method: 'DELETE'}).then(() => {
              this.loading = false;
            }).catch(error => {
              if (error.status === 401) {
                this.$store.commit('setProfile', null);
                this.$router.push({name: 'auth'});
              } else {
                this.loading = false;
              }
            });
          },
        });
      },
    },
  }
</script>
