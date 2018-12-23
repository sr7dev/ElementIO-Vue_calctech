<template>
  <b-container fluid class="mt-5">
    <b-row class="mb-4">
      <b-col>
        <h3 class="text-black-50 m-0">Дочерние задачи</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="px-0">
        <b-card no-body class="animated fadeIn m-0">
          <b-card-header class="p-2">
            <b-container fluid>
              <b-row class="align-items-center">
                <b-col class="p-0">
                  Все задачи
                </b-col>
                <b-col md="auto" class="p-0">
                  <b-button variant="primary" size="sm" @click="">
                    <i class="fa fa-filter px-1"></i>
                  </b-button>
                </b-col>
                <b-col md="auto" class="p-0 ml-md-3">
                  <b-form-input type="text" size="sm" placeholder="поиск..."/>
                </b-col>
                <b-col md="auto" class="p-0 ml-md-3">
                  <b-pagination size="sm"
                                :total-rows="100"
                                :per-page="10"
                                :limit="1"
                                hide-ellipsis
                                hide-goto-end-buttons
                                class="m-0"></b-pagination>
                </b-col>
              </b-row>
            </b-container>
          </b-card-header>
          <b-card-body class="p-1">
            <div class="font-sm text-black-50 mb-1">Показано: 3 из 65</div>
            <table class="table table-sm table-bordered table-hover mb-0">
              <thead class="bg-gray-100 text-black-50">
              <tr>
                <th class="width-1per">Вид</th>
                <th>Заголовок</th>
                <th class="width-1per">Сложность</th>
              </tr>
              </thead>
              <draggable v-model="srcItems"
                         :options="{group: 'task-items', dataIdAttr: 'id', filter: '.text-secondary'}"
                         element="tbody">
                <tr v-for="(item, i) in srcItems" :key="'ai-'+i+'-'+item.id"
                    :class="{'text-secondary': srcItemInChildren(item), 'cursor-move': !srcItemInChildren(item)}">
                  <template v-if="item.id">
                    <td>{{item.kind_name}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.difficulty_name}}</td>
                  </template>
                  <td v-else="" colspan="3" class="border-0">
                    &nbsp;
                  </td>
                </tr>
              </draggable>
            </table>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col md="auto" class="px-2 d-flex align-items-center">
        <i class="icon-arrow-right"></i>
      </b-col>
      <b-col class="px-0 animated fadeIn">
        <b-card no-body class="animated fadeIn m-0">
          <b-card-header class="p-2">
            <b-container fluid>
              <b-row class="align-items-center">
                <b-col class="p-0">
                  Дочерние задачи
                </b-col>
                <b-col md="auto" class="p-0 mr-2">
                  <b-form-input type="text" size="sm" placeholder="поиск..."/>
                </b-col>
              </b-row>
            </b-container>
          </b-card-header>
          <b-card-body class="p-1">
            <div class="font-sm text-black-50 mb-1">Элементов: 2</div>
            <table class="table table-sm table-bordered table-hover mb-0">
              <thead class="bg-gray-100 text-black-50">
              <tr>
                <th class="width-1per">Вид</th>
                <th>Заголовок</th>
                <th class="width-1per">Сложность</th>
              </tr>
              </thead>
              <draggable v-model="dstItems"
                         :options="{group: 'task-items', dataIdAttr: 'id'}"
                         element="tbody">
                <tr v-for="(item, i) in dstItems" :key="'ci-'+i+'-'+item.id"
                    :class="{'cursor-move': item.id}">
                  <template v-if="item.id">
                    <td>{{item.kind_name}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.difficulty_name}}</td>
                  </template>
                  <td v-else="" colspan="3" class="border-0">
                    &nbsp;
                  </td>
                </tr>
              </draggable>
            </table>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import _ from 'lodash'
  import draggable from 'vuedraggable'

  export default {
    props: ['children'],
    components: {draggable},
    data() {
      return {
        tableFields: [
          {key: 'kind_name', label: 'Вид', thClass: 'width-1per'},
          {key: 'title', label: 'Заголовок'},
          {key: 'difficulty_name', label: 'Сложность', thClass: 'width-1per'},
        ],
        srcRows: [
          {id: 101, kind_name: 'Вопрос1', title: 'Title1', difficulty_name: '5'},
          {id: 102, kind_name: 'Вопрос2', title: 'Title2', difficulty_name: '5'},
          {id: 103, kind_name: 'Вопрос3', title: 'Title3', difficulty_name: '5'},
        ],
      };
    },
    computed: {
      maxItemCount() {
        return Math.max(this.children.length, this.srcRows.length);
      },
      srcItems: {
        get() {
          return _.assign(_.fill(new Array(this.maxItemCount), {id: 0}), this.srcRows);
        },
        set(value) {
          // console.log('daaaaaa', value);
        },
      },
      dstItems: {
        get() {
          return _.assign(_.fill(new Array(this.maxItemCount), {id: 0}), this.children);
        },
        set(value) {
          this.$emit('update:children', _.reject(value, {id: 0}));
        },
      },
    },
    methods: {
      srcItemInChildren(item) {
        return _.find(this.children, {id: item.id});
      },
    },
  }
</script>