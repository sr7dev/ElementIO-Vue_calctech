<template>
  <b-card no-body class="animated fadeIn m-0">
    <b-card-header>
      <div>{{hdr || 'Задачи'}}</div>
    </b-card-header>
    <b-card-body class="py-1 px-1">
      <table class="w-100">
        <thead>
        <tr class="bg-gray-100 text-black-50">
          <th class="py-1 px-2 border border-secondary" style="width: 1%">Вид</th>
          <th class="py-1 px-2 border border-secondary">Заголовок</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in items" :key="'task-'+row.id" class="cursor-pointer">
          <td class="p-2 border border-secondary">{{row.kind_name}}</td>
          <td class="p-2 border border-secondary">{{row.title}}</td>
        </tr>
        </tbody>
      </table>
    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    props: ['hdr', 'items'],
    data() {
      return {};
    },
    methods: {},
  }
</script>