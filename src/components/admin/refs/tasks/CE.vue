<template>
  <div class="animated fadeIn">
    <h3 class="px-3 mb-4 text-black-50">{{headerText}}</h3>
    <b-card no-body>
      <b-form @submit="onSubmit">
        <b-card-body class="px-0">
          <b-container fluid>
            <b-row v-if="loading">
              <b-col class="text-center">
                <i class="spnr"></i>
              </b-col>
            </b-row>
            <template v-else="">
              <b-row>
                <b-col lg="4">
                  <b-form-group label="Вид задачи">
                    <b-form-radio-group buttons
                                        button-variant="outline-primary"
                                        v-model.number="data.kind_id"
                                        :options="$store.state.task_kinds"
                                        value-field="id"
                                        text-field="name"/>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Язык">
                    <b-form-radio-group buttons
                                        button-variant="outline-primary"
                                        v-model.number="data.lang_id"
                                        :options="$store.state.langs"
                                        value-field="id"
                                        text-field="name"/>
                  </b-form-group>
                </b-col>
                <b-col lg="4" class="d-md-none">&nbsp</b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Класс">
                    <b-form-radio-group v-model.number="data.grade_id"
                                        :options="ld.concat([notSelectedOption], $store.state.grades)"
                                        value-field="id"
                                        text-field="name"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4">
                  <b-form-group label="Предмет">
                    <b-select v-model.number="data.subject_id" :options="$store.state.subjects"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Тема">
                    <b-select v-model.number="data.topic_id" :options="$store.state.topics"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Подтема">
                    <b-select v-model.number="data.sub_topic_id" :options="$store.state.sub_topics"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4">
                  <b-form-group label="Сложность">
                    <b-form-radio-group buttons
                                        button-variant="outline-primary"
                                        v-model.number="data.difficulty_id"
                                        :options="ld.concat([notSelectedOption], $store.state.difficulties)"
                                        value-field="id"
                                        text-field="name"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="8" lg="6">
                  <b-form-group v-if="isQuestion" label="Тип вопроса">
                    <b-select v-model.number="data.type_id" :options="$store.state.task_types"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="10" lg="8">
                  <b-form-group label="Заголовок">
                    <b-form-input type="text" v-model.trim="data.title"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group v-if="isGroup" label="Описание">
                    <b-form-textarea v-model.trim="data.note" :rows="5"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group v-if="isQuestion" label="Текст вопроса">
                    <b-form-textarea v-model.trim="data.txt" :rows="5"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-alert v-if="failFB" variant="danger" show>
                    <i class="fa fa-warning mr-3"></i>{{failFB}}
                  </b-alert>
                </b-col>
              </b-row>
            </template>
          </b-container>
        </b-card-body>
        <b-card-footer v-if="!loading">
          <b-button type="submit" variant="success" class="mr-3">
            {{id ? 'Изменить' : 'Создать'}}
          </b-button>
          <b-button variant="secondary" @click="$router.back()">
            Отмена
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

  export default {
    data() {
      return {
        ld: _, utils, constants,
        loading: false,
        failFB: '',
        data: this.emptyData(),
        notSelectedOption: {id: null, name: 'не выбрано'},
      };
    },
    computed: {
      id() {
        return parseInt(this.$route.params.task_id) || 0;
      },
      headerText() {
        return this.id ? 'Измененить задачу' : 'Создать задачу';
      },
      isQuestion() {
        return this.data.kind_id === constants.TaskKindQuestion;
      },
      isGroup() {
        return this.data.kind_id === constants.TaskKindGroup;
      },
    },
    methods: {
      emptyData() {
        return {
          kind_id: constants.TaskKindQuestion,
          type_id: constants.TaskTypeOneChoice,
          lang_id: (_.first(this.$store.state.langs) || {id: null}).id,
          grade_id: null,
          subject_id: null,
          topic_id: null,
          sub_topic_id: null,
          difficulty_id: null,
          title: null,
          note: null,
          txt: null,
        };
      },
      fetch() {
        if (this.id) {
          this.data = _.pick(_.find(this.$store.state.tasks, {id: this.id}) || {}, ['name', 'ord']);
        } else {
          this.data = this.emptyData();
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
          req = ajax.reqAPI(`dic/tasks/${this.id}`, {method: 'PUT', body});
        } else {
          req = ajax.reqAPI(`dic/tasks`, {method: 'POST', body});
        }
        req.then(() => this.$store.dispatch('reloadTasks')).then(() => {
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
