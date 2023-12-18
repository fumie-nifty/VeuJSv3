<template>
  <div>
    <v-app>
      <v-card width="700px" class="mx-auto mt-5">
        <v-card-title>登録したい商品情報を入力後、INSERTボタンを押下してください</v-card-title>
        <v-card-text>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="options" v-model="productName" label="商品を選択してください" outlined></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field label="金額を入力してください" v-model.number="price" type="number" min="0"></v-text-field>
          </v-col>
          <v-radio-group row v-model="color" column label="色を選択してください">
            <v-radio label="赤" value="赤"></v-radio>
            <v-radio label="青" value="青"></v-radio>
          </v-radio-group>
          <v-card-actions>
            <v-btn v-on:click="insertItem()" class="ma-2" color="primary" dark> Insert<v-icon dark right>
                mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </v-card-actions>
          <v-simple-table v-show="showFlag">
            <template v-slot:default>
              <thead class="text-center">
                <th>No</th>
                <th>商品名</th>
                <th>カラー</th>
                <th>金額</th>
                <th>CANCEL</th>
              </thead>
              <tbody class="text-center">
                <tr v-for="(list,index) in lists" v-bind:key="list.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ list.productName }}</td>
                  <td>{{ list.color }}</td>
                  <td>{{ list.price }}円</td>
                  <td>
                    <v-btn v-on:click="deleteItem(index)" class="ma-2" dark>
                      <v-icon dark left>mdi-minus-circle</v-icon>Cancel
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'InsertItem',
    data() {
      return {
        options: ['ハイカットスニーカー', 'ミドルスニーカー', 'ローカットスニーカー', 'サンダル'],
        id: 0, //v-for用のid
        productName: '', //商品名
        color: '', //色
        price: '', //金額
        lists: [], //配列
        showFlag: false //テーブル表示フラグ
      }
    },
    methods: { //入力値をlistsに格納
      insertItem: function () {
        //すべての情報が入力された場合
        if (this.productName !== '' && this.color !== '' && this.price !== 0) {
          this.id = this.id + 1
          this.lists.push({
            productName: this.productName,
            color: this.color,
            price: this.price
          })
          this.showFlag = true //テーブルの表示
          //入力値のクリア
          this.productName = ''
          this.color = ''
          this.price = ''
        } else {
          alert('すべての商品情報を入力してください。')
        }
      },
      deleteItem: function (index) {
        if (window.confirm('削除しますか？')) {
          //選択された商品情報を削除
          this.lists.splice(index, 1)
          //商品情報が空の場合テーブルを非表示にする
          if (this.lists.length === 0) {
            this.showFlag = false
          }
        }
      }
    }
  }
</script>