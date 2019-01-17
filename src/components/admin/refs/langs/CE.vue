<template>
  <div v-loading="loading" class="animated fadeIn">
    <b-container fluid class="mb-3">
      <b-row>
        <b-col class="px-0">
          <el-button type="primary" @click="$router.back()">
            <i class="icon-arrow-left mr-2"></i>{{id ? 'Назад' : 'Отмена'}}
          </el-button>
        </b-col>
      </b-row>
    </b-container>
    <el-card>
      <div slot="header">
        <h3 class="text-black-50 m-0">{{headerText}}</h3>
      </div>
      <el-form label-position="top">
        <el-form-item label="Наименование:">
          <el-input v-model="data.name"></el-input>
        </el-form-item>
        <el-form-item label="Порядковый номер (в списке):">
          <el-input pattern="\d*" type="number" v-model="data.ord"></el-input>
        </el-form-item>
        <el-button type="success" @click="onSubmit"> <!-- submit -->
          {{id ? 'Изменить' : 'Создать'}}
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import _ from "lodash";
  import constants from "@/constants";
  import utils from "@/utils";
  import ajax from "@/ajax";

  let emptyData = () => ({name: null, ord: null});

  export default {
    data() {
      return {
        utils, constants,
        loading: false,
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
            this.$message.error(utils.retrieveApiErrorDsc(error))
          }
        });
      },
    },
    created() {
      this.fetch();
    },
  }
</script>
