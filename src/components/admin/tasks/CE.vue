<template>
  <div class="animated fadeIn" style="padding-bottom: 80vh">
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
      <b-form @submit.prevent="onSubmit">
        <b-card-body class="px-0 pb-2">
          <b-container fluid>
            <b-row v-if="loading">
              <b-col class="text-center">
                <i class="spnr"></i>
              </b-col>
            </b-row>
            <template v-else="">
              <b-row v-if="failFB">
                <b-col>
                  <b-alert variant="danger" show>
                    <i class="fa fa-warning mr-3"></i>{{failFB}}
                  </b-alert>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="4">
                  <b-form-group label="Вид задачи">
                    <b-form-input v-if="id" type="text" :value="data.kind_name" disabled/>
                    <b-form-radio-group v-else="" buttons
                                        button-variant="outline-primary"
                                        v-model.number="data.kind_id"
                                        :options="$store.state.task_kinds"
                                        value-field="id"
                                        text-field="name"></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
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
                <b-col lg="4">
                  <b-form-group label="Класс">
                    <b-select v-model.number="data.grade_id"
                              :options="ld.concat([notSelectedOption], $store.state.grades)"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group label="Предмет">
                    <b-select v-model.number="data.subject_id"
                              :options="ld.concat([notSelectedOption], $store.state.subjects)"
                              value-field="id" text-field="name"></b-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
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
              <b-row v-if="isGroup">
                <b-col md="10" lg="8">
                  <b-form-group label="Описание">
                    <b-form-textarea v-model="data.note" :rows="5" no-resize/>
                  </b-form-group>
                </b-col>
              </b-row>
              <template v-if="isQuestion">
                <b-row>
                  <b-col md="10" lg="8">
                    <b-form-group label="Текст вопроса">
                      <b-form-textarea v-model="data.txt" :rows="5" no-resize/>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row v-if="data.txt">
                  <b-col md="10" lg="8">
                    <MathJaxVue :formula="data.txt"></MathJaxVue>
                  </b-col>
                </b-row>
              </template>
            </template>
          </b-container>
        </b-card-body>
        <b-card-footer v-if="!loading">
          <b-button type="submit" variant="success" class="mr-2">
            {{id ? 'Изменить' : 'Создать'}}
          </b-button>
        </b-card-footer>
      </b-form>
    </b-card>
    <template v-if="!loading && showAttachments">
      <b-container fluid class="mt-5 mb-4">
        <b-row>
          <b-col>
            <h3 class="text-black-50 m-0">Приложения к задаче</h3>
          </b-col>
        </b-row>
      </b-container>
      <AttachmentCECard v-for="att in data.attachments" :task-id="id" :sd="att" :key="`att-${att.id}`"
                        @updated="onAttachmentUpdated(att, $event)"
                        @deleted="onAttachmentDeleted(att.id)"></AttachmentCECard>
      <b-container fluid class="pb-3">
        <b-row class="justify-content-center">
          <b-col lg="auto">
            <b-button variant="success" @click="onAddAttachmentClick">
              <i class="icon-plus mr-2"></i>Добавить приложение
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <template v-if="!loading && showAnswers">
      <b-container fluid class="mt-5 mb-4">
        <b-row>
          <b-col>
            <h3 class="text-black-50 m-0">Варианты ответов</h3>
          </b-col>
        </b-row>
      </b-container>
      <AnswerCECard v-for="ans in data.answers" :task-id="id" :sd="ans" :key="`ans-${ans.id}`"
                    @updated="onAnswerUpdated(ans, $event)"
                    @deleted="onAnswerDeleted(ans.id)"></AnswerCECard>
      <b-container fluid class="pb-3">
        <b-row class="justify-content-center">
          <b-col lg="auto">
            <b-button variant="success" @click="onAddAnswerClick">
              <i class="icon-plus mr-2"></i>Добавить ответ
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <template v-if="!loading && showChildren">
      <ChildrenE :children="data.children" @update:children="onChildrenUpdated" :saving="childrenSaving"></ChildrenE>
    </template>
  </div>
