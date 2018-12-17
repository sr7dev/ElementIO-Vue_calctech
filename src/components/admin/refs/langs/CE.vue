<template>
  <div class="animated fadeIn">
    <b-container fluid class="mb-3">
      <b-row>
        <b-col class="px-0">
          <b-button variant="primary" @click="$router.back()">
            <i class="icon-arrow-left mr-2"></i>{{id ? 'Назад' : 'Отмена'}}
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-card no-body>
      <b-card-header>
        <h3 class="text-black-50 m-0">{{headerText}}</h3>
      </b-card-header>
      <b-form @submit="onSubmit">
        <b-card-body>
          <div v-if="loading" class="text-center"><i class="spnr"></i></div>
          <template v-else="">
            <b-form-group label="Наименование">
              <b-form-input type="text" v-model.trim="data.name"/>
            </b-form-group>
            <b-form-group label="Порядковый номер (в списке)">
              <b-form-input type="number" pattern="\d*" v-model.number="data.ord"/>
            </b-form-group>
            <b-alert v-if="failFB" variant="danger" show>
              <i class="fa fa-warning mr-3"></i>{{failFB}}
            </b-alert>
          </template>
        </b-card-body>
        <b-card-footer v-if="!loading">
          <b-button type="submit" variant="success">
            {{id ? 'Изменить' : 'Создать'}}
          </b-button>
        </b-card-footer>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  import _ from "lodash";
  import constants from "../../../../constants";
  import utils from "../../../../utils";
  import ajax from "../../../../ajax";

  let emptyData = () => ({name: null, ord: null});

  export default {
    data() {
      return {
        utils, constants,
        loading: false,
        failFB: '',
        data: emptyData(),
      };
    },
    computed: {
      id() {
        return parseInt(this.$route.params.lang_id) || 0;
      },
      headerText() {
        return this.id ? 'Измененить язык' : 'Создать язык';
      },
    },
    methods: {
      fetch() {
        if (this.id) {
          this.data = _.pick(_.find(this.$store.state.langs, {id: this.id}) || {}, ['name', 'ord']);
        } else {
          this.data = emptyData();
        }
        this.loading = false;
      },
      onSubmit(e) {
        e.preventDefault();
        this.loading = true;
        this.failFB = '';
        let req = null;
        let body = {
          name: this.data.name,
          ord: parseInt(this.data.ord) || 0,
        };
        if (this.id) {
          req = ajax.reqAPI(`dic/langs/${this.id}`, {method: 'PUT', body});
        } else {
          req = ajax.reqAPI(`dic/langs`, {method: 'POST', body});
        }
        req.then(() => this.$store.dispatch('reloadLangs')).then(() => {
          this.$router.back();
          this.loading = false;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'auth'});
          } else {
            this.loading = false;
            this.failFB = utils.retrieveApiErrorDsc(error);
          }
        });
      },
    },
    created() {
      this.fetch();
    },
  }
</script>
