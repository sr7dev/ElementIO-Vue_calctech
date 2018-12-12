<template>
  <div class="animated fadeIn">
    <h3 class="px-3 mb-4 text-black-50">{{headerText}}</h3>
    <b-card no-body>
      <b-form @submit.prevent="onSubmit">
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
                                        text-field="name"></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Язык">
                    <b-form-radio-group buttons
                                        button-variant="outline-primary"
                                        v-model.number="data.lang_id"
                                        :options="$store.state.langs"
                                        value-field="id"
                                        text-field="name"></b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Сложность">
                    <b-form-radio-group buttons
                                        button-variant="outline-primary"
                                        v-model.number="data.difficulty_id"
                                        :options="ld.concat([notSelectedChoice], $store.state.difficulties)"
                                        value-field="id"
                                        text-field="name"></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="8">
                  <b-form-group label="Класс">
                    <b-form-radio-group v-model.number="data.grade_id"
                                        :options="ld.concat([notSelectedChoice], $store.state.grades)"
                                        value-field="id"
                                        text-field="name"></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4">
                  <b-form-group label="Предмет">
                    <b-select v-model.number="data.subject_id"
                              :options="ld.concat([notSelectedOption], $store.state.subjects)"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Тема">
                    <b-select v-model.number="data.topic_id" :options="topics"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Подтема">
                    <b-select v-model.number="data.sub_topic_id" :options="subTopics"
                              value-field="id" text-field="name"></b-select>
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
                <b-col md="10" lg="8">
                  <b-form-group v-if="isGroup" label="Описание">
                    <b-form-textarea v-model.trim="data.note" :rows="5"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="10" lg="8">
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
    props: ['routeName'],
    data() {
      return {
        ld: _, utils, constants,
        loading: false,
        failFB: '',
        data: this.emptyData(),
        notSelectedOption: {id: null, name: '-- не выбрано --'},
        notSelectedChoice: {id: null, name: 'не выбрано'},
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
      topics() {
        return _.concat([this.notSelectedOption], _.filter(this.$store.state.topics, {subject_id: this.data.subject_id}));
      },
      subTopics() {
        return _.concat([this.notSelectedOption], _.filter(this.$store.state.sub_topics, {topic_id: this.data.topic_id}));
      },
    },
    watch: {
      'data.subject_id'() {
        this.data.topic_id = null;
      },
      'data.topic_id'() {
        this.data.sub_topic_id = null;
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
        if (!this.id) {
          this.data = this.emptyData();
          return;
        }
        this.loading = true;
        ajax.reqAPI(`tasks/${this.id}`).then(response => {
          this.data = response.data;
          this.loading = false;
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
      onSubmit(e) {
        this.loading = true;
        this.failFB = '';
        let req = null;
        let body = _.assign(
          {
            kind: this.data.kind_id,
            type: this.data.type_id,
            lang: this.data.lang_id,
            title: this.data.title,
          },
          (this.data.kind_id === constants.TaskKindQuestion) && {txt: this.data.txt},
          (this.data.kind_id === constants.TaskKindGroup) && {note: this.data.note},
          this.data.grade_id && {grade: this.data.grade_id},
          this.data.subject_id && {subject: this.data.subject_id},
          this.data.topic_id && {topic: this.data.topic_id},
          this.data.sub_topic_id && {sub_topic: this.data.sub_topic_id},
          this.data.difficulty_id && {difficulty: this.data.difficulty_id},
        );
        if (this.id) {
          req = ajax.reqAPI(`tasks/${this.id}`, {method: 'PUT', body});
        } else {
          req = ajax.reqAPI(`tasks`, {method: 'POST', body});
        }
        req.then(response => {
          if (this.id) {
            this.fetch();
          } else {
            this.$router.replace({name: this.routeName, params: {task_id: response.data.id}});
            this.fetch();
          }
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