</template>

<script>
  import _ from "lodash";
  import constants from "../../../constants";
  import utils from "../../../utils";
  import ajax from "../../../ajax";
  import MathJaxVue from '@/components/common/MathJaxVue'
  import AttachmentCECard from './attachments/CECard'
  import AnswerCECard from './answers/CECard'
  import ChildrenE from './ChildrenE'

  export default {
    props: ['routeName'],
    components: {MathJaxVue, AttachmentCECard, AnswerCECard, ChildrenE},
    data() {
      return {
        ld: _, utils, constants,
        loading: false,
        failFB: '',
        data: null,
        notSelectedOption: {id: null, name: '-- не выбрано --'},
        notSelectedChoice: {id: null, name: 'не выбрано'},
        childrenSaving: false,
        childrenNeedResave: false,
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
      showAnswers() {
        return (
          this.id &&
          this.isQuestion &&
          ([constants.TaskTypeOneChoice, constants.TaskTypeMultipleChoice].indexOf(this.data.type_id) > -1)
        );
      },
      showAttachments() {
        return this.id;
      },
      showChildren() {
        return (this.id && this.isGroup);
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
        if (!_.find(this.topics, {id: this.data.topic_id}))
          this.data.topic_id = null;
      },
      'data.topic_id'() {
        if (!_.find(this.subTopics, {id: this.data.sub_topic_id}))
          this.data.sub_topic_id = null;
      },
      childrenSaving(v) {
        if (!v && this.childrenNeedResave) {
          this.childrenNeedResave = false;
          this.$nextTick(() => {
            this.saveChildren();
          });
        }
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
          answers: [],
          attachments: [],
          children: [],
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
            kind_id: this.data.kind_id,
            type_id: this.data.type_id,
            lang_id: this.data.lang_id,
            title: this.data.title,
          },
          (this.data.kind_id === constants.TaskKindQuestion) && {txt: this.data.txt},
          (this.data.kind_id === constants.TaskKindGroup) && {note: this.data.note},
          this.data.grade_id && {grade_id: this.data.grade_id},
          this.data.subject_id && {subject_id: this.data.subject_id},
          this.data.topic_id && {topic_id: this.data.topic_id},
          this.data.sub_topic_id && {sub_topic_id: this.data.sub_topic_id},
          this.data.difficulty_id && {difficulty_id: this.data.difficulty_id},
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
      onAddAnswerClick() {
        if (_.find(this.data.answers, {id: 0})) return;
        this.data.answers.push({id: 0});
      },
      onAnswerUpdated(ans, newAns) {
        _.assign(ans, newAns);
      },
      onAnswerDeleted(id) {
        this.data.answers = _.reject(this.data.answers, {id});
      },
      onAddAttachmentClick() {
        if (_.find(this.data.attachments, {id: 0})) return;
        this.data.attachments.push({id: 0});
      },
      onAttachmentUpdated(att, newAns) {
        _.assign(att, newAns);
        this.data.attachments = _.sortBy(this.data.attachments, ['ord']);
      },
      onAttachmentDeleted(id) {
        this.data.attachments = _.reject(this.data.attachments, {id});
      },
      onChildrenUpdated(newList) {
        this.data.children = newList;
        if (this.childrenSaving) {
          this.childrenNeedResave = true;
        } else {
          this.saveChildren();
        }
      },
      saveChildren() {
        this.childrenSaving = true;
        let body = {child_ids: _.map(this.data.children, 'id')};
        ajax.reqAPI(`tasks/${this.id}`, {method: 'PUT', body}).then(response => {
          this.childrenSaving = false;
        }).catch(error => {
          if (error.status === 401) {
            this.$store.commit('setProfile', null);
            this.$router.push({name: 'auth'});
          }
        });
      },
    },
    created() {
      this.fetch();
    },
  }
</script>
