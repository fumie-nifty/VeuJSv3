<template>
  <v-app>
    <v-card width="450px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="title">従業員検索</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="検索したい従業員番号を入力してください"
            v-model="keyWord"
          ></v-text-field>
          <v-card-actions>
            <v-btn class="primary" v-on:click="searchMember">検索</v-btn>
          </v-card-actions>
        </v-form>
        <v-simple-table >
          <template v-slot:default>
             <tbody>
              <tr>
                <th class="text-left ">検索結果</th>
                <td class="blue lighten-5 text-left">{{ response }}</td>
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
</template>

<script>
export default {
  name: "SearchMember",
  data() {
    return {
      response: "",
      keyWord: "",
      lists: [],
    };
  },
  methods: {
    searchMember: function () {
      let vm  = this;
      this.$axios.get("../sample.json/").then((res) => {
        const data = res.data;
        for (let i in data) {
          let id = data[i].id;
          if (id == vm.keyWord) {
            return (vm.response = data[i].name);
          }
        }
        vm.response = "結果なし";
      })
    }
  }
}
</script>
