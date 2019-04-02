<template>
  <div v-loading="loading" class="animated fadeIn">
    <!-- <el-container>
      <el-row>
        <el-col>
          <el-button class="mb-3" type="primary" @click="$router.back()">
            <i class="icon-arrow-left mr-2"></i>{{id ? 'Назад' : 'Отмена'}}
          </el-button>
        </el-col>
      </el-row>
    </el-container -->
     <b-button class="mb-3" variant="success"  @click="$router.back()">
                <i class="icon-arrow-left mr-2"></i>{{id ? 'Назад' : 'Отмена'}}
      </b-button>
        <b-card  header-tag="header">
             <h4 slot="header">
                 {{headerText}}
             </h4>
            <b-form>
              <b-form-group
                  label="Предмет:"
              >
                  <b-form-select :options="selectOptions" required v-model="data.subject_id" :value="data.subject_id"  />
              </b-form-group>
               <b-form-group
                label="Наименование:"
            >
                <b-form-input
                type="email"
                v-model="data.name"
                required
                />
            </b-form-group>
            <b-form-group
                label="Порядковый номер (в списке):"
            >
                <b-form-input
                type="email"
                v-model="data.ord"
                required
                />
            </b-form-group>

              <b-button @click="onSubmit" variant="success" size="lg">
                  {{id ? 'Изменить' : 'Создать'}}
              </b-button>

            </b-form>
        </b-card>
    <!-- <el-card>
      <div slot="header">
        <h3 class="text-black-50 m-0">{{headerText}}</h3>
      </div>
      <el-form label-position="top">
        <el-form-item label="Предмет:">
          <el-select v-model="data.subject_id">
            <el-option
                    v-for="item in subjects"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Наименование:">
          <el-input v-model="data.name"></el-input>
        </el-form-item>
        <el-form-item label="Порядковый номер (в списке):">
          <el-input pattern="\d*" type="number" v-model="data.ord"></el-input>
        </el-form-item>
        <el-button type="success" @click="onSubmit">
          {{id ? 'Изменить' : 'Создать'}}
        </el-button>
      </el-form>
    </el-card> -->
  </div>
</template>

<script>
  import _ from "lodash";
  import constants from "../../../../constants";
  import utils from "../../../../utils";
  import ajax from "../../../../ajax";

  let emptyData = () => ({subject_id: null, name: null, ord: null});

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
        return parseInt(this.$route.params.topic_id) || 0;
      },
      headerText() {
        return this.id ? 'Измененить тему' : 'Создать тему';
      },
      subjects() {
        return this.$store.state.subjects;
      },
      selectOptions(){
        const arr = [];
          this.subjects.forEach(subject => {
          arr.push(subject.name)
        });
        return arr
      }
    },
    methods: {

      fetch() {
        if (this.id) {
          this.data = _.pick(_.find(this.$store.state.topics, {id: this.id}) || {}, ['subject_id', 'name', 'ord']);
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
          subject_id: parseInt(this.data.subject_id) || 0,
          name: this.data.name,
          ord: parseInt(this.data.ord) || 0,
        };
        if (this.id) {
          req = ajax.reqAPI(`dic/topics/${this.id}`, {method: 'PUT', body});
        } else {
          req = ajax.reqAPI(`dic/topics`, {method: 'POST', body});
        }
        req.then(() => this.$store.dispatch('reloadTopics')).then(() => {
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
