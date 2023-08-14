<template>
  <div class="hello">
    <v-app>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="title">従業員一覧</h1>
        </v-card-title>
              <v-card-text>
        <v-card-actions>
            <v-btn v-on:click="searchTable" color="primary" tile medium>一覧を表示します</v-btn>
        </v-card-actions>
        <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">従業員番号</th>
                    <th class="text-center">従業員名</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tables" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
              </v-card-text>
          <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>富士通ラーニングメディア&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "SearchTable",
  data() {
    return {
      tables: []
    }
  },
  methods: {
    searchTable: function () {
      let vm = this
      this.$axios.get("../sample.json/").then((res) => {
        vm.tables = res.data;
      })
    }
  }
}
</script>
