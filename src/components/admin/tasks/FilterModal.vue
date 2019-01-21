<template>
    <b-modal size="lg"
             title="Фильтр"
             header-class="py-2"
             body-class="py-4"
             footer-class="py-2"
             visible
             @hide.prevent="onClose">
        <el-form label-position="top">
            <el-row>
                <el-col :span="10">
                    <el-form-item label="Вид задания">
                        <el-radio-group v-model="data.kind_id">
                            <el-radio-button size="small" v-for="item in task_kinds" :label="item.id">{{item.name}}
                            </el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-form-item label="Сложность">
                        <el-radio-group v-model="data.difficulty_id">
                            <el-radio-button v-for="item in difficulties" :label="item.id">{{item.name}}
                            </el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item label="Язык">
                        <el-radio-group v-model="data.lang_id">
                            <el-radio-button v-for="item in langs"
                                             :label="item.id"
                            >
                                {{item.name}}
                            </el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="Класс">
                        <el-select v-model="data.grade_id">
                            <el-option v-for="item in grades"
                                       :label="item.name"
                                       :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Тема">
                        <el-select v-model="data.topic_id">
                            <el-option v-for="item in topics"
                                       :label="item.name"
                                       :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Предмет">
                        <el-select v-model="data.subject_id">
                            <el-option v-for="item in subjects"
                                       :label="item.name"
                                       :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Подтема">
                        <el-select v-model="data.sub_topic_id">
                            <el-option v-for="item in subTopics"
                                       :label="item.name"
                                       :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-form-item v-if="isQuestion" label="Тип вопроса">
                        <el-select v-model="data.sub_topic_id">
                            <el-option v-for="item in task_types"
                                       :label="item.name"
                                       :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="modal-footer">
            <el-button type="success" @click="onSubmit">Применить</el-button>
            <el-button @click="onResetClick">Сбросить</el-button>
            <el-button @click="onClose">Отмена</el-button>
        </div>
    </b-modal>
</template>

<script>
    import _ from "lodash"
    import constants from "@/constants"

    export default {
        props: ['pars'],
        data() {
            return {
                ld: _,
                data: 'null',
                notSelectedOption: {id: null, name: 'любой'},
                notSelectedChoice: {id: null, name: 'любой'},
                notSetOption: {id: -1, name: 'не указан'},
                notSetChoice: {id: -1, name: 'не указан'},
            }
        },
        computed: {
            task_types() {
                return this.ld.concat([this.notSelectedOption], this.$store.state.task_types)
            },
            subjects() {
                return this.ld.concat([this.notSelectedOption, this.notSetOption], this.$store.state.subjects)
            },
            grades() {
                return this.ld.concat([this.notSelectedOption, this.notSetOption], this.$store.state.grades)
            },
            langs() {
                return this.ld.concat([this.notSelectedChoice], this.$store.state.langs)
            },
            difficulties() {
                return this.ld.concat([this.notSelectedChoice, this.notSetChoice], this.$store.state.difficulties)
            },
            task_kinds() {
                return this.ld.concat([this.notSelectedChoice], this.$store.state.task_kinds)
            },
            isQuestion() {
                return this.data.kind_id === constants.TaskKindQuestion;
            },
            isGroup() {
                return this.data.kind_id === constants.TaskKindGroup;
            },
            topics() {
                return _.concat([this.notSelectedOption, this.notSetOption], _.filter(this.$store.state.topics, {subject_id: this.data.subject_id}));
            },
            subTopics() {
                return _.concat([this.notSelectedOption, this.notSetOption], _.filter(this.$store.state.sub_topics, {topic_id: this.data.topic_id}));
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
                let data = _.omitBy(this.data, _.isNil);
                this.onClose();
                this.$emit('update', data);
            },
            onResetClick() {
                this.data = this.emptyData();
                this.onSubmit();
            },
        },
        created() {
            this.data = _.assign(this.emptyData(), this.pars);
        },
    }
</script>
