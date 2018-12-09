<template>
  <div>
    <template v-if="$route.name === routeName">
      <b-card no-body class="animated fadeIn">
        <b-card-header v-if="!loading">
          <div class="d-flex align-items-center justify-content-between">
            <div>Языки</div>
            <div>
              <b-button variant="success" @click="onAddClick">
                <i class="icon-plus mr-2"></i>Создать
              </b-button>
            </div>
          </div>
        </b-card-header>
        <b-card-body class="pb-1">
          <div v-if="loading" class="text-center pb-2"><i class="spnr"></i></div>
          <b-table v-else="" responsive="sm"
                   :fields="fields" :items="items"
                   tbody-class="cursor-pointer"
                   @row-clicked="onItemClick"
                   empty-text="Записи не найдены" bordered hover>
            <template slot="actions" slot-scope="data">
              <b-button variant="danger" size="sm" @click.stop="onItemDeleteClick(data.item)">
                <i class="fa fa-trash mr-2"></i>удалить
              </b-button>
            </template>
          </b-table>
        </b-card-body>
      </b-card>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  import constants from "../../../../constants";
  import ajax from "../../../../ajax";
  import utils from "../../../../utils";

  export default {
    props: ['routeName'],
    data() {
      return {
        utils, constants,
        loading: false,
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
        return this.$store.state.langs;
      },
    },
    methods: {
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
            ajax.reqAPI(`dic/langs/${item.id}`, {method: 'DELETE'}).then(() => {
              return this.$store.dispatch('reloadLangs');
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
          },
        });
      },
    },
  }
</script>
