<template>
  <div>
    <template v-if="$route.name === routeName">
      <b-card no-body class="animated fadeIn">
        <b-card-header>
          <div class="d-flex align-items-center justify-content-between">
            <div>Предметы</div>
            <div>
              <b-button variant="success" @click="onAddClick">
                <i class="icon-plus mr-2"></i>Создать
              </b-button>
            </div>
          </div>
        </b-card-header>
        <b-card-body class="pb-1">
          <div v-if="loading" class="text-center"><i class="spnr"></i></div>
          <b-table v-else="" responsive="sm"
                   :fields="fields" :items="items"
                   tbody-class="cursor-pointer"
                   @row-clicked="onItemClick"
                   empty-text="Записи не найдены" fixed bordered hover>
          </b-table>
        </b-card-body>
      </b-card>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
  import constants from "../../../../constants";
  import utils from "../../../../utils";

  export default {
    props: ['routeName'],
    data() {
      return {
        utils, constants,
        loading: false,
        failFB: '',
        fields: [
          {key: 'ord', label: '№', thStyle: 'width: 70px'},
          {key: 'name', label: 'Наименование'},
        ],
      };
    },
    computed: {
      items() {
        return this.$store.state.subjects;
      },
    },
    methods: {
      onAddClick() {
        this.$router.push({path: 'ce/0', append: true});
      },
      onItemClick(item) {
        // this.largeModal = true;
        this.$router.push({path: 'ce/' + item.id, append: true});
      },
    },
  }
</script>
