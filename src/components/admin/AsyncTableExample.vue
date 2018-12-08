<template>
  <div>
    <template v-if="$route.name === routeName">
      <b-card header="Предметы" body-class="pb-1" class="animated fadeIn">
        <div v-if="loading" class="text-center"><i class="spnr"></i></div>
        <b-alert v-else-if="failFB" variant="danger" show>
          <i class="fa fa-warning mr-3"></i>{{failFB}}
        </b-alert>
        <b-table v-if="!failFB" :show-empty="!loading" responsive="sm"
                 :items="itemsProvider" :busy.sync="loading"
                 tbody-class="cursor-pointer"
                 @row-clicked="onItemClick"
                 empty-text="Записи не найдены" bordered hover>
        </b-table>
      </b-card>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  import constants from "../../../../constants";
  import utils from "../../../../utils";
  import ajax from "../../../../ajax";

  export default {
    props: ['routeName'],
    data() {
      return {
        utils, constants,
        loading: false,
        failFB: '',
      };
    },
    methods: {
      itemsProvider(ctx) {
        this.failFB = '';
        return ajax.reqAPI(`dic/subjects`).then(response => {
          // this.items = response.data;
          // this.loading = false;
          return response.data;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'l-auth'});
          } else {
            this.loading = false;
            this.failFB = utils.retrieveApiErrorDsc(error);
          }
        });
      },
      onItemClick(item) {
        // this.largeModal = true;
        this.$router.push({path: 'ce/' + item.id, append: true});
      },
    },
  }
</script>
