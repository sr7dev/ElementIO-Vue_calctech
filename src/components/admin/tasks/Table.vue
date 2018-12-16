<template>
  <div>
    <template v-if="$route.name === routeName">
      <b-card no-body class="animated fadeIn">
        <b-card-header v-if="!loading">
          <div class="d-flex align-items-center justify-content-between">
            <div>Задачи</div>
            <div>
              <b-button variant="success" @click="onAddClick">
                <i class="icon-plus mr-2"></i>Создать
              </b-button>
            </div>
          </div>
        </b-card-header>
        <b-card-body class="pb-1">
          <div v-if="loading" class="text-center"><i class="spnr"></i></div>
          <b-table v-else="" responsive="sm"
                   :fields="fetching ? null : fields" :items="itemsProvider" :busy.sync="fetching"
                   tbody-class="cursor-pointer"
                   @row-clicked="onItemClick"
                   :hover="!fetching && !failFB" bordered show-empty>
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
        </b-card-body>
      </b-card>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  import constants from "../../../constants";
  import ajax from "../../../ajax";
  import utils from "../../../utils";

  export default {
    props: ['routeName'],
    data() {
      return {
        utils, constants,
        loading: false,
        fetching: false,
        failFB: '',
        fields: [
          {key: 'kind_name', label: 'Вид', thStyle: 'width: 1%'},
          {key: 'title', label: 'Заголовок'},
          {key: 'actions', label: '', thStyle: 'width: 1%', tdClass: 'py-2'},
        ],
      };
    },
    methods: {
      itemsProvider(ctx) {
        this.failFB = '';
        return ajax.reqAPI(`tasks`).then(response => {
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
