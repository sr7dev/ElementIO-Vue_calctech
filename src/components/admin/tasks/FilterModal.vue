<template>
  <b-modal size="lg"
           title="Фильтр"
           header-class="py-2"
           body-class="py-4"
           footer-class="py-2"
           visible
           @hide.prevent="onClose">
    <b-form @submit.prevent="onSubmit">
      <b-container fluid>
        <b-row>
          <b-col lg="6">
            <b-form-group label="Вид задачи">
              <b-form-radio-group buttons
                                  button-variant="outline-primary"
                                  v-model.number="data.kind_id"
                                  :options="ld.concat([notSelectedChoice], $store.state.task_kinds)"
                                  value-field="id"
                                  text-field="name"></b-form-radio-group>
            </b-form-group>
          </b-col>
          <b-col lg="6">
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
          <b-col lg="12">
            <b-form-group label="Язык">
              <b-form-radio-group buttons
                                  button-variant="outline-primary"
                                  v-model.number="data.lang_id"
                                  :options="ld.concat([notSelectedChoice], $store.state.langs)"
                                  value-field="id"
                                  text-field="name"></b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-form-group label="Класс">
              <b-select v-model.number="data.grade_id"
                        :options="ld.concat([notSelectedOption], $store.state.grades)"
                        value-field="id" text-field="name"></b-select>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Предмет">
              <b-select v-model.number="data.subject_id"
                        :options="ld.concat([notSelectedOption], $store.state.subjects)"
                        value-field="id" text-field="name"></b-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-form-group label="Тема">
              <b-select v-model.number="data.topic_id" :options="topics"
                        value-field="id" text-field="name"></b-select>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group label="Подтема">
              <b-select v-model.number="data.sub_topic_id" :options="subTopics"
                        value-field="id" text-field="name"></b-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-form-group v-if="isQuestion" label="Тип вопроса">
              <b-select v-model.number="data.type_id"
                        :options="ld.concat([notSelectedOption], $store.state.task_types)"
                        value-field="id" text-field="name"></b-select>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
    <div slot="modal-footer">
      <b-button variant="success" class="px-3" @click="onSubmit">Применить</b-button>
      <b-button variant="secondary" class="px-3 ml-2" @click="onClose">Отмена</b-button>
    </div>
  </b-modal>
</template>

<script>
  import _ from "lodash"
  import constants from "../../../constants"

  export default {
    props: ['pars'],
    data() {
      return {
        ld: _,
        data: null,
        notSelectedOption: {id: null, name: 'любой'},
        notSelectedChoice: {id: null, name: 'любой'},
      }
    },
    methods: {
      emptyData() {
        return {
          kind_id: null,
          type_id: null,
          lang_id: null,
          grade_id: null,
          subject_id: null,
          topic_id: null,
          sub_topic_id: null,
          difficulty_id: null,
        };
      },
      onClose() {
        this.$emit('close');
      },
      onSubmit() {
        let data = this.data;
        this.onClose();
        this.$emit('update', data);
      },
    },
    computed: {
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
        if (!_.find(this.topics, {id: this.data.topic_id}))
          this.data.topic_id = null;
      },
      'data.topic_id'() {
        if (!_.find(this.subTopics, {id: this.data.sub_topic_id}))
          this.data.sub_topic_id = null;
      },
    },
    created() {
      this.data = _.assign(this.emptyData(), this.pars);
    },
  }
</script>
