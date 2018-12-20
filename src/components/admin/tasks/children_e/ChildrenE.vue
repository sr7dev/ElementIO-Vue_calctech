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
          <b-card-header>
            <div>Все задачи</div>
          </b-card-header>
          <b-card-body class="py-1 px-1">
            asdasdfasdfasd
          </b-card-body>
        </b-card>
      </b-col>
      <b-col class="px-0 ml-3 animated fadeIn">
        <Table hdr="Дочерние задачи" :items="children"></Table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Table from "./Table";

  export default {
    props: ['children'],
    components: {Table},
    data() {
      return {};
    },
    methods: {},
  }
</script>

<style scoped>
  .children-tasks {

  }
</style>