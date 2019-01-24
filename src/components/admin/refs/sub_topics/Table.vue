<template>
  <div>
    <template v-if="$route.name === routeName">
      <b-card no-body class="animated fadeIn">
        <b-card-header v-if="!loading">
          <div class="d-flex align-items-center justify-content-between">
            <div>Подтемы</div>
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
  import _ from "lodash"
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
          {
            key: 'topic',
            label: 'Тема',
            thStyle: 'width: 1%',
            tdClass: 'pr-4',
            formatter: (value, key, item) => {
              return (_.find(this.$store.state.topics, {id: item.topic_id}) || {name: ''}).name;
            }
          },
          {
            key: 'subject',
            label: 'предмет',
            thStyle: 'width: 1%',
            tdClass: 'pr-4',
            formatter: (value, key, item) => {
              return (_.find(this.$store.state.subjects, {id: (_.find(this.$store.state.topics, {id: item.topic_id}) || {}).subject_id}) || {name: ''}).name;
            }
          },
          {key: 'actions', label: '', thStyle: 'width: 1%', tdClass: 'py-2'},
        ],
      };
    },
    computed: {
      items() {
        return this.$store.state.sub_topics;
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
        this.$store.commit('confirm', {
          msg: 'Вы уверены что хотите удалить эту запись?',
          okCb: () => {
            this.loading = true;
            ajax.reqAPI(`dic/sub_topics/${item.id}`, {method: 'DELETE'}).then(() => {
              return this.$store.dispatch('reloadSubTopics');
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
