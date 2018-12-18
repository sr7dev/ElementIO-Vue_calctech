<template>
  <b-card no-body class="animated fadeIn m-0">
    <b-card-header>
      <div class="d-flex align-items-center justify-content-between">
        <div>{{(hdr || 'Задачи')}}</div>
      </div>
    </b-card-header>
    <b-card-body class="pb-1 px-2">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <b-button variant="primary">фильтр</b-button>
        <b-form-group label="Поиск:" class="mb-0" horizontal>
          <b-form-input v-model="search"/>
        </b-form-group>
      </div>
      <b-table responsive="sm"
               :fields="fetching ? null : fields" :items="itemsProvider" :busy.sync="fetching"
               @row-clicked="onItemClick"
               :hover="!fetching && !failFB" bordered show-empty>
        <div slot="empty">
          <div v-if="fetching" class="text-center"><i class="spnr"></i></div>
          <b-alert v-else-if="failFB" variant="danger" class="mb-0" show>
            <i class="fa fa-warning mr-3"></i>{{failFB}}
          </b-alert>
          <div v-else="" class="py-2 text-center text-black-50">Записи не найдены</div>
        </div>
      </b-table>
      <div class="d-flex align-items-center justify-content-end">
        <b-pagination :total-rows="total_count" v-model="page" :per-page="page_size" hide-goto-end-buttons>
        </b-pagination>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
  import constants from "../../../constants";
  import ajax from "../../../ajax";
  import utils from "../../../utils";

  export default {
    props: ['hdr'],
    data() {
      return {
        utils, constants,
        fetching: false,
        failFB: '',
        fields: [
          {key: 'kind_name', label: 'Вид', thStyle: 'width: 1%'},
          {key: 'title', label: 'Заголовок'},
        ],
        page_size: 30,
        page: 1,
        total_count: 0,
        search: '',
      };
    },
    methods: {
      itemsProvider(ctx) {
        this.failFB = '';
        return ajax.reqAPI(`tasks`).then(response => {
          this.page_size = response.data.page_size;
          this.page = response.data.page;
          this.total_count = response.data.total_count;
          return response.data.results;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'l-auth'});
          } else {
            this.failFB = utils.retrieveApiErrorDsc(error);
          }
        });
      },
      onItemClick(item) {
        // this.largeModal = true;
        // this.$router.push({path: 'ce/' + item.id, append: true});
      },
    },
  }
</script>
