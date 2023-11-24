/**
 * All Rights Reserved, Copyright(c) Fujitsu Learning Media Limited
 * 
 * ファイル名：employeeManager.js
 * 　　従業員登録用store
 */

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employeeManager', () => {

  //従業員
  const employee = ref({})
  //従業員リスト
  const employeeList = ref([])

  /**
   * addEmployee
   * 　引数で渡された従業員オブジェクトを従業員リストに追加する
   * @function
   * @param emp {object} 従業員オブジェクト{employeeName : employeeName.value}
   */
  const addEmployee = (emp) => {
    employeeList.value.push(emp)
  }

  return { employee, employeeList, addEmployee }
})
