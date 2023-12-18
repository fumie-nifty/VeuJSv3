<template>
  <div>
    <v-app>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="title">従業員登録</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account-circle"
              label="登録者名"
              v-model="name"
            ></v-text-field>
            <v-card-actions>
              <v-btn class="primary" v-on:click="insertMember">登録</v-btn>
            </v-card-actions>
          </v-form>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">従業員名</th>
                </tr>
              </thead>
               <tbody v-show="showList">
                <tr v-for="(list, index) in lists" v-bind:key="list.name">
                  <th>{{ index + 1 }}</th>
                  <td class="text-left">{{ list.name }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-footer class="pa-3">
          <v-spacer></v-spacer>
          <div>
            富士通ラーニングメディア&copy; {{ new Date().getFullYear() }}
          </div>
        </v-footer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "InsertMember",
  data() {
    return {
      name: "",
      lists: [],
      showList: false
    }
  },
  methods: {
    insertMember: function () {
      if (this.name !== "") {
        this.lists.push({
          name: this.name
        });
        this.name = ""
        this.showList = true
      }
    }
  }
}
</script>